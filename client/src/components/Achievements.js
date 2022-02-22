import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import AchievementItem from './AchievementItem';


export default function Achievements(){
    return(
        <>
            <h2>Achievements</h2>
            <Timeline position="alternate">
                <AchievementItem title="Primary" color="primary" />
                <AchievementItem title="Secondary" color="secondary" />
                <AchievementItem title="Success" color="success" />
            </Timeline>
        </>
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