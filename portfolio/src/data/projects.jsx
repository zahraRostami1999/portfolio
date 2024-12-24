import clockCover from "./images/clockCover.png";
import clockImg from "./images/clock-img.png";
import shopCover from "./images/shop-cover.png";
import shopImg from "./images/shop-img.png";
import todoCover from "./images/todoCover.png";
import todoImg from "./images/todo-img.png";
import weatherImg from "./images/weather-img.png";
import weatherCover from "./images/weatherCover.png";

export const Projects = [
  {
    id: 1,
    title: "Weather",
    cover: weatherCover,
    img: weatherImg,
    description: "An elegant and responsive to-do list application designed for simplicity and productivity. The Xanim Qiz To-Do List emphasizes clean design with Tailwind CSS, and adaptive layouts to ensure functionality on all devices. It serves as a practical and stylish tool for managing daily tasks.",
    date: "september 2024",
    technologies: ["React"],
    demoLink: "https://weather.zahra-rostami.ir/",
    githubLink: "https://github.com/zahraRostami1999/weather-app",
  },
  {
    id: 2,
    title: "Digital Clock",
    cover: clockCover,
    img: clockImg,
    description: "A functional digital clock and stopwatch built using React. This project showcases fundamental React concepts, including state management and reusable components. As my first project, it marks the starting point of my journey as a frontend developer, combining creativity with functionality.",
    date: "October 2024",
    technologies: ["React"],
    demoLink: "https://clock.zahra-rostami.ir/",
    githubLink: "https://github.com/zahraRostami1999/digital-clock-app",
  },
  {
    id: 3,
    title: "ToDo List",
    cover: todoCover,
    img: todoImg,
    description: "An elegant and responsive to-do list application designed for simplicity and productivity. The Xanim Qiz To-Do List emphasizes clean design with Tailwind CSS, and adaptive layouts to ensure functionality on all devices. It serves as a practical and stylish tool for managing daily tasks.",
    date: "October 2024",
    technologies: ["React", "Tailwind CSS", "Responsive"],
    demoLink: "https://todo.zahra-rostami.ir/",
    githubLink: "https://github.com/zahraRostami1999/TodoReact.git",
  },
  {
    id: 4,
    title: "Online Store",
    cover: shopCover,
    img: shopImg,
    description: "A dynamic and responsive e-commerce platform designed for fast and seamless user experiences. ChicMarket features a modern UI, efficient state management with Redux, and a mobile-friendly layout. It demonstrates advanced skills in React, Tailwind CSS, and creating scalable web applications.",
    date: "December 2024",
    technologies: ["React", "Tailwind CSS", "Redux", "Responsive"],
    demoLink: "https://shop.zahra-rostami.ir/",
    githubLink: "https://github.com/zahraRostami1999/shop-app",
  },
];