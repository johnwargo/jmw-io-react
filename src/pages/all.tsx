import React from 'react';

import './pages.css';

class AllPage extends React.Component {

  componentDidMount() {
    document.title = 'All: John Wargo Code';
  }

  render() {
    return (
      <div className='container' >
        <h2 style={{ paddingTop: "10px" }}>All Repositories</h2>
        <p>This is some text</p>
      </div>
    );
  }
}

export default AllPage;