import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

export default function About(){
    const iconSize = '2em';
    return(
    <section className="aboutMe">
        <h1>Joshua Duke</h1>
        <h4>Full Stack Developer</h4>
        <p>
            I am a Computer programming and Analysis Graduate from Seneca College. My most recent experience was as a Junior web Developer at TDSB. I also freelance and develope websites for small businesses. My preferred technologies are React, mongoDB, javascript, Node.js
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