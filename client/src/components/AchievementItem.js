import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function AchievementItem(props){
    return(
    <TimelineItem>
        <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent>
            <div className='timelineContainer' >
                <div className='headerContainer'>
                    <p style={{backgroundColor: props.color}}>{props.title}</p>
                    <p>{props.date}</p>
                </div>
                <a href={`${props.link}`}> {props.linkText} </a>
            </div>
        </TimelineContent>

    </TimelineItem>
    )
}