import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from "./components/Navbar.jsx"
import Demo from "./components/Demo.jsx"


const App = () => {
  return (
    <Router>
      {/* <NavBar /> */}
      <Switch>
        <Demo />
      </Switch>
    </Router>
  );
};

export default App;