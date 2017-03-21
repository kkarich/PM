import React from 'react'
import Event from '../components/event'
import Box from 'grommet/components/Box';
import Timestamp from 'grommet/components/Timestamp';

export default class EventContainer extends React.Component {
    render() {
        return (
            <Box colorIndex='unknown' pad='small'>
                <Timestamp value='2017-03-17' />
                <Box pad='small'>
                    <Event />
                </Box>
                <Box pad='small'>
                    <Event />
                </Box>
                <Box  pad='small'>
                    <Event />
                </Box>
            </Box>
        );
    }
};
