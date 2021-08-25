import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from "./components/Navbar.jsx"
import DemoContainer from "./containers/DemoContainer.jsx"


const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <DemoContainer />
      </Switch>
    </Router>
  );
};

export default App;
