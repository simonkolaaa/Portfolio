import React, { useState, useEffect, useRef } from "react";
import "./ArusWidget.css";

const ARUS_API_URL = "https://simonkolaaa.pythonanywhere.com/api/chat/arus";

const ArusWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "system", text: "Ciao! Sono Arus, l'assistente ufficiale di Simon Kola. Come posso aiutarti?" },
  ]);
  const [inputVal, setInputVal] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const toggleChat = () => setIsOpen(!isOpen);

  const formatText = (text) => {
    return text.split('\n').map((str, index) => (
      <React.Fragment key={index}>
        {str}
        <br />
      </React.Fragment>
    ));
  };

  const handleSend = async () => {
    if (!inputVal.trim()) return;

    const userMessage = inputVal;
    setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);
    setInputVal("");
    setLoading(true);

    try {
      const response = await fetch(ARUS_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");

      setMessages((prev) => [...prev, { sender: "system", text: "" }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunkText = decoder.decode(value, { stream: true });
        const events = chunkText.split("\n\n");

        for (let ev of events) {
          if (ev.startsWith("data: ")) {
            const dataStr = ev.replace("data: ", "").trim();
            if (!dataStr || dataStr === "{}") continue;

            const parsed = JSON.parse(dataStr);
            if (parsed.chunk) {
              setMessages((prev) => {
                const updated = [...prev];
                updated[updated.length - 1].text += parsed.chunk;
                return updated;
              });
            }
          }
        }
      }
    } catch (e) {
      setMessages((prev) => [
        ...prev,
        { sender: "system", text: "Connessione persa col server operativo di Simon." },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="arus-widget-container">
      {isOpen && (
        <div className="arus-chat-window">
          <div className="arus-chat-header">
            <div className="arus-header-info">
              <i className="fa-solid fa-cloud" />
              <span>Arus Assistant</span>
            </div>
            <button className="arus-close-btn" onClick={toggleChat}>
              <i className="fa-solid fa-times" />
            </button>
          </div>

          <div className="arus-chat-body">
            {messages.map((msg, idx) => (
              <div key={idx} className={`arus-msg-row ${msg.sender}`}>
                <div className="arus-bubble">{formatText(msg.text)}</div>
              </div>
            ))}
            {loading && (
              <div className="arus-msg-row system">
                <div className="arus-bubble typing-indicator">...</div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="arus-chat-input-area">
            <input
              type="text"
              placeholder="Chiedimi informazioni su Simon..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              disabled={loading}
            />
            <button onClick={handleSend} disabled={loading}>
              <i className="fa-solid fa-paper-plane" />
            </button>
          </div>
        </div>
      )}

      <button className="arus-fab-btn" onClick={toggleChat}>
        {isOpen ? <i className="fa-solid fa-times" /> : <i className="fa-solid fa-comment-dots" />}
      </button>
    </div>
  );
};

export default ArusWidget;
