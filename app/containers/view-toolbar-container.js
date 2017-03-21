import React from 'react';
import CreateEventButton from '../components/create-event-button';
import ChangeWeekButton from '../components/change-week-button';

export default class ViewToolbarContainer extends React.Component {
    render() {
        return (
            <div>
                <CreateEventButton />
                <ChangeWeekButton back={true}/>
                <ChangeWeekButton />
            </div>
        );
    }
};