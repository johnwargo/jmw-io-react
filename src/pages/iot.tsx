import React from 'react';

import './pages.css';

class IotPage extends React.Component {

  componentDidMount() {
    document.title = 'IoT: John Wargo Code';
  }

  render() {
    return (
      <div className='container' >
        <h2 style={{ paddingTop: "10px" }}>Internet of Things (IoT)</h2>
        <p>Bacon ipsum dolor amet short loin picanha shank pork loin capicola, boudin ham. Shankle ground round sausage t-bone pork chop shoulder ball tip jerky flank chuck. Capicola turducken buffalo andouille, spare ribs frankfurter rump brisket ball tip. Sirloin chicken prosciutto ham porchetta. Chislic beef beef ribs pork. Ball tip hamburger leberkas, shank shoulder picanha porchetta bresaola corned beef beef ground round capicola spare ribs ham hock cow. Landjaeger hamburger short loin meatball.</p>
        <p>Drumstick jerky cupim landjaeger capicola short loin tongue, prosciutto ground round pastrami hamburger picanha tenderloin pork jowl. Pork belly swine ham jowl shoulder boudin. Salami bresaola filet mignon, shank drumstick pancetta swine chicken flank andouille. Pig frankfurter hamburger beef meatloaf, meatball buffalo landjaeger beef ribs chislic chicken ball tip pork belly cow.</p>
        <p>Tri-tip ham hock cow venison. Turducken tri-tip kevin ground round tongue, sausage biltong prosciutto doner short loin beef chuck hamburger frankfurter. Kielbasa pancetta ham corned beef ball tip. Jowl t-bone alcatra cow spare ribs jerky pork.</p>
        <p>Venison pastrami bresaola shoulder, chuck beef ribs turducken andouille t-bone. Ham beef ribs tri-tip t-bone, fatback ground round porchetta sausage short ribs pork belly alcatra strip steak brisket. Meatloaf cupim picanha tenderloin, chuck short ribs ground round alcatra pork belly tri-tip chislic tongue pancetta. Capicola cow pork chop, burgdoggen pork belly turkey prosciutto brisket chuck turducken tail ribeye.</p>
        <p>Capicola boudin burgdoggen kevin brisket tenderloin corned beef bacon ground round cupim ribeye. Ball tip prosciutto jerky drumstick pork loin shoulder brisket. Pork short loin chislic cow pancetta swine strip steak beef doner tail chicken tri-tip flank. Shank landjaeger chislic pork ball tip shankle, cupim tenderloin burgdoggen tail tongue capicola. Frankfurter shoulder meatloaf cow flank beef ribs kielbasa venison pork loin short loin sirloin salami biltong. Pork belly sirloin doner turkey shank short loin burgdoggen cupim andouille meatloaf frankfurter. Pig pancetta prosciutto chuck frankfurter pork chop alcatra tenderloin tail</p>
      </div>
    );
  }
}

export default IotPage;