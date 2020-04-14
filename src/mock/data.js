import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Patrick Hallek', // e.g: 'Name | Developer'
  lang: 'de', // e.g: en, es, fr, jp
  description: 'Welcome to my personal website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Patrick Hallek',
  subtitle: 'I like to make stuff with code',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `I am a generalist and problem solver. 
                  Through my studies of mechanical engineering I discovered my passion for software development.`,
  paragraphTwo: `Today I combine engineering and software development to build holistic technology and data driven full stack solutions.
                  I work agile in small to medium-sized teams with customers.`,
  paragraphThree: `I am enthusiastic about topics such as IoT, robotics, autonomous driving, embedded software, 3D printing and blockchain technology.`,
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'water-monitor.png',
    title: 'watered',
    info: '',
    info2: '',
    live: 'Visit Landingpage',
    url: 'https://watered.webflow.io/',
    repo: 'https://github.com/PatrickHallek/Water-Monitor', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'forki.png',
    title: 'Forki',
    info: '',
    info2: '',
    live: 'Visit Landingpage',
    url: 'http://www.intrabotics.de/',
    repo: 'https://github.com/newforestberlin/Forki', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'projects.png',
    title: 'More Projects',
    info: '',
    info2: '',
    url: 'https://github.com/PatrickHallek/',
    live: 'Repository',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'patrickhallek1998@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'xing',
      url: 'https://www.xing.com/profile/Patrick_Hallek',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/patrick-hallek/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/PatrickHallek',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
