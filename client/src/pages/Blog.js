import {useEffect , useState} from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';


export default function Blog(){
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:5000/articles/posts')
        .then((allPosts)=>{
            console.log(allPosts.data);
            setPosts(allPosts.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    return(
        <>
            <Navbar />
            <h1>Blog Posts</h1>
            {posts.map((post) => {
                return  (
                <article key={post._id}>
                    <a href={`/blog/${post._id}`}>
                        <span>{Date(post.createdAt)}</span>
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