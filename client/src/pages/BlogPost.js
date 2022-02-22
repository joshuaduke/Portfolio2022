import axios from 'axios';
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ReactMarkdown from 'react-markdown'

export default function BlogPost(){
    const [post, setPost] = useState();
    const { id } = useParams(); 

    useEffect(()=>{
        axios.get(`http://localhost:5000/articles/posts/${id}`)
            .then((postData)=>{
                setPost(postData.data);
            })
            .catch((err)=>{
                console.log(err);
            })
    }, [])

    return(
        <>
            <Navbar />
            <h1>{post.title}</h1>
            <div>
                <ReactMarkdown children={post.markdown}/> 
            </div>
            
        </>
    )
}