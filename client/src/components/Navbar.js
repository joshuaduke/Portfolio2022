import { slide as Menu } from 'react-burger-menu'
import '../styles/menu.css';

export default function Navbar(){

    return(
    <>
        <Menu right>
            <a id="home" className="menu-item" href="/">Home</a>
            {/* <a id="blog" className="menu-item" href="/blog">Blog</a> */}
            <a id="timeline" className="menu-item" href="/timeline">Timeline</a>
            <a id="resume" className="menu-item" href="/">Resume</a>
        </Menu>

        <nav className='desktop-nav'>
            <ul>
                <li> 
                    <a href="/">Home</a>  
                </li>
                {/* <li> 
                    <a href="/blog">Blog</a>  
                </li> */}
                <li> 
                    <a href="/timeline">Timeline</a>  
                </li>
                <li> 
                    <a href="/resume/joshuaDukeResume_2024.pdf" rel="noreferrer" target={'_blank'}>Resume</a>  
                </li>
            </ul>
        </nav>
    </>

    )
}

<nav>
<ul>
    <li> 
        <a href="/">About</a>  
    </li>
    <li> 
        <a href="#">Projects</a>  
    </li>
    {/* <li> 
        <a href="/blog">Blog</a>  
    </li> */}
    <li> 
        <a href="/timeline">Timeline</a>  
    </li>
    <li> 
        <a href="#">Resume</a>  
    </li>
</ul>
</nav>