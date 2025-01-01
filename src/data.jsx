import { nanoid } from 'nanoid';
import { FaBootstrap, FaHtml5, FaJs, FaPhp, FaReact } from 'react-icons/fa';
import { FaCss3 } from 'react-icons/fa6';
export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
  { id: nanoid(), href: '#Contact', text: 'Contact' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML5',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Mastering the backbone of web development, I use HTML5 to create well-structured, semantic, and accessible web pages. With expertise in implementing modern features like audio, video, and responsive design elements, I ensure every web project is both user-friendly and visually engaging. HTML5 serves as the foundation of my web development journey.',
  },
  {
    id: nanoid(),
    title: 'CSS3 & Tailwind',
    icon: <FaCss3 className='h-16 w-16 text-emerald-500' />,
    text: `With CSS3 and Tailwind CSS Framework I'm Proficient in crafting responsive layouts, animations, and visually appealing designs , Expertise in Flexbox, Grid, and media queries to ensure cross-device compatibility. Skilled in optimizing styles for performance and maintainability and also Experienced in building modern, responsive and Amazingly UIs with Tailwind CSS. `,
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: `'I am proficient in JavaScript, the core language for interactive and dynamic web development. My expertise includes:
 Mastery of ES6+ features such as arrow functions, destructuring, promises, and modules.
DOM Manipulation: Building responsive, interactive user interfaces by dynamically updating and controlling HTML and CSS elements.
APIs & Asynchronous Programming: Integrating RESTful APIs, handling data fetch requests, and ensuring smooth user experiences with async/await and event-driven programming.`,
  },
  {
    id: nanoid(),
    title: 'React JS',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: `As a frontend developer, I have hands-on experience with React.js, which I use to build dynamic and interactive web applications. With React, I am proficient in creating reusable components, managing state efficiently with React hooks (such as useState, useEffect, and useContext), and handling routing with React Router for seamless navigation.

I am familiar with best practices like component-based architecture, functional components, and hooks. I have also worked with state management libraries like Redux and Context API to ensure smooth data flow across complex applications.`,
  },
  {
    id: nanoid(),
    title: 'Bootstrap',
    icon: <FaBootstrap className='h-16 w-16 text-emerald-500' />,
    text: `I have hands-on experience using Bootstrap, a powerful and popular front-end framework for building responsive, mobile-first websites. With Bootstrap, I can quickly design and customize layouts, components, and utilities, ensuring that websites look great on all devices.
With Bootstrap, I can quickly prototype and build fully responsive, visually appealing websites, boosting productivity and ensuring high-quality results.

`,
  },
  {
    id: nanoid(),
    title: 'PHP and MYSQL ',
    icon: <FaPhp className='h-16 w-16 text-emerald-500' />,
    text: `
    As a web developer with experience in PHP, I have developed a strong foundation in creating dynamic and interactive web applications. I am proficient in writing clean, maintainable, and efficient PHP code. My skills include:

Server-Side Scripting: Creating powerful back-end logic to handle user requests, interact with databases, and generate dynamic content.
Database Integration with in working with MySQL and other relational databases to create data-driven applications
Form Handling & Data Validation and Performing Create,Read,Update and Delete Data using PHP code
    `,
  },
  
  
];

export const projects = [
  {
    id: nanoid(),
    title: 'Social Book Clone',
    image: './assets/projects/social_book_clone.png',
    url: 'https://isaie-social-book.netlify.app',
    github: 'https://github.com/mugishaisaie/socialbook',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    title: 'Amazon Web Clone',
    image: './assets/amazon-project.png',
    url: 'https://isaie-review.netlify.app/',
    github: 'https://github.com/john-smilga',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    title: 'Rock-Paper-Scissor Game',
    image: './assets/projects/rock-paper-scissor.png',
    url: 'https://isaie-review.netlify.app/',
    github: 'https://github.com/john-smilga',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    title: 'WorldWise Web App',
    image: './assets/projects/world-wise-app.png',
    url: 'https://isaie-review.netlify.app/',
    github: 'https://github.com/john-smilga',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    title: 'Reviews  App',
    image: './assets/projects/reviews.png',
    url: 'https://isaie-review.netlify.app/',
    github: 'https://github.com/john-smilga',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    title: 'tours App',
    image: './assets/projects/tours.png',
    url: 'https://isaie-tour.netlify.app/',
    github: 'https://github.com/john-smilga',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    title: 'Unsplash images',
    image: './assets/unsplash images.png',
    url: 'https://isaiesplash.netlify.app/',
    github: 'https://github.com/john-smilga',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    title: 'questions App',
    image: './assets/questions.png',
    url: 'https://isaie-questions.netlify.app/',
    github: 'https://github.com/john-smilga',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
];
