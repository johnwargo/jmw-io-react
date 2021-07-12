import React from 'react';
import Image from 'react-bootstrap/Image'

import './page.css';

class HomePage extends React.Component {

  componentDidMount() {
    // console.log('Home: componentDidMount()');
    document.title = 'John Wargo Code';
  }

  render() {
    return (
      <div className='container'>
        <div className="page-header">
          <Image src="/images/wargo_head_shot_cropped_240.png" alt="John Wargo Headshot" rounded />
          <h1>John M. Wargo</h1>
          <h4>Product Manager, software developer, writer, presenter, tinkerer, father, husband, and geek!</h4>
        </div>
        <div>
          <p className="lead">
            Welcome to my code site; on this site I list information about all of my <a href="https://github.com/johnwargo" target="_blank" rel="noreferrer">public GitHub repositories</a>. I built this site to provide an easier way to navigate my public repositories to find what you're looking for. Use the menu at the top of the page to access pages for each of the code categories.</p>
          <p><strong>My latest book is <em>Learning Progressive Web Apps</em>:</strong></p>
          <a href="https://amzn.to/365Y2qu" target="_blank" rel="noreferrer">
            <Image
              src="/images/cover-learning-pwa-160.png"
              alt="Learning Progressive Web Apps book cover"
              style={{ paddingBottom: "10px" }} />
          </a>
          <p>
            I semi-regularly post articles on a wide range of random topics on my personal blog at&nbsp;
            <a href="http://www.johnwargo.com" target="_blank" rel="noreferrer">www.johnwargo.com</a>. You can also read more about all of my books on my&nbsp;
            <a href="http://amzn.to/2crgPTJ" target="_blank" rel="noreferrer">Amazon Author Page</a>.
          </p>
          <hr />
          <p>You can also find me online elsewhere at: </p>
          <a href="http://www.johnwargo.com/" target="_blank" rel="noreferrer">
            <img src="/images/jmw-64.png" alt="JMW Avatar" className="logo-link" />
          </a>
          <a href="https://github.com/johnwargo" target="_blank" rel="noreferrer">
            <img src="/images/logo-github.png" alt="GitHub logo" className="logo-link" />
          </a>
          <a href="http://www.twitter.com/johnwargo/" target="_blank" rel="noreferrer">
            <img src="/images/logo-twitter.png" alt="Twitter Logo" className="logo-link" />
          </a>
          <a href="https://www.linkedin.com/in/jmwargo" target="_blank" rel="noreferrer">
            <img src="/images/logo-linkedin.png" alt="LinkedIn Logo" className="logo-link" />
          </a>
          <a href="https://johnwargo.medium.com/" target="_blank" rel="noreferrer">
            <img src="/images/logo-medium.png" alt="Medium Logo" className="logo-link" />
          </a>
          <a href="http://amzn.to/2crgPTJ" target="_blank" rel="noreferrer">
            <img src="/images/logo-amazon.png" alt="Amazon Logo" className="logo-link" />
          </a>
        </div>
      </div>
    );
  }
}

export default HomePage;