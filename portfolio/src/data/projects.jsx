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
    title: "Weather App",
    cover: weatherCover,
    img: weatherImg,
    description: "A simple yet functional weather application that allows users to search for any city and view its current temperature along with an icon representing the weather condition. This project helped me explore how to work with APIs and dynamic data in React. It’s a perfect example of combining utility with a clean design.",
    date: "September 2024",
    technologies: ["React", "Fake API", "FontAwesome", "Props", "Axios","Event handling", "Modular CSS" ],
    demoLink: "https://weather.zahra-rostami.ir/",
    githubLink: "https://github.com/zahraRostami1999/weather-app",
    figmaLink: "",
  },
  {
    id: 2,
    title: "Clock & Stopwatch",
    cover: clockCover,
    img: clockImg,
    description: "A sleek digital clock and stopwatch app that reflects my learning journey in React. The digital clock displays the current time, while the stopwatch lets you start, pause, and reset the timer with ease. It’s a minimalist project with a focus on core React principles like state and reusable components.",
    date: "October 2024",
    technologies: ["React", "Modular CSS", "Event handling"],
    demoLink: "https://clock.zahra-rostami.ir/",
    githubLink: "https://github.com/zahraRostami1999/digital-clock-app",
    figmaLink: "",
  },
  {
    id: 3,
    title: "To-Do List",
    cover: todoCover,
    img: todoImg,
    description: "A modern and responsive to-do list application designed to make task management fun and productive. Tasks can be added, marked as completed, deleted, or prioritized, and all data is stored persistently using local storage. This to-do list isn’t just functional; it’s stylish and fully responsive, making it a perfect tool for daily use.",
    date: "October 2024",
    technologies: ["React", "Tailwind CSS", "Responsive", "Local storage","Event handling"],
    demoLink: "https://todo.zahra-rostami.ir/",
    githubLink: "https://github.com/zahraRostami1999/TodoReact.git",
    figmaLink: "",
  },
  {
    id: 4,
    title: "Online Store",
    cover: shopCover,
    img: shopImg,
    description: "ChicMarket is a dynamic e-commerce platform with a clean, modern design. It offers all essential features for an online store, including a product listing page, shopping cart, login functionality, and checkout. State management is handled efficiently with Redux, and it’s fully responsive for seamless browsing on any device. This project showcases advanced React concepts and demonstrates my ability to build scalable applications.",
    date: "December 2024",
    technologies: ["React", "Tailwind CSS", "Redux", "Responsive", "Fake API", "FontAwesome", "Props","Event handling", "Axios", "Toast", "Local storage"],
    demoLink: "https://shop.zahra-rostami.ir/",
    githubLink: "https://github.com/zahraRostami1999/shop-app",
    figmaLink: "https://www.figma.com/design/OYoopavzCuJzJDH8OfTkLt/Shop-app?node-id=0-1&m=dev&t=FCl3mGJFFj8asK99-1",
  },
];