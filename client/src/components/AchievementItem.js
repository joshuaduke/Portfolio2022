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
            <p>Date: Sunday February 20th </p>
            {props.title}

        </TimelineContent>
    </TimelineItem>
    )
}