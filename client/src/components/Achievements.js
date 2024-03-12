import * as React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Timeline from '@mui/lab/Timeline';
import AchievementItem from './AchievementItem';
import { db } from "../config/firebase-config";
import { getDocs, collection, query, where } from "firebase/firestore";


export default function Achievements(){
    const [achievements, setAchievements] = useState([]);
    const timelineCollectionRef =  collection(db, "timelines");

    useEffect(()=>{
        const getTimelines = async () => {
            try {
              const data = await getDocs(timelineCollectionRef);
              console.log("Data", data);
              const filteredData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
              }));

              let sortedData = filteredData.sort((a, b) => b.accomplishedDate - a.accomplishedDate)

              console.log("Filtered Data", sortedData)
              setAchievements(sortedData)
            }
            catch (error) {
                console.error(error)
            }
        }

        getTimelines();
    }, [])

    return(
        <section>
            <h2>Achievements</h2>
            <Timeline className='timeline' position="alternate">
            {achievements.slice(0, 3).map((item) => {
                return  (
                    <AchievementItem key={item._id} 
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

            <div className='viewAll'>
                <a href="/timeline" className='viewAllBtn'>View all </a>
            </div>
            
        </section>
    )
}

/*  Timeline data
    {
        title: 'Title here',
        date: 'Date Here',
        category: {
            tag: 'somethingHere',
            color: 'red'
        },
        link: {
            url: 'Url',
            text: 'read more'
        }
    }
*/