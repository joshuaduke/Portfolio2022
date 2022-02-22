import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

export default function About(){
    return(
    <section className="aboutMe">
        <h1>Joshua Duke</h1>
        <h4>Full Stack Developer</h4>
        <p>
            Computer programming and Analysis Graduate from Seneca College. My most recent experience was as a Junior web Developer at TDSB. I also freelance and develope websites for small businesses.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        </p>
        <p>Contact Me <a href="/">Here!</a> </p>
        <ul className="socials">
                    <li>
                        <a href="/">
                           <FaInstagramSquare color={'black'} size={'1.6em'}/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/joshua-duke/" rel="noreferrer" target={'_blank'}>
                            <FaLinkedin color={'black'} size={'1.6em'}/>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                        <FaGithubSquare color={'black'} size={'1.6em'}/>
                        </a>
                    </li>
                </ul>
    </section>        
    )
}