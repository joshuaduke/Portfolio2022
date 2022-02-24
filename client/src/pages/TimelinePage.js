import { useEffect, useState } from "react";
import axios from "axios";
import Timeline from '@mui/lab/Timeline';
import AchievementItem from '../components/AchievementItem';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TimelinePage(){
    const [timeline, setTimeline] = useState([]);

    useEffect(()=>{
        axios.get('https://jedportfoliodb2022.herokuapp.com/timeline/items')
            .then((result)=>{
                setTimeline(result.data);
            })
            .catch((err) => {
                if(err) throw err;
            })
    }, [])
    
    return(
        <>
            <Navbar />
            <div className="timeline-description">
                <h2>Achievements</h2>
                <p>You can see a timeline of some of the things I've accomplished!!</p>
            </div>

            <Timeline className='timeline' position="alternate">
                {timeline.slice(0).reverse().map((item) => {
                    return  (
                        <AchievementItem key={item._id} 
                                        title={item.tag} 
                                        date={item.createdAt}
                                        desc={item.description}
                                        color={item.color} 
                                        link={item.link}
                                        linkText={item.linkText}
                                        />
                        )
                })}
            </Timeline>
            <Footer />
        </>
    )
}