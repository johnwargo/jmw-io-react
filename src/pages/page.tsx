import React from 'react';
import { Page, Repository, emptyPage } from "../interfaces/page";
import { Pages } from '../data';

import './page.css';

type PageProps = {
  topic: string;
}

type PageState = {
  page: Page;
}

type RepoListProps = {
  repositories: Repository[];
}

class TopicPage extends React.Component<PageProps, PageState> {

  constructor(props: PageProps) {
    console.log('TopicPage: constructor()');
    super(props);
    this.state = { page: emptyPage };
  }

  componentDidMount() {
    console.log(`TopicPage: componentDidMount(${this.props.topic})`);
    var page: any = Pages.find(x => x.name === this.props.topic);
    if (page) {
      console.log('TopicPage: found page data');
      console.dir(page)
      page.repos = page.repos.sort(this.compare);
      document.title = `${page.titleTab}: John Wargo Code`;
      // update the page state with the current values
      this.setState({ page });
    } else {
      console.error('No page found');
    }
  }

  // getDerivedStateFromProps() {
  //   console.log('here we go');
  // }

  // shouldComponentUpdate() {
  //   console.log('TopicPage: shouldComponentUpdate()');
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

  render() {
    return (
      <div className='container' >
        <h1>{this.state.page.titlePage}</h1>
        <p>{this.state.page.body}</p>
        <RepoList repositories={this.state.page.repositories} />
      </div>
    );
  }
}

class RepoList extends React.Component<RepoListProps> {

  render() {
    if (this.props.repositories.length > 0) {
      return (
        <div className='container articles'>
          {this.props.repositories.map(function (repo, idx) {
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

export default TopicPage;