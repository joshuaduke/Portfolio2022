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
    const { id } = useParams(); 

    //make another axios request to fetch the matching blog ID from the projects database. Use that id to fecth the github and live demo links in order to use on this site.

    useEffect(()=>{
        axios.get(`http://localhost:5000/articles/posts/${id}`)
        .then((postData)=>{
            console.log(postData.data)
            setPost(postData.data);
            console.log(post)
        })
        .catch((err)=>{
            console.log(err);
        })

    }, []);


    console.log(post.createdAt)
    return(
        <>
            <Navbar />

            <div >
                <h2 style={{marginTop: '40px'}}>{post.title}</h2>
                <h4> {post.createdAt ? helpers.formatDate(post.createdAt) : 'Loading...'} </h4>

                <div className='blog-project-links'>
                    <a href='/'><FaGithub/> SOURCE</a>
                    <a href='/'><FaLaptopCode/> DEMO</a>
                </div>

                <div className='blog-post-desc'>
                    {post.description}
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

