import 'grommet/scss/vanilla/index';
import React from 'react';

import Box from 'grommet/components/Box';
import GrommetApp from 'grommet/components/App';

export default class Main extends React.Component {
  render() {
    return (
      <GrommetApp centered={false}>
        {this.props.children}
      </GrommetApp>
    )
  }
};
