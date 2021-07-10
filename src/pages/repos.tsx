/** 
 * This is a test page I created to enable me to select the 
 * page content displayed from a combo box. This quickly morphed 
 * to the single page construct the site uses today. 
 * 
 * This page is obsolete (for now)
*/
import React from 'react';
import { Form } from "react-bootstrap";

import { Page, Repository } from "../interfaces/page";
import { Pages } from '../data';

import './page.css';

type RepoProps = {

}

type RepoState = {
  page: Page;
}

class ReposPage extends React.Component<RepoProps, RepoState> {

  constructor(props: RepoProps) {
    super(props);

    // Default the page to books repo list
    // So get the books page details
    var page: any = Pages.find(x => x.name === 'Books');
    page.repos = page.repos.sort(this.compare);
    // update the page state with the current values
    this.state = { page };

    // console.dir(page);
    // console.table(page.repos);
  }

  // componentDidMount() {
  //   console.log('ReposPage: componentDidMount()');
  // }

  compare(a: Repository, b: Repository) {
    let comparison = 0;
    if (a.name < b.name) {
      comparison = -1;
    } else if (a.name > b.name) {
      comparison = 1;
    }
    return comparison;
  }

  onChangeTopicSelection(event: any) {
    var selectedTopic = event.target.value;
    console.log(`Selected topic: ${selectedTopic}`);
    // Find the page object that matches the selected topic
    var page: any = Pages.find(x => x.name === selectedTopic);
    page.repos = page.repos.sort(this.compare);
    // console.table(page.repos);
    // Update the current page title based on the selection
    document.title = `${page.titleTab}: John Wargo Code`;
    // Set our selected page to state
    this.setState({
      page: page,
    });
  }

  render() {
    return (
      <div className='container' >
        <h1>Repositories</h1>
        <p>Prosciutto pig sirloin, kielbasa salami bacon porchetta flank ham. Meatball ribeye frankfurter cupim, meatloaf drumstick bacon fatback sirloin beef leberkas. Fatback short loin kevin cow chislic alcatra shankle meatball tail biltong pork belly swine andouille rump kielbasa. Pork belly short loin tri-tip doner fatback picanha burgdoggen hamburger pork chop ball tip capicola bacon flank biltong pork. Pig swine salami, pork chop pork sirloin ball tip.</p>
        <p>Select a topic:</p>
        <Form.Control
          as="select"
          custom
          onChange={this.onChangeTopicSelection.bind(this)}
        >
          {Pages.map((page, idx: number) => (
            <option key={idx}>{page.name}</option>
          ))}
        </Form.Control>
        <h2>{this.state.page.titlePage}</h2>
        <p>{this.state.page.body}</p>
        <RepoList page={this.state.page}/>
      </div>
    );
  }
}

type RepoListProps = {
  page: Page;
}

class RepoList extends React.Component<RepoListProps> {

  render() {
    if (this.props.page.repositories.length > 0) {
      return (
        <div className='container articles'>          
          {this.props.page.repositories.map(function (repo, idx) {
            return <div key={idx}>
              <p className='title'><strong><a href={repo.url} target="_blank" rel="noreferrer">{repo.name}</a></strong></p>
              <p className='summary'>{repo.description}</p>
            </div>;
          })}
        </div>
      );
    } else {
      return (
        <div className='container'>
          <h1>Repository Data Error</h1>
          <p>No repository data to render (surprisingly).</p>
        </div>
      );
    }
  }
}

export default ReposPage;