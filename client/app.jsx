import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Demo from "./components/Demo.jsx"

const App = () => {
  return (
    <Router>
      <Switch>
        <Demo />
      </Switch>
    </Router>
  );
};

export default App;
