import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import helpers from '../script/getDate';
import fromUnixTime from 'date-fns/fromUnixTime';
import { format } from 'date-fns';

export default function AchievementItem(props){
    console.log("Date", props.date);
    let myDate = new Date(props.date.seconds * 1000 + props.date.nanoseconds / 1000000);
    myDate = format(myDate, "PP")

    console.log("New Date", myDate);
    // const date = fromUnixTime(props.date).toString();
    return(
    <TimelineItem className='timeline-item'>
        <TimelineSeparator>
            <TimelineDot variant='outlined'/>
            <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent className='timeline-content'>
            <div className='timelineContainer' >
                <div className='headerContainer'>
                    <p className='timeline-header' style={{backgroundColor: props.color}}>{props.title}</p>
                    <p>{myDate}</p>
                </div>
                <p className='timeline-desc'>{props.desc}</p>
                <a href={`${props.link}`} target="_blank" rel="noreferrer"> {props.linkText} </a>
            </div>
        </TimelineContent>

    </TimelineItem>
    )
}