import Project from "./Project"
import './project.css';

export default function Projects(){
    return (
        <section className="project-Container">
            <h2>Featured Projects</h2>
            <Project name="Super Hero Math Game" desc="Description here"/>
            <Project name="Movie Watchlist" desc="Description here"/>
        </section>
    )
}