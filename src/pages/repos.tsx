import React from 'react';
import { Form } from "react-bootstrap";

import './pages.css';
import { Page } from "../interfaces/page";
import { Repository } from '../interfaces/repo';
import { Pages, Repositories } from '../data';

type RepoProps = {

}

type RepoState = {
  page: Page;
  repoList: Repository[];
}

// name: string;       // The name of the page, used in the Repo page combobox
// titlePage: string;  // the H1 content that starts the page
// titleTab: string;   // the browser tab prefix for this item  
// body: string;       // page content for the selected item
// category: string;   // data category


// class ReposPage extends React.Component<RepoProps, RepoState> {
class ReposPage extends React.Component<RepoProps, RepoState> {

  constructor(props: RepoProps) {
    super(props);
    this.state = {
      page: { name: '', titlePage: '', titleTab: '', body: '', category: '' },
      repoList: []
    };
  }

  componentDidMount() {
    console.log('ReposPage: componentDidMount()');
  }

  compare(a: Repository, b: Repository) {
    let comparison = 0;
    if (a.name < b.name) {
      comparison = 1;
    } else if (a.name > b.name) {
      comparison = -1;
    }
    return comparison;
  }

  getPage(topic: string): Page {
    let tmpArray: Page[] = Pages.find(x => x.name === topic);
    if (tmpArray.length > 0) {
      return tmpArray[0];
    } else {
      return null;
    }
  }

  onChangeTopicSelection(event: any) {
    console.log(`Selected topic: ${event.target.value}`);
    var selectedTopic = event.target.value;
    console.dir(Pages);

    // jsObjects.find(x => x.b === 6)
    var page: Page =
      document.title = `${page.titleTab}: John Wargo Code`;
    console.dir(page);


    // console.dir(Repositories.find('Books');
    // var repos: Repository[] = Repositories[selectedTopic];
    // console.dir(repos);


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
      </div>
    );
  }
}

type RepoListProps = {
  repoList: Array<Repository>;
}
class RepoList extends React.Component<RepoListProps, {}> {

  render() {
    return (<div><p>This is a test</p></div>);
  }
}

export default ReposPage;