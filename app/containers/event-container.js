import React from 'react'
import Event from '../components/event'
export default class EventContainer extends React.Component {
    getInitialState() {
        return {
        }
    }
    render () {
        return (
            <div>
                <Event/>
                <Event/>
                <Event/>
            </div>
        );
    }
};
