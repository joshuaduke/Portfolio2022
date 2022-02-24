import {useEffect , useState} from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import helpers from '../script/getDate';
import Footer from '../components/Footer';


export default function Blog(){
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        axios.get('/articles/posts')
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
            <h2 style={{margin: '40px 0', fontSize: '1.6em'}}>Blog Posts</h2>
            {posts.slice(0).reverse().map((post) => {
                return  (
                <article key={post._id}>
                    <a href={`/blog/${post._id}`}>
                        <span>{helpers.formatDate(post.createdAt)}</span>
                        <h4>{post.title}</h4>

                        <div>
                            {post.description}
                        </div>
                    </a>

                </article>)
            })}
            <Footer />
        </>
    )
}