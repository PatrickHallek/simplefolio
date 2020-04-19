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
  name: 'Patrick Hallek.',
  subtitle: 'I like to make stuff with code.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `I am a generalist and problem solver. 
                  Through my studies of mechanical engineering I discovered my passion for software development.`,
  paragraphTwo: `Today I combine engineering and software development to build holistic technology and data driven full stack solutions.
                  I work agile in small to medium-sized teams with customers.`,
  paragraphThree: `My experience and passion has been gained especially in projects related to IoT, Industy 4.0, logistics processes and autonomous driving.`,
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'water-monitor.png',
    title: 'watered',
    info: `watered is a mobile smart home app for monitoring the
          waterlevel of your house plants.`,
    info2: `For this project i developed and programmed  water sensors and an iot edge device. You can read more on the landingpage.`,
    live: 'Visit Landingpage',
    url: 'https://watered.webflow.io/',
    repo: 'https://github.com/PatrickHallek/Water-Monitor', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'forki.png',
    title: 'Forki',
    info: `In this project I built an IoT platform to control and manage autonomous moving logistics robots. For
            this I developed an omnidirectional driving PoC, which is monitored as a node with the platform.`,
    info2: `I also wrote two medium article about the technologies. Check out the landingpage if you want to read more about it.`,
    live: 'Visit Landingpage',
    url: 'http://www.intrabotics.de/',
    repo: 'https://github.com/newforestberlin/Forki', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'projects.png',
    title: 'More Projects',
    info: `The best way for me to understand and learn the latest technologies is to realize projects with them.
            That's why I have a large number of implemented projects in my repository. 
            Such as an earthquake dashboard, a gif calendar platform, a blockchain simulation or embedded codes for Arduino and Raspberry Pi`,
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
