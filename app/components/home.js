import React from 'react'
import AppHeader from './header';
import ViewContainer from '../containers/view-container';
import ViewToolbarContainer from '../containers/view-toolbar-container';

import Box from 'grommet/components/Box';

export default function Home () {
  return (
      <Box full='horizontal'>
        <AppHeader/>
        <Box pad="large" align='center' colorIndex='light-2' flex={true} >
          <ViewToolbarContainer/>
          <ViewContainer/>
        </Box>
      </Box>
  )
}