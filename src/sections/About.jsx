import { useApp } from "../context/AppProvider"

function About() {
    const {sections} = useApp();

    return (
        <section className="about" id = "about" ref = {sections.aboutSection}>
            <div className="about__content">
            <img src="./img/portfolio/about.webp" alt="Max Spizhovyi" className="about__image" />
                <div className="about__text-box">
                    <p className="sub-heading">About Me</p>
                    <h2 className="about__heading heading--primary">Front-end Developer based in West Kelowna</h2>
                    <p className="about__description">
                        Hey, I'm Max, expirienced in JavaScript, HTML, CSS, Scss, and diving into React.js. I've aced Udemy courses with Jonas Schmedtmann, and my Scss game is on point thanks to freeCodeCamp. Check out my portfolio for some visually slick and user-friendly websites. Ready to bring my skills to your projects!
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;
