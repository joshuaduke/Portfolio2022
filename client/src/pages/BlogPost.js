import axios from 'axios';
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import ReactMarkdown from 'react-markdown';
import helpers from '../script/getDate';
import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter';
import {coldarkDark} from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FaGithub, FaLaptopCode } from "react-icons/fa";

export default function BlogPost(){
    const [post, setPost] = useState({});
    const [project, setProject] = useState({});
    const { id } = useParams(); 

    //make another axios request to fetch the matching blog ID from the projects database. Use that id to fecth the github and live demo links in order to use on this site.

    const sendRequests = async () =>{
        try {
            const selectedPost = await axios.get(`/articles/posts/${id}`);
            console.log('Post', selectedPost)
            setPost(selectedPost.data)

            const selectedProject = await axios.get(`/projects/${id}`);
            console.log('Project', selectedProject)
            
            if(selectedProject.data === null){
                setProject({})
            } else {
                setProject(selectedProject.data)
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        sendRequests();
    }, []);


    console.log(post.createdAt)
    return(
        <>
            <Navbar />
            <div >
                <h2 style={{marginTop: '40px'}}>{post.title}</h2>
                <h4> {post.createdAt ? helpers.formatDate(post.createdAt) : 'Loading...'} </h4>

                <div className='blog-project-links'>

                    <a href={project.githubLink === '' ? '#' : project.githubLink} rel="noreferrer" target="_blank"><FaGithub/> SOURCE</a>

                    <a href={project.liveLink} rel="noreferrer" target="_blank"><FaLaptopCode/> DEMO</a>
                </div>

                <div className='blog-post-desc'>
                    <span>{post.description}</span>
                </div>
                <div className='blog-post'>

                    <ReactMarkdown
                        children={post.markdown}
                        components={{
                        code({node, inline, className, children, ...props}) {
                            const match = /language-(\w+)/.exec(className || '')
                            return !inline && match ? (
                            <SyntaxHighlighter
                                children={String(children).replace(/\n$/, '')}
                                style={coldarkDark}
                                language={match[1]}
                                {...props}
                            />
                            ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                            )
                        }
                        }}
                    />
                </div>
                
            </div>

            <Footer />
        </>
    )
}
