import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

export default function About(){
    const iconSize = '2em';
    return(
    <section className="aboutMe">
        <h1>Joshua Duke</h1>
        <h4>Full Stack Developer</h4>
        <p>
            <em>Hello there</em>, I currently am working as a developer at reSolved business solutions. I am also a Computer programming and Analysis Graduate from Seneca College. My preferred stack is <em style={{color: '#F44E27'}}>MERN</em> (mongoDB, Express, React, Node.js). I mainly work professionally as a Front End Developer but I like to dabble and do some Back End development work whwen I am working on a personal project. I enjoy learning and exploring new technologies. 
        </p>
        <br/> 
        <p style={{textAlign: 'center'}}>Contact Me <a href="mailto:joshuadukedev@gmail.com" style={{color: '#F44E27'}}>Here!</a> </p>
        <br />
        <ul className="socials">
            <li>
                <a href="https://www.instagram.com/joshuaduke97/" rel="noreferrer" target={'_blank'}>
                   <FaInstagramSquare color={'#BFD7EA'} size={iconSize}/>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/joshua-duke/" rel="noreferrer" target={'_blank'}>
                    <FaLinkedin color={'#BFD7EA'} size={iconSize}/>
                </a>
            </li>
            <li>
                <a href="https://github.com/joshuaduke" rel="noreferrer" target={'_blank'}>
                <FaGithubSquare color={'#BFD7EA'} size={iconSize}/>
                </a>
            </li>
        </ul>
    </section>        
    )
}