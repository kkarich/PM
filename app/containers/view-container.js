import React from 'react';
import EventContainer from '../containers/event-container';

import Box from 'grommet/components/Box';

export default class ViewContainer extends React.Component {
    render() {
        return (
            <Box direction='row' full='horizontal'>
                <Box pad='small'>
                    <EventContainer />
                </Box>
                <Box pad='small'>
                    <EventContainer />
                </Box>
                <Box pad='small'>
                    <EventContainer />
                </Box>
                <Box pad='small'>
                    <EventContainer />
                </Box>
            </Box>
        );
    }
};
