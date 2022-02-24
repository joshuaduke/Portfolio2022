import * as React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Timeline from '@mui/lab/Timeline';
import AchievementItem from './AchievementItem';


export default function Achievements(){
    const [achievements, setAchievements] = useState([]);

    useEffect(()=>{
        axios.get(`/timeline/items`)
        .then((result)=>{
            setAchievements(result.data);
        })
        .catch((err) => {
            if (err) throw err;
        })
    }, [])

    return(
        <section>
            <h2>Achievements</h2>
            <Timeline className='timeline' position="alternate">
            {achievements.slice(-5).reverse().map((item) => {
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