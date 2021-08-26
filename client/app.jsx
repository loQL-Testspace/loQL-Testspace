import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from "./components/Navbar.jsx"
import DemoContainer from "./containers/DemoContainer.jsx"

const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="content-wrapper">
        <Switch>
        <Route path="/demo">  
          <DemoContainer />
        </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
