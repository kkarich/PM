import React from 'react';
import EventContainer from '../containers/event-container';

export default class ViewContainer extends React.Component {
    getInitialState() {
        return {
        }
    }
    render() {
        return (
            <div>
                1<EventContainer/>
                2<EventContainer/>
                3<EventContainer/>
                4<EventContainer/>
                5<EventContainer/>
                6<EventContainer/>
                7<EventContainer/>
            </div>
        );
    }
};
