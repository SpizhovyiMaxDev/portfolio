import { v4 as createId } from 'uuid';


export const projects = [
    {
        name:'Andor\'s Blinds',
        type:'Responsive App',
        img:'/imgs/projects/andor\'s-blinds.webp',
        description:'I developed a custom website for a Kelowna-based blinds company, focusing on creating an intuitive, user-friendly experience. By breaking down the UI into React components, I ensured the site was easily maintainable and scalable.',
        demo:'https://www.andorsblinds.ca/home',
        icon:'📏',
        id:createId(),
    },
    {
        name:'Ruta Roots Landscaping',
        type:'Responsive App',
        img:'/imgs/projects/rutarootslandscaping.webp',
        description:'I designed and developed a custom website for Ruta Roots Landscaping, a Kelowna-based company specializing in outdoor transformations. My goal was to create a clean, user-friendly site that highlights their expertise and craftsmanship. By focusing on clear navigation and a visually appealing layout, I helped them better connect with clients and showcase the quality of their work.',
        demo:'https://www.rutarootslandscaping.com/home',
        icon:'🏡',
        id:createId(),
    },
    {
        name:'J&RWoodwork',
        type:'Responsive App',
        img:'/imgs/projects/jrcustomwoodwork.webp',
        description:'I created the website for J&R Custom Woodwork, a prestigious Kelowna, Canada-based company specializing in custom luxury kitchens, wardrobes, bathrooms, bars, and fireplaces. This site showcases their exceptional craftsmanship, tailored to meet the top standards of Kelowna.',
        demo:'https://jrcustomwoodwork.ca/home',
        icon:'🛒',
        id:createId(),
    },
    {
        name:'Maplify',
        type:'Responsive App',
        img:'/imgs/projects/maplify.webp',
        description:'During this project, I built a solid foundation of understanding JavaScript classes. For this particular case, I used the Leaflet library to visualize the workouts created by the user. Basically, Maplify is a web application where users can create and manage workouts.',
        github:'https://github.com/SpizhovyiMaxDev/maplify',
        demo:'https://maplify-spizhovyi.netlify.app/',
        icon:'🗺️',
        id:createId(),
    },
    {
        name:'ClassyWeather',
        type:'Responsive App',
        img:'/imgs/projects/classyweather.webp',
        description:'Thanks to a good foundation in JavaScript, this React (Class-Based Components) project was easy to go through. I learned lifecycle methods, how to manage state in classes, and much more.',
        github:'https://github.com/SpizhovyiMaxDev/classy-weather/tree/last',
        demo:'https://weather-spizhovyi.netlify.app/',
        icon:'🌧️',
        id:createId(),
     },
     {
        name:'Forkify',
        type:'Desktop App',
        img:'/imgs/projects/forkify.webp',
        description:'The food app simplifies recipe searches and includes a feature that allows users to preserve and update ingredients efficiently. It also analyzes culinary details. I implemented pagination for added ingredients and many more features.',
        github:'https://github.com/SpizhovyiMaxDev/forkify-code/tree/view-online',
        demo:'https://forkify-spizhovyi.netlify.app',
        icon:'📝',
        id:createId(),
    },
    {
        name:'usePopcorn',
        type:'Responsive App',
        img:'/imgs/projects/usepopcorn.webp',
        description:'usePopcorn is a platform about the movies.Search, rate, save movies seamlessly. Thechnologies used in this project are React and CSS, watched movies are stored in local storage. Decided to make it responsive for viewers.',
        github:'https://github.com/SpizhovyiMaxDev/use-popcorn/tree/app-v3',
        demo:'https://usepopcorn-spizhovyi.netlify.app/',
        icon:'🍿',
        id:createId(),
    },
]

export default  projects;