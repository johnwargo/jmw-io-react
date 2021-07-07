import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavDropdown, Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

// The app's page components
import AboutPage from './pages/about';
import BooksPage from './pages/books';
import HomePage from './pages/home';
import MobilePage from './pages/mobile';
import WebPage from './pages/mobile';

import './App.css';
// Build information package
import buildInfo from './buildInfo';

type LinkProps = {
  linkText: string,
  linkTarget: string
}

const buildDate = new Date(buildInfo.buildDate);
const history = createBrowserHistory();

history.listen((location: any) => {
  // console.log('History update ');
  // console.dir(location);
  // console.log(document.title);
  const page = location.pathname;
  ReactGA.set({ page: page });
  ReactGA.pageview(page, [], document.title);
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
              <LinkContainer to="/mobile">
                <Nav.Link>Mobile</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/web">
                <Nav.Link>Web</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/iot">
                <Nav.Link>IoT</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/windows">
                <Nav.Link>Windows</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/misc">
                <Nav.Link>Miscellaneous</Nav.Link>
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
          <Route path="/books">
            <BooksPage />
          </Route>
          <Route path="/mobile">
            <MobilePage />
          </Route>
          <Route path="/web">
            <WebPage />
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
