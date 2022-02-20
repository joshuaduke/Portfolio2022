import './project.css';

export default function Project(props){
    return(
        <div className="project-card">
            <a href='/'>
                <h3>{props.name}</h3>
                <hr />         
                <p>{props.desc}</p>
            </a>
            <ul className='project-links'>
                <li>
                    <a href='/'>Live</a>
                </li>
                <li>
                    <a href='/'>Code</a>
                </li>
                <li>
                    <a href='/'>Blog</a>
                </li>
            </ul>
        </div>
    )
}