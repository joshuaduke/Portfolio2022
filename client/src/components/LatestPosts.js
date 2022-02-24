import {useState, useEffect} from 'react';
import axios from "axios"
import helpers from '../script/getDate';

export default function LatestPosts(){
    const [latestPosts, setLatestPosts] = useState([]);
    
    useEffect(()=>{
        axios.get('/articles/posts')
            .then((posts)=>{
                console.log(posts.data);
                setLatestPosts(posts.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return(
        <section >
            <h2>Latest Posts</h2>
            {latestPosts.slice(-4).reverse().map((post) => {
                return  (
                <article key={post._id}>
                    <a href={`/blog/${post._id}`}>
                        
                        <span className='date'>{ helpers.formatDate(post.createdAt)  }</span>
                        <h4>{post.title}</h4>

                        <div>
                            {post.description}
                        </div>
                    </a>

                </article>)
            })}
            <div className='viewAll'>
                <a href="/blog" className='viewAllBtn'>View all </a>
            </div>
        </section>

    )
}