import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

export default function Footer(){
    return (
        <footer>
                <ul>
                    <li>
                        <a href="/">
                           <FaInstagramSquare color={'black'} size={'2em'}/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/joshua-duke/" rel="noreferrer" target={'_blank'}>
                            <FaLinkedin color={'black'} size={'2em'}/>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                        <FaGithubSquare color={'black'} size={'2em'}/>
                        </a>
                    </li>
                </ul>
            <p>Joshua Duke 2022</p>
        </footer>
    )
}