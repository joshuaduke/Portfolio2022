import './project.css';

export default function Project(props){
    return(
        <div className="project-card">
            <h3>
                {props.name} {!props.status && <span className='wip'>WIP</span>}
            </h3>
            <hr />       

            <ul className='project-links-container'>
                <li>
                    <a className='project-links' href={props.live} target="_blank" rel="noreferrer">Live</a>
                </li>
                <li>
                    <a className='project-links' href={props.github} target="_blank" rel="noreferrer">Code</a>
                </li>
                <li>
                    {props.blog === "" ? <button className='disabled-link'>Blog</button> : <a className='project-links' href={`blog/${props.blog}`}>Blog</a>}
                </li>
            </ul>
            <p>{props.desc}</p>

            <div className='tags'>{props.tags.map((tag)=>{
                return <span key={tag}>#{tag} </span>
            })}</div>
        </div>
    )
}