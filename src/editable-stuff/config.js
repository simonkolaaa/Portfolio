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
    message: "Sono uno studente di informatica appassionato dello sviluppo web e backend. Ho studiato linguaggi e framework come Python, Flask, HTML, JS, JSON e vari strumenti DevOps."
  },
  en: {
    heading: "About Me",
    message: "I am a Computer Science student passionate about web and backend development. I have studied languages and frameworks such as Python, Flask, HTML, JS, JSON, and various DevOps tools."
  },
  imageLink: require("../editable-stuff/simonkola.png"),
  imageSize: 300,
  resume: "",
};

// PROJECTS SECTION
const repos = {
  show: true,
  it: { heading: "Progetti Recenti" },
  en: { heading: "Recent Projects" },
  gitHubUsername: "SimonKolaa", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: ["portfolio-backend"],
};

// Leadership SECTION
const leadership = {
  show: true,
  it: {
    heading: "Progetti in Team",
    message: "Durante il mio percorso scolastico ho collaborato a diversi progetti in team, sviluppando logiche backend in Python (Flask) e interfacce web responsive. Lavorare in gruppo mi ha insegnato a comunicare meglio, risolvere problemi complessi in team e strutturare codice pulito. Amo affrontare nuove sfide informatiche e aiutare i compagni nel problem solving."
  },
  en: {
    heading: "Team Projects",
    message: "During my academic journey, I have collaborated on several team projects, developing backend logic in Python (Flask) and responsive web interfaces. Working in groups taught me to communicate better, solve complex team problems, and structure clean code. I love tackling new computing challenges and helping classmates with problem-solving."
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
    message: "Sono uno studente IT attualmente impegnato nello studio di Python, Flask e delle tecnologie web. Se hai domande o vuoi solo fare un saluto, sentiti libero di inviarmi un messaggio!"
  },
  en: {
    heading: "Get In Touch",
    message: "I'm an IT student currently studying Python, Flask, and Web Technologies. If you have any questions, or if you just want to say hi, please feel free to send me a message!"
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
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg",
          "https://raw.githubusercontent.com/mermaid-js/mermaid/develop/docs/public/favicon.svg"
        ],
        date: 'Fino al 2026',
      }
    ]
  },
  en: {
    heading: "Education & Experience",
    data: [
      {
        role: 'Computer Science Student',
        companylogo: [
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg",
          "https://raw.githubusercontent.com/mermaid-js/mermaid/develop/docs/public/favicon.svg"
        ],
        date: 'Until 2026',
      }
    ]
  }
}

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
