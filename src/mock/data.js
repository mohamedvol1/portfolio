import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Mohamed Khaled',
  subtitle: "I'm a web Developer",
  cta: '',
};

// ABOUT DATA
// const smilyFace = String.fromCodePoint(0x128517);
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne:
    "I'm student in the Faculty of computer Science and Automated control at Tanta University",
  paragraphTwo: `
    A self-taught web developer who is always passionate about learning new technologies and can build new stuff with various programming languages and tools.
  `,
  paragraphThree:
    "Currently exploring opportunities and side projects",
  resume: 'https://docs.google.com/document/d/1VIsbZkidNjoMPlbGZkz8xlROy5AbwoN8ZMvSsFXuUGA/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'e-commerce.png',
    title: 'e-commerce app',
    info: 'this full-stack e-commerce app includes ReactJS in front-End, MaterialUi components, and server for online stripe payments with nodeJs',
    info2: 'it handles also users sign in and sign out and users sessions using firebase',
    url: 'https://clothnig-club.onrender.com/',
    repo: 'https://github.com/mohamedvol1/clothing-club', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'face-recognition.png',
    title: 'face-recognition app',
    info: `full-stack face recognition app uses Clarify API to Detects faces in the images by passing its URL.
      Front-End developed in ReactJS and NodeJs in Back-End and it leverages PostgresDB`,
    info2:
      "this was my first real project and I'm aware it needs a lot of work and it will have updates",
    url: 'https://phenomenal-meringue-c79e88.netlify.app/',
    repo: 'https://github.com/mohamedvol1/faceRecognitionApp101', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Banking_app.png',
    title: 'Banking app',
    info: `A simple banking app, through it you can make transactions between clients registered on the system`,
    info2:
      "",
    url: 'https://banking-app-hbp5.onrender.com/',
    repo: 'https://github.com/mohamedvol1/Basic-Bank-System', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '+201100384316(whatsapp)',
  btn: 'E-MAIL ME',
  email: 'mohamedkh9900@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/mohamed-khaled-8025221a2',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/mohamedvol1',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
