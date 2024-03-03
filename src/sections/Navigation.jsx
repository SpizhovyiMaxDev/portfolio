import { useApp } from "../context/AppProvider"

function Navigation() {
 
    const {sections, handleDispatch, showMobileNav} = useApp();

    function scrollTo(section, e){
        e.preventDefault();
        if(!e.target.classList.contains('logotype')){
            handleDispatch("toggleMobileNav", !showMobileNav);
            if(window.innerWidth < 950){
                setTimeout(function(){
                    section.current.scrollIntoView({behavior:"smooth"});         
                }, 200)
            }else {
                section.current.scrollIntoView({behavior:"smooth"});
            }
        } else {
            section.current.scrollIntoView({behavior:"smooth"});   
        } 
    }

    return (
        <header>
            <nav className = {`navigation ${showMobileNav ? "show-mobile-nav" : ""}`}>
                <a href = "#home" className = "logotype" onClick={(e) => scrollTo(sections.heroSection, e)}> 
                    Max.dev
                </a>

                <ul className = "nav-list">
                    <li className="nav-list__item">
                        <a href = "#home" className = "nav-list__link" onClick={(e) => scrollTo(sections.heroSection, e)}>
                            Home
                        </a>
                    </li>

                    <li className="nav-list__item">
                        <a href = "#about" className = "nav-list__link" onClick={(e) => scrollTo(sections.aboutSection, e)}>
                            About
                        </a>
                    </li>

                    <li className="nav-list__item">
                        <a href = "#project" className = "nav-list__link" onClick={(e) => scrollTo(sections.projectsSection, e)}>
                            Projects
                        </a>
                    </li>

                    <li className="nav-list__item">
                        <a href = "#contact" className = "nav-list__link" onClick={(e) => scrollTo(sections.contactSection, e)}>
                            Contact
                        </a>
                    </li>
                </ul>

                <svg
                    className = "nav-btn"
                    onClick={() => handleDispatch("toggleMobileNav", !showMobileNav)}
                    viewBox="0 0 24 24"
                    width="35"
                    height="35"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                    >
                    <g className="open-menu-icon">
                        <path d="M3 18h18v-2H3v2zm0-5h18V11H3v2zm0-7v2h18V6H3z"></path>
                    </g>
                
                    <g className="close-menu-icon">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                    </g>
                </svg>
            </nav>
        </header>
    )
}

export default Navigation
