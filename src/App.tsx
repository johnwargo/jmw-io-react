import React from 'react';

import './App.css';
// Build information package
import buildInfo from './buildInfo';

const buildDate = new Date(buildInfo.buildDate);
class App extends React.Component {

  componentDidMount() {
    let dashes = '='.repeat(80);
    console.log(dashes);
    console.log('Site: John Wargo Code (johnwargo.io)');
    console.log('Copyright John M. Wargo (john@johnwargo.com)');
    console.log(`Build: ${buildInfo.buildVersion} - ${buildDate.toString()}`);
    console.log('(build information generated using my react-build-info package: https://www.npmjs.com/package/react-build-info)');
    console.log(dashes);
  }

  render() {
    return (
      <div><p>Hello World</p></div>
    );
  }

}

export default App;
