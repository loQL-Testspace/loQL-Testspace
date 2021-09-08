import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import DemoContainer from './containers/DemoContainer';
import MainContainer from './containers/MainContainer';
<<<<<<< Updated upstream
// import TeamContainer from "./containers/TeamContainer";
=======
import TeamContainer from "./containers/TeamContainer";
>>>>>>> Stashed changes

const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="content-wrapper">
        <Switch>
          <Route path="/demo">
            <DemoContainer />
          </Route>
<<<<<<< Updated upstream
          {/* <Route path="/team"> */}
          {/*   <TeamContainer /> */}
          {/* </Route> */}
=======
          <Route path="/team">
            <TeamContainer />
          </Route>
>>>>>>> Stashed changes
          <Route path="/">
            <MainContainer />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
