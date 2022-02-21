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
                    <a href={props.live} target="_blank" rel="noreferrer">Live</a>
                </li>
                <li>
                    <a href={props.github} target="_blank" rel="noreferrer">Code</a>
                </li>
                <li>
                    <a href={props.blog} target="_blank" rel="noreferrer">Blog</a>
                </li>
            </ul>
        </div>
    )
}