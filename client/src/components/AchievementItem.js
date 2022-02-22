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
            <TimelineDot color={props.color} />
            <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent>
            <div className='timelineContainer'>
                <div className='headerContainer'>
                    <p>Project</p>
                    <p>February 21, 2022</p>
                </div>
                {props.title}
            </div>
        </TimelineContent>

    </TimelineItem>
    )
}