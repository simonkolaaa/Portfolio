// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Simon",
  middleName: "",
  lastName: "Kola",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/simonkolaaa",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/hashirshoaeb",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/hashirshoaeb/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/hashirshoaeb/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/hashirshoaeb/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/simonkola.png"),
  imageSize: 375,
  message:
    "Sono uno studente di informatica che ha studiato Python, Flask, HTML, JS, JSON ecc.",
  resume: "",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "SimonKolaa", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Progetti Speciali e Collaborazioni",
  message:
    "Durante il mio percorso scolastico ho collaborato a diversi progetti in team, sviluppando logiche backend in Python (Flask) e interfacce web responsive. Lavorare in gruppo mi ha insegnato a comunicare meglio, risolvere problemi complessi in team e strutturare codice pulito. Amo affrontare nuove sfide informatiche e aiutare i compagni nel problem solving.",
  images: [
    { 
      img: require("../editable-stuff/simonkola.png"), 
      label: "Problem Solving", 
      paragraph: "Amo trovare la soluzione ottimale ai problemi logici." 
    },
    { 
      img: require("../editable-stuff/simonkola.png"), 
      label: "Teamwork", 
      paragraph: "Codice scritto e versionato in team usando Git e GitHub." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 85 },
    { name: "Flask", value: 75 },
    { name: "HTML/CSS", value: 90 },
    { name: "JavaScript", value: 80 },
    { name: "SQL", value: 70 },
    { name: "C/C++", value: 65 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm an IT student currently studying Python, Flask, and Web Technologies. If you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "simon.kola@example.com",
};

const experiences = {
  show: true,
  heading: "Percorso ed Esperienze",
  data: [
    {
      role: 'Sviluppatore Web & Backend (Progetti IT)',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'Settembre 2025 – Presente',
    },
    {
      role: 'Studente di Informatica',
      companylogo: require('../assets/img/boeing.png'),
      date: 'Fino al 2026',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
