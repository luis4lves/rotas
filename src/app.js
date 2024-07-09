import React, { Suspense, lazy } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const Home = lazy(() => import('./components/pages/Home'));
const About = lazy(() => import('./components/pages/About'));
const Contact = lazy(() => import('./components/pages/Contact'));
const UserProfile = lazy(() => import('./components/pages/UserProfile'));
const NotFound = lazy(() => import('./components/pages/NotFound'));

const App = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/user/:id" component={UserProfile} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
