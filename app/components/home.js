import React from 'react'
import ViewContainer from '../containers/view-container';
import ViewToolbarContainer from '../containers/view-toolbar-container';

export default function Home () {
  return (
    <div className="jumbotron col-sm-12 text-center">
      <ViewToolbarContainer/>
      <ViewContainer/>
    </div>
  )
}