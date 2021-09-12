import '@fontsource/roboto';
import '@fontsource/poppins';
import '@fontsource/ibm-plex-sans';

import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Loading from './components/Loading';

const DemoContainer = lazy(() => import('./containers/DemoContainer'));
const MainContainer = lazy(() => import('./containers/MainContainer'));
const TeamContainer = lazy(() => import('./containers/TeamContainer'));
const DocsContainer = lazy(() => import('./containers/DocsContainer'));

const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="content-wrapper">
        <Switch>
          <Suspense fallback={<Loading />}>
            <Route path="/demo">
              <DemoContainer />
            </Route>
            <Route path="/docs">
              <DocsContainer />
            </Route>
            <Route path="/team">
              <TeamContainer />
            </Route>
            <Route exact path="/">
              <MainContainer />
            </Route>
          </Suspense>
        </Switch>
      </div>
      <Footer className="footer" />
    </Router>
  );
};

export default App;
