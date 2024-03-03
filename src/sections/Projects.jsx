import Project from "../components/Project";
import { useApp } from "../context/AppProvider";
import projects from "../data/projects";


function Projects() {
    const {sections} = useApp();
    return (
    <section className = "projects" id = "project" ref = {sections.projectsSection}>
        <div className= "projects__content">
            <p className = "sub-heading">
                Portfolio
            </p>
            <h2 className = "heading--primary">
                Check my portfolio projects 👇
            </h2>

            <div className = "projects__container">
                {
                    projects.map(project => <Project project = {project} key = {project.id} />)
                }    
            </div> 
        </div>
    </section>
    )
}

export default Projects
