import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { NavDropdown, Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

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
              <NavDropdown title="Technical Books" id="basic-nav-dropdown">
                <LinkedMenuItem linkTarget="/books/web" linkText="Progressive Web Apps" />
                <LinkedMenuItem linkTarget="/books/cordova" linkText="Apache Cordova Development" />
                <LinkedMenuItem linkTarget="/books/blackberry" linkText="BlackBerry Development" />
                <LinkedMenuItem linkTarget="/books/domino" linkText="IBM Lotus Notes Development" />
              </NavDropdown>
              <NavDropdown title="Other Publications" id="basic-nav-dropdown">
                <LinkedMenuItem linkTarget="/books/soccer" linkText="Soccer Officials" />
                <NavDropdown.Divider />
                <NavDropdown.Item disabled>Tech Reviews</NavDropdown.Item>
                <LinkedMenuItem linkTarget="/books/python" linkText="Python Development" />
                <LinkedMenuItem linkTarget="/books/smartphones" linkText="Smartphones" />
              </NavDropdown>
              <LinkContainer to="/articles">
                <Nav.Link>Articles</Nav.Link>
              </LinkContainer>
              <NavDropdown title="About" id="basic-nav-dropdown">
                <LinkedMenuItem linkTarget="/about" linkText="Me" />
                <NavDropdown.Item onClick={() => this.loadExternalUrl("https://johnwargo.com")}>
                  Blog (external)
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => this.loadExternalUrl("https://github.com/johnwargo")}>
                  Code (external)
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/articles">
            <Articles />
          </Route>
          <Route path="/books/blackberry">
            <BlackBerry />
          </Route>
          <Route path="/books/cordova">
            <Cordova />
          </Route>
          <Route path="/books/domino">
            <Domino />
          </Route>
          <Route path="/books/python">
            <Python />
          </Route>
          <Route path="/books/smartphones">
            <Smartphones />
          </Route>
          <Route path="/books/soccer">
            <Soccer />
          </Route>
          <Route path="/books/web">
            <Web />
          </Route>
          <Route path="/">
            <Home />
          </Route> */}
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
