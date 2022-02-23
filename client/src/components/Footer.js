import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import ScrollToTopBtn from "../components/ScrollToTop";
export default function Footer(){
    const iconSize = '1.4em';
    return (
        <footer>
            <ul className="socials">
                <li>
                    <a href="https://www.instagram.com/joshuaduke97/" rel="noreferrer" target={'_blank'}>
                    <FaInstagramSquare color={'#22272D'} size={iconSize}/>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/joshua-duke/" rel="noreferrer" target={'_blank'}>
                        <FaLinkedin color={'#22272D'} size={iconSize}/>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/joshuaduke" rel="noreferrer" target={'_blank'}>
                    <FaGithubSquare color={'#22272D'} size={iconSize}/>
                    </a>
                </li>
            </ul>
            <br />
            <p>Joshua Duke &copy;2022</p>

            <ScrollToTopBtn />
        </footer>
    )
}