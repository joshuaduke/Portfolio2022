import {useState, useEfect, useEffect} from 'react';
import axios from "axios"
import Markdown from 'markdown-to-jsx';
import { marked } from 'marked';

export default function LatestPosts(){
    const [latestPosts, setLatestPosts] = useState([]);
    
    useEffect(()=>{
        axios.get('http://localhost:5000/articles/posts')
            .then((posts)=>{
                console.log(posts.data);
                setLatestPosts(posts.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return(
        <>
            <h2>Latest Posts</h2>
            {latestPosts.slice(0).reverse().map((post) => {
                return  (
                <article>
                    <a href={`/blog/${post._id}`}>
                        <span>{post.createdAt}</span>
                        <h2>{post.title}</h2>

                        <div>
                            {post.description}
                        </div>
                    </a>

                </article>)
            })}
        </>

    )
}