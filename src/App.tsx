import React from 'react';
import ReactGA from 'react-ga';
import { Router, Switch, Route } from 'react-router-dom';
import { NavDropdown, Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { createBrowserHistory } from 'history';

// The app's page components
import AboutPage from './pages/about';
import HomePage from './pages/home';
import TopicPage from './pages/page';
// generated content
import buildInfo from './buildInfo';
import './App.css';

// TODO: Get google analytics working
// TODO: Publish the app somewhere
// TODO: point johnwargo.io to this project's code
// TODO: Add search/filtering to page 

// Define the props used to render menu items
type LinkProps = {
  linkText: string,
  linkTarget: string
}

const buildDate = new Date(buildInfo.buildDate);
const history = createBrowserHistory();

history.listen((location: any) => {
  // console.log('History update ');
  // console.table(location);
  const page = location.pathname;
  ReactGA.set({ page: page });
  ReactGA.pageview(page);
});

class App extends React.Component {

  // Opens an external page in a new tab, but also removes the
  // highlight from any previously selected menu items
  loadExternalUrl(url: string) {
    console.log(`App: Loading external URL: "${url}"`);
    // de-highlight any of the existing menu items
    // get the list of elements with the class set as indicated,    
    var highlightedItems = document.querySelectorAll(".active.dropdown-item");
    // should only be one
    if (highlightedItems.length > 0) {
      // remove the active class from the element
      highlightedItems[0].classList.remove("active");
    }
    // then launch the specified URL, defaults to new tab
    window.open(url);
  }

  componentDidMount() {
    let dashes = '='.repeat(80);
    console.log(dashes);
    console.log('Site: John Wargo Code (johnwargo.io)');
    console.log('Copyright John M. Wargo (john@johnwargo.com)');
    console.log(`Build: ${buildInfo.buildVersion} - ${buildDate.toString()}`);
    console.log('(build information generated using my react-build-info package: https://www.npmjs.com/package/react-build-info)');
    console.log(dashes);
  }

  render() {
    return (
      <Router history={history}>
        <Navbar collapseOnSelect expand="lg" bg="light">
          <Navbar.Brand>
            <a href="/home">
              <img
                src="/images/jmw-36.png"
                width="36"
                height="36"
                className="d-inline-block align-top"
                alt="John M. Wargo Initials"
              />&nbsp; John M. Wargo Code
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/home">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/books">
                <Nav.Link>Books</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cordova">
                <Nav.Link>Cordova</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/flutter">
                <Nav.Link>Flutter</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/ionic">
                <Nav.Link>Ionic</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/iot">
                <Nav.Link>IoT</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/misc">
                <Nav.Link>Miscellaneous</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/node">
                <Nav.Link>NodeJS</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/web">
                <Nav.Link>Web</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/windows">
                <Nav.Link>Windows</Nav.Link>
              </LinkContainer>
              <NavDropdown title="About" id="basic-nav-dropdown">
                <LinkedMenuItem linkTarget="/about" linkText="Me" />
                <NavDropdown.Item onClick={() => this.loadExternalUrl("https://johnwargo.com")}>
                  Blog (external)
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => this.loadExternalUrl("https://johnwargobooks.com")}>
                  Books (external)
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          {/* <Route path="/books">
            <BooksPage />
          </Route> */}
          <Route path="/books">
          <TopicPage topic='Books' />
          </Route>        
          <Route path="/cordova">
            <TopicPage topic='Apache Cordova' />
          </Route>
          <Route path="/flutter">
            <TopicPage topic='Flutter' />
          </Route>
          <Route path="/ionic">
            <TopicPage topic='Ionic' />
          </Route>
          <Route path="/iot">
            <TopicPage topic='IoT' />
          </Route>
          <Route path="/misc">
            <TopicPage topic='Miscellaneous' />
          </Route>          
          <Route path="/node">
            <TopicPage topic='Node' />
          </Route>          
          <Route path="/web">
            <TopicPage topic='Web' />
          </Route>
          <Route path="/windows">
            <TopicPage topic='Windows' />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
        
      </Router>
    );
  }

}

class LinkedMenuItem extends React.Component<LinkProps> {
  render() {
    return (
      <div>
        <LinkContainer to={this.props.linkTarget}>
          <NavDropdown.Item>{this.props.linkText}</NavDropdown.Item>
        </LinkContainer>
      </div>
    );
  }
}

export default App;
