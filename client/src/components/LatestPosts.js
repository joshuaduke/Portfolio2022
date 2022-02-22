import {useState, useEfect, useEffect} from 'react';
import axios from "axios"
import Markdown from 'markdown-to-jsx';
import { marked } from 'marked';
import helpers from '../script/getDate';

export default function LatestPosts(){
    const [latestPosts, setLatestPosts] = useState([]);
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
    
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

    // function padTo2Digits(num) {
    //     return num.toString().padStart(2, '0');
    //   }

    // function formatDate(date){
    //     return [
    //         date.getFullYear(),
    //         padTo2Digits(date.getMonth() + 1),
    //         padTo2Digits(date.getDate()),
    //       ].join('-');
    // }

    return(
        <>
            <h2>Latest Posts</h2>
            {latestPosts.slice(0).reverse().map((post) => {
                return  (
                <article key={post._id}>
                    <a href={`/blog/${post._id}`}>
                        {/* <span>{Date(post.createdAt.substring(0,10))}</span> */}
                        
                        <span>{ helpers.formatDate(new Date(post.createdAt))  }</span>
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