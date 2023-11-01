import weather from './img/weather.PNG';
import news from './img/news.gif';
import text from './img/text.gif';
import blog from './img/blog.gif';
import commerce from './img/commerce.PNG';
import code from './img/code.gif';
import game from './img/game.PNG';
import tictac from './img/tictac.png';
import maja from './img/majamovie.PNG';
import gym from './img/gym.PNG';
import Advice from './img/advice.png';
import Restaurant from './img/restaurant.PNG'
import Food from './img/foodcounter.PNG'

const projectData = [
    {
        title: 'Blogging System',
        description:
            'My blogging system has two roles: admin and user. The admin can create, edit, and delete posts and users, while the user can only view posts. It\'s built with PHP, MySQL, HTML, CSS, and Bootstrap for easy navigation and scalability. It\'s a great platform for bloggers and website owners who want complete control over their content.',
        image: blog,
    },
    {
        title: 'Text Manipulator',
        description:
            'Text manipulator created using JavaScript, React JS, HTML, CSS, and Bootstrap. The application allows users to manipulate text in various ways, such as converting to uppercase, lowercase, and camelcase, with a user-friendly interface.',
        image: text,
        buttonLink: "https://transformhub.netlify.app/",
    },
    {
        title: 'News Site',
        description:
            'News Site, a real-time news application created using JavaScript, React JS, CSS, HTML, Bootstrap, and APIs. The application provides access to the latest news and events, displaying my proficiency in creating dynamic and real-time news applications.',
        image: news,
    },
    {
        title: 'Food Counter',
        description:
            'Created a food-tracking app with React.js and Sass, simplifying meal logging, calorie monitoring, and healthy living. User-friendly interface, sleek design, dynamic interactivity, and responsive styling for a seamless experience.',
        image: Food,
        buttonLink: "https://food-counter.netlify.app/",
    },
    {
        title: 'Gym Fit',
        description:
            'Still Working',
        image: gym,
        buttonLink: "https://gymforfitting.netlify.app/",
    },
    {
        title: 'Qoute Generator',
        description:
            'Presenting a user-friendly web application built with React, Axios, and toast notifications. This app provides users with random pieces of advice retrieved from an external API. Users can fetch advice at the click of a button and easily copy the advice to their clipboard with just one more click. The user experience is enhanced with subtle toast notifications that confirm the successful copying of advice. Perfect for a quick dose of wisdom or inspiration.',
        image: Advice,
        buttonLink: "https://rqoute.netlify.app/",
    },
    {
        title: 'E-Commerce',
        description: "I've built a dynamic e-commerce site inspired by Amazon, using React.js, HTML, and CSS for the front-end. It boasts an attractive, responsive UI with product listings, a smooth cart, and a modern, interactive experience – a glimpse into online shopping excellence.",
        image: commerce,
        buttonLink: "https://amazoncommerce.netlify.app/", // I've corrected the URL to a valid one.
    },      
    {
        title: 'Restaurant App',
        description: '"Introducing Restaurant App, a sleek and modern React.js and Tailwind CSS-powered restaurant app, seamlessly integrated with Firebase for real-time updates and secure authentication. This app is inspired by the finest YouTube channels, offering a dynamic menu, streamlined ordering, and a personalized user experience. Perfect for your portfolio showcase.',
        image: Restaurant,
        buttonLink: "https://apprestaurantt.netlify.app/",
    },
    {
        title: 'Movies WebSite',
        description: '"Welcome to Maja Movies: Your go-to destination for all things cinema. Explore a vast movie library, create your watchlist, and enjoy high-quality streaming. Start your cinematic journey today!',
        image: maja,
        buttonLink: "https://majamovies.netlify.app/",
    },
    {
        title: 'TicTacToe Game',
        description: '"Introducing a classic game with a modern twist! Experience the excitement of Tic Tac Toe, reimagined in this React-based game. Challenge your friends, customize player names, and enjoy hours of strategic fun. With real-time win and draw checks,',
        image: tictac,
        buttonLink: "https://tictacgamme.netlify.app/",
    },
    {
        title: 'Memory Magic',
        description: 'Dive into Memory Magic, a React.js game where you match hidden cards, enjoying a sleek design with HTML and CSS. Unleash memory powers in this compact, enchanting web experience.',
        image: game,
        buttonLink: "https://magicgamme.netlify.app/",
    },
    {
        title: 'Weather App',
        description:
            'This Weather app, built with Html, Bootstrap, JavaScript and API integration, provides real-time weather updates and forecasts for any country or city. With its user-friendly interface, users can easily access the weather information they need, making it a reliable tool for staying informed about weather conditions.',
        image: weather,
    },
    // {
    //     title: 'Car Showroom Management',
    //     description:
    //         'A car showroom is a retail store that sells new or used cars. It provides a comfortable environment for customers to view and learn about different vehicles. Showrooms have sales staff available to answer questions and facilitate the process of purchasing a car. Some showrooms may offer maintenance and repair services as well.',
    //     image: car,
    //     buttonLink: "https://tii.la/python",
    // },
    {
        title: 'Working',
        description: 'I am currently working on my personal projects.',
        image: code,
    },
];
export default projectData;