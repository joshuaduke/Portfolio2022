import './project.css';

export default function Project(props){
    return(
        <div className="project-card">
            <h3>
                {props.name} {!props.status && <span className='wip'>WIP</span>}
            </h3>
            <hr />       

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
            <p>{props.desc}</p>

            <div className='tags'>{props.tags.map((tag)=>{
                return <span key={tag}>#{tag} </span>
            })}</div>
        </div>
    )
}