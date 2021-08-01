import React from "react"

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Knowledge from './pages/Knowledge'
import Experiences from './pages/Experiences'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Error404 from './pages/Error404'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/competences" component={Knowledge}/>
        <Route path="/experiences" component={Experiences}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/contact" component={Contact}/>
        <Route component={Error404}/>
      </Switch>
    </Router>
  );
}

export default App;
