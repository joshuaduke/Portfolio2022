import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import helpers from '../script/getDate';

export default function AchievementItem(props){
    return(
    <TimelineItem>
        <TimelineSeparator className='seperator'>
            <TimelineDot variant='outlined'/>
            <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent>
            <div className='timelineContainer' >
                <div className='headerContainer'>
                    <p className='timeline-header' style={{backgroundColor: props.color}}>{props.title}</p>
                    <p>{helpers.formatDate(props.date)}</p>
                </div>
                <p>{props.desc}</p>
                <a href={`${props.link}`}> {props.linkText} </a>
            </div>
        </TimelineContent>

    </TimelineItem>
    )
}