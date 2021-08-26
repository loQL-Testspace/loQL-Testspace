import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from "./components/Navbar.jsx"
import Demo from "./components/Demo.jsx"

const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="content-wrapper">
        <Switch>
        <Route path="/demo">  
          <Demo />
        </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
