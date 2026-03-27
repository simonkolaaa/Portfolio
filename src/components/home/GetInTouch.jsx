import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";

const GetInTouch = ({ heading, message, email }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", msg: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", msg: "" });

    try {
      // Effettua la chiamata API verso il nuovo server in produzione
      const response = await fetch("https://simonkolaaa.pythonanywhere.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: "success", msg: data.success || "Messaggio inviato con successo!" });
        // Svuota i campi del form dopo un successo
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({ type: "danger", msg: data.error || "Si è verificato un errore." });
      }
    } catch (error) {
      setStatus({ type: "danger", msg: "Errore di rete: Impossibile contattare il server. Riprova più tardi." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container id="contact" className="pb-5">
      <h2 className="display-4 pb-3 text-center">{heading}</h2>
      <p className="lead text-center pb-3">
        {message}. Puoi mandarmi una mail a <a className="text-decoration-none" href={`mailto:${email}`}>{email}</a> oppure usare direttamente il modulo qui sotto!
      </p>
      
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          {status.msg && <Alert variant={status.type} className="text-center shadow-sm">{status.msg}</Alert>}
          
          <Form onSubmit={handleSubmit} className="shadow-lg p-4 bg-white rounded">
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label className="fw-bold">Nome</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Inserisci il tuo nome" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label className="fw-bold">Email</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="La tua email per essere ricontattato" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formMessage">
              <Form.Label className="fw-bold">Messaggio</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={5} 
                placeholder="Scrivi qui la tua idea, proposta o un semplice saluto..." 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required 
              />
            </Form.Group>

            <div className="d-grid">
              <Button variant="primary" type="submit" size="lg" disabled={loading}>
                {loading ? "Invio in corso..." : "Invia Messaggio"}
              </Button>
            </div>
          </Form>

        </div>
      </div>
    </Container>
  );
};

export default GetInTouch;
