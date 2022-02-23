import { useState, useEffect} from 'react';
import axios from  'axios';
import Project from "./Project"
import './project.css';

export default function Projects(){
    const [projects, setProjects] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:5000/projects/list')
            .then((allProjects)=>{
                console.log('All Projects:', allProjects.data)
                setProjects(allProjects.data);
                console.log(projects)
            })
            .catch((err)=>{
                console.log(err);
            })
    }, [])
    return (
        <section>
            <h2>Projects</h2>
            <div className="project-Container">
                {projects.map((project) => {
                    return  <Project key={project.id} 
                                    name={project.title} 
                                    desc={project.description}
                                    live={project.liveLink}
                                    github={project.githubLink}
                                    blog={project.blogLink}
                                    tags={project.tags}
                                    status={project.status}
                                    />
                })}
            </div>


        </section>
    )
}