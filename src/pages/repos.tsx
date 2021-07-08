import React from 'react';

import './pages.css';

class ReposPage extends React.Component {

  componentDidMount() {
    console.log('ReposPage: componentDidMount()');
    // document.title = '{{this.props.tabTitle}}: John Wargo Code';
  }

  render() {
    return (
      <div className='container' >
        <h1>Repositories</h1>

      </div>
    );
  }
}

export default ReposPage;