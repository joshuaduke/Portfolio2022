import { useState, useEffect} from 'react';
import Project from "./Project"
import './project.css';
import { db } from "../config/firebase-config";
import { getDocs, collection, query, where } from "firebase/firestore";

export default function Projects(){
    const [projects, setProjects] = useState([]);
    const projectCollectionRef =  collection(db, "projects");
    useEffect(()=>{
        const getProjects = async () => {
            try {
      
              const data = await getDocs(projectCollectionRef);
              console.log("Data", data);
              const filteredData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
              }));

              console.log("Filtered Data", filteredData)
              setProjects(filteredData)
            }
            catch (error) {
                console.error(error)
            }
        }

        getProjects();
    }, [])
    return (
        <section>
            <h2>Projects</h2>
            <div className="project-Container">
                {projects.map((project) => {
                    return  (
                        <Project key={project.id}
                                    id={project.id} 
                                    name={project.title} 
                                    desc={project.description}
                                    live={project.liveLink}
                                    github={project.githubLink}
                                    blog={project.blogLink}
                                    tags={project.tags}
                                    status={project.status}
                                    />
                    )
                })}
            </div>


        </section>
    )
}