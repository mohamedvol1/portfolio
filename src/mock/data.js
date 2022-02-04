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
    Regarding software development,
    I started my development journey with C/C++ in embedded system applications then I got more attracted by the web technologies so I started to learn Javascript and React ecosystems like redux, sagas, react-router, and react Hooks
    also familiar with back-end technologies like nodeJS, express, and Postgres also have knowledge in IT automation with python 
  `,
  paragraphThree:
    "I know that sounds like a lot of diversity 😅, but I'm always willing to explore and learn new technologies",
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'e-commerce.png',
    title: 'e-commerce app',
    info: 'this full-stack e-commerce app includes ReactJS in front-End, firebase in Back-End, and online payments using stripe',
    info2: 'it handles also users sign in and sign out and users sessions',
    url: 'https://clothing-club-102.herokuapp.com/',
    repo: 'https://github.com/mohamedvol1/clothing-club', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'face-recognition.png',
    title: 'face-recognition app',
    info: `full-stack face recognition app uses Clarify API to Detects faces in the images by passing its URL.
      Front-End developed in ReactJS and NodeJs in Back-End and it leverages PostgresDB`,
    info2:
      "this was my first real project and I'm aware it needs a lot of work it's not finished for me yet",
    url: 'https://stoic-jang-3f18b5.netlify.app/',
    repo: 'https://github.com/mohamedvol1/faceRecognitionApp101', // if no repo, the button will not show up
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
