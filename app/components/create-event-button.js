import React from 'react';
import Button from 'grommet/components/Button';
import CloudIcon from 'grommet/components/icons/base/Cloud';


export default function CreateEventButton() {
  return (
    <Button label='Create'
      href='#'
      secondary={false}
      primary={false}
      accent={false}
      plain={false} />
  )
}