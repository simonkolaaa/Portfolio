// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#2c3e50, #000000, #34495e, #1a252f",
  firstName: "Simon",
  middleName: "",
  lastName: "Kola",
  it: {
    message: [
      "Appassionato di tecnologia per cambiare il mondo.",
      "Sempre a imparare, sempre a programmare.",
      "Problem solver per natura.",
      "Trasformo il caffè in codice pulito.",
      "Futuro Software Engineer."
    ]
  },
  en: {
    message: [
      "Passionate about changing the world with technology.",
      "Always learning, always coding.",
      "Problem solver at heart.",
      "Turning coffee into clean code.",
      "Future Software Engineer."
    ]
  },
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/simonkolaaa",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/simonkolaaa/",
    },
  ],
};

// ABOUT SECTION
const about = {
  show: true,
  it: {
    heading: "Chi Sono",
    message: "Sono uno studente di informatica con una forte passione per lo sviluppo web e le architetture backend. Nel corso dei miei studi e dei miei progetti personali ho approfondito l'utilizzo di linguaggi e framework come Python, Flask, HTML, CSS, JS, JSON e diversi strumenti DevOps. Attualmente sto espandendo le mie competenze esplorando il mondo del frontend con React e linguaggi di sistema performanti come Rust. Mi piace affrontare sfide complesse, trovare soluzioni ai problemi e tenermi costantemente aggiornato sulle ultime tecnologie."
  },
  en: {
    heading: "About Me",
    message: "I am a Computer Science student with a strong passion for web development and backend architectures. Throughout my studies and personal projects, I have deepened my knowledge of languages and frameworks such as Python, Flask, HTML, CSS, JS, JSON, and various DevOps tools. Currently, I am expanding my skill set by exploring frontend development with React and high-performance system languages like Rust. I enjoy tackling complex challenges, finding solutions to problems, and keeping constantly updated on the latest technologies."
  },
  imageLink: require("../editable-stuff/simonkola.png"),
  imageSize: 300,
  resume: "",
  roadmap: "https://developer-roadmap-simonkolaa.vercel.app",
};

// PROJECTS SECTION
const repos = {
  show: true,
  it: { heading: "Progetti GitHub" },
  en: { heading: "GitHub Projects" },
  profiles: [
    {
      username: "simonkolaaa",
      reposLength: 0,
      specificRepos: ["portfolio-backend", "checkfeed-bot", "developer-roadmap"]
    },
    {
      username: "SimonKolaa",
      reposLength: 0,
      specificRepos: ["Repo5M", "Progetto_5M", "freqtrade"]
    }
  ]
};

// Leadership SECTION
const leadership = {
  show: true,
  it: {
    heading: "Progetti in Team",
    message: "Durante il mio percorso scolastico e personale ho collaborato a diversi progetti in team, sviluppando logiche backend in Python (Flask) e interfacce web responsive. Lavorare in gruppo mi ha insegnato a comunicare meglio, risolvere problemi complessi in team e strutturare codice pulito. Sono molto propenso a fare nuove conoscenze, ad ascoltare le idee degli altri e a collaborare attivamente per raggiungere obiettivi comuni. Amo affrontare nuove sfide informatiche e aiutare i compagni nel problem solving, creando un ambiente di lavoro positivo e stimolante."
  },
  en: {
    heading: "Team Projects",
    message: "During my academic and personal journey, I have collaborated on several team projects, developing backend logic in Python (Flask) and responsive web interfaces. Working in groups taught me to communicate better, solve complex team problems, and structure clean code. I am very inclined to make new acquaintances, listen to others' ideas, and actively collaborate to achieve common goals. I love tackling new computing challenges and helping classmates with problem-solving, creating a positive and stimulating work environment."
  },
  images: [],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  it: { heading: "Competenze" },
  en: { heading: "Skills" },
  hardSkills: [
    { name: "Python", value: 85 },
    { name: "Flask", value: 75 },
    { name: "HTML/CSS", value: 90 },
    { name: "JavaScript", value: 80 },
    { name: "SQL", value: 70 },
    { name: "React", value: 60 },
    { name: "AI", value: 40 },
    { name: "Rust", value: 40 },
  ],
  softSkills: [
    { name: "Lavorare per Obiettivi", value: 80 },
    { name: "Collaborazione", value: 90 },
    { name: "Positività", value: 75 },
    { name: "Adattabilità", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empatia", value: 90 },
    { name: "Organizzazione", value: 70 },
    { name: "Creatività", value: 90 },
  ],
  softSkillsEn: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ]
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  it: {
    heading: "Contattami",
    message: "Se hai domande, proposte di collaborazione o vuoi solo fare un saluto, sentiti libero di inviarmi un messaggio. Ti risponderò il prima possibile!"
  },
  en: {
    heading: "Get In Touch",
    message: "If you have any questions, collaboration proposals, or if you just want to say hi, please feel free to send me a message. I will reply as soon as possible!"
  },
  email: "simonkola21@gmail.com",
};

const experiences = {
  show: true,
  it: {
    heading: "Percorso ed Esperienze",
    data: [
      {
        role: 'Studente di Informatica',
        companylogo: [
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg",
          "https://raw.githubusercontent.com/mermaid-js/mermaid/develop/docs/public/favicon.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xml/xml-original.svg"
        ],
        date: 'Fino al 2026',
      },
      {
        role: 'IDE',
        companylogo: [
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
          "https://www.cursor.com/assets/images/logo.svg",
          "https://unpkg.com/@lobehub/icons-static-svg/icons/antigravity-color.svg"
        ],
        date: '2024 - Presente',
      },
      {
        role: 'Strumenti',
        companylogo: [
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
          "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/claude-ai-icon.svg",
          "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.svg",
          "https://n8n.io/favicon.ico"
        ],
        date: 'Tecnologie',
      }
    ]
  },
  en: {
    heading: "Education & Experience",
    data: [
      {
        role: 'Computer Science Student',
        companylogo: [
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg",
          "https://raw.githubusercontent.com/mermaid-js/mermaid/develop/docs/public/favicon.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xml/xml-original.svg"
        ],
        date: 'Until 2026',
      },
      {
        role: 'IDE',
        companylogo: [
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
          "https://www.cursor.com/assets/images/logo.svg",
          "https://unpkg.com/@lobehub/icons-static-svg/icons/antigravity-color.svg"
        ],
        date: '2024 - Present',
      },
      {
        role: 'Tools',
        companylogo: [
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
          "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/claude-ai-icon.svg",
          "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.svg",
          "https://n8n.io/favicon.ico"
        ],
        date: 'Technologies',
      }
    ]
  }
}

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
