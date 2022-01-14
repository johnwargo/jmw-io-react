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

const debug = false;  // turns off writing to the console

class TopicPage extends React.Component<PageProps, PageState> {

  constructor(props: PageProps) {
    if (debug) console.log('TopicPage: constructor()');
    super(props);
    this.state = { page: emptyPage };
  }

  componentDidMount() {
    if (debug) console.log(`TopicPage: componentDidMount(${this.props.topic})`);
    this.updatePage(this.props.topic);
  }

  componentDidUpdate(prevProps: PageProps) {
    if (this.props.topic !== prevProps.topic) {
      if (debug) console.log(`TopicPage: componentDidUpdate(${this.props.topic})`);
      this.updatePage(this.props.topic);
    }
  }

  updatePage(topic: string) {
    var page: any = Pages.find(x => x.name === topic);
    if (page) {
      // TODO: Only sort this once
      page.repositories = page.repositories.sort(this.compare);
      document.title = `${page.titleTab}: John Wargo Code`;
      this.setState({ page });
    } else {
      console.error(`Unable to locate page: "${topic}"`);
      this.setState({ page: emptyPage });
    }
  }

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
    if (this.state.page.name.length > 0) {
      return (
        <div className='container' >
          <h1>{this.state.page.titlePage}</h1>
          <p className="pageIntro">{this.state.page.body}</p>
          <br />
          <p className='coffeeLink'>If you find any of these projects useful or helpful, please consider <a href="https://www.buymeacoffee.com/johnwargo" target="_blank">buying me a coffee</a>.</p>
          <RepoList repositories={this.state.page.repositories} />
        </div>
      );
    } else {
      return (
        <div className='container' >
          <h1>Oops</h1>
          <p>This is embarrassing; I can't seem to find that page. This is clearly a coding problem, so please let the site owner know.</p>
        </div>
      );
    }
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
          <h1>Oops</h1>
          <p>This is embarrassing; I can't seem to find that repository data. This is clearly a coding problem, so please let the site owner know.</p>
        </div>
      );
    }
  }
}


export default TopicPage;