import React from 'react';
import Button from 'grommet/components/Button';
import CaretBackIcon from 'grommet/components/icons/base/CaretBack';
import CaretNextIcon from 'grommet/components/icons/base/CaretNext';

export default class ChangeWeekButton extends React.Component {
  render() {
    let Icon = <CaretNextIcon/>;
    if(this.props.back) Icon = <CaretBackIcon/>;
    return (
        <Button
          href='#'
          icon={Icon}
          secondary={false}
          primary={false}
          accent={false}
          plain={false} />
    )
  }
};