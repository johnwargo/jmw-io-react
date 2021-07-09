import React from 'react';
import { Form } from "react-bootstrap";

import './pages.css';
import { Page } from "../interfaces/page";
import { Repository, RepositoryList } from '../interfaces/repo';
import { Pages, Repositories } from '../data';

type RepoProps = {

}

type RepoState = {
  page: Page;
  repoList: Repository[];
}

class ReposPage extends React.Component<RepoProps, RepoState> {

  constructor(props: RepoProps) {
    super(props);

    // Default the page to books repo list
    // So get the books page details
    var page: any = Pages.find(x => x.name === 'Books');
    // Then get the books repository list
    var repoObject: any = Repositories.find(x => x.name === 'Books');
    // finally update the page state with the current values
    this.state = {
      page: page,
      repoList: repoObject.repos
    };

    // repoList: repoObject.repos
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

  onChangeTopicSelection(event: any) {
    var selectedTopic = event.target.value;
    console.log(`Selected topic: ${selectedTopic}`);
    // Find the page object that matches the selected topic
    var page: any = Pages.find(x => x.name === selectedTopic);
    var repoObject: any = Repositories.find(x => x.name === selectedTopic);

    // Update the current page title based on the selection
    document.title = `${page.titleTab}: John Wargo Code`;
    console.table(repoObject);

    // Set our selected page to state
    this.setState({
      page: page,
      repoList: repoObject.repos
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
        {/* <RepoList repoList={this.state.repoList.filter({{ this.state.page.category }})}/> */}
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