import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Team from './components/Team';
import About from './components/About';
import Projects from './components/Project';

function App() {
  return (
   <Router>
     <Nav />
     <Switch>
       <Route path='/' exact component={Home} />
       <Route path='/team' component={Team} />
       <Route path='/projects' component={Projects} />
       <Route path='/about' component={About} />

     </Switch>
   </Router>
  );
}

export default App;
