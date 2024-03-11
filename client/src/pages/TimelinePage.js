import { useEffect, useState } from "react";
import axios from "axios";
import Timeline from '@mui/lab/Timeline';
import AchievementItem from '../components/AchievementItem';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { db } from "../config/firebase-config";
import { getDocs, collection, query, where } from "firebase/firestore";

export default function TimelinePage(){
    const [timeline, setTimeline] = useState([]);
    const timelineCollectionRef =  collection(db, "timelines");
    

    useEffect(() => {
        const getTimelines = async () => {
            try {
              // console.log(`UseEffect Start ${startDate}, end ${EndDate}`);
            //   const q1 = await query(
            //     timelineCollectionRef
            //   );
      
              const data = await getDocs(timelineCollectionRef);
              console.log("Data", data);
              const filteredData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
              }));

              let sortedData = filteredData.sort((a, b) => b.accomplishedDate - a.accomplishedDate)

              console.log("Filtered Data", sortedData)
              setTimeline(sortedData)
            }
            catch (error) {
                console.error(error)
            }
        }

        getTimelines();
    }, [])
    // useEffect(()=>{
    //     axios.get('https://jedportfoliodb2022.herokuapp.com/timeline/items')
    //         .then((result)=>{
    //             setTimeline(result.data);
    //         })
    //         .catch((err) => {
    //             if(err) throw err;
    //         })
    // }, [])

    console.log("Timeline Data", timeline)
    
    return(
        <>
            <Navbar />
            <div className="timeline-description">
                <h2>Achievements</h2>
                <p>You can see a timeline of some of the things I've accomplished!!</p>
            </div>

            <Timeline className='timeline' position="alternate">
                {timeline.map((item) => {
                    return  (
                        <AchievementItem key={item.id} 
                                        title={item.tag} 
                                        date={item.accomplishedDate}
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