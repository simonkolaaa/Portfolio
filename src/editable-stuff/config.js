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
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/simonkolaaa",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/simonkola21/",
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
  imageSize: 300,
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
  heading: "Progetti",
  message:
    "Durante il mio percorso scolastico ho collaborato a diversi progetti in team, sviluppando logiche backend in Python (Flask) e interfacce web responsive. Lavorare in gruppo mi ha insegnato a comunicare meglio, risolvere problemi complessi in team e strutturare codice pulito. Amo affrontare nuove sfide informatiche e aiutare i compagni nel problem solving.",
  images: [],
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
  email: "simonkola21@gmail.com",
};

const experiences = {
  show: true,
  heading: "Percorso ed Esperienze",
  data: [
    {
      role: 'Studente di Informatica',
      companylogo: [
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
      ],
      date: 'Fino al 2026',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
