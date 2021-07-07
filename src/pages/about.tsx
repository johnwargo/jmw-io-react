import React from 'react';
import Image from 'react-bootstrap/Image'

import './pages.css';

class AboutPage extends React.Component {

  componentDidMount() {
    // console.log('About: componentDidMount()');
    document.title = 'About: John Wargo Books';
  }

  render() {
    return (
      <div className='container' >
        <Image src="/images/wargo_head_shot_cropped_240.png" alt="John Wargo Headshot" rounded />
        <h2 style={{ paddingTop: "10px" }}>About Me</h2>
        <p>In my day job, I'm a Product Manager, but I'm also a professional software developer, writer, presenter, father, husband, and Geek. For the last 15 years, I focused primarily on mobile software development and mobile software development technologies working for companies like Research In Motion (BlackBerry), BoxTone, AT&T, SAP, Forrester Research, Microsoft, and others.</p>
        <p>For many years, I contributed to the <a href="https://cordova.io" target="_blank" rel="noreferrer">Apache Cordova</a> Project, and, through that, wrote 4 books on the topic.</p>
        <p>Before Mobile, I spent many years in Enterprise consulting, designing and installing networks and building business applications. I was a founder at Wolcott Systems Group; I built and ran the organization's Product business for many years creating award-winning products for IBM (now HCL) Lotus Notes and Domino.</p>
        <p>I'm an experienced educator; I was in the very first class of Lotus Certified Lotus Notes Instructors and taught Novell Networking classes as a certified instructor for many years. I was also a US Soccer State Referee Instructor teaching beginner and advanced Soccer Referee courses.</p>
        <p>I love tinkering with microcontrollers and single board computers, building and writing about projects for Arduino, Particle Photon, Raspberry Pi, Tessel 2, and more. I'm happiest when I'm writing code.</p>
      </div>
    );
  }
}

export default AboutPage;