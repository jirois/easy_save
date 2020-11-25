import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Team from './components/Team';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
   <Router>
     <Nav />
     <Switch>
       <Route path='/' exact component={Home} />
       <Route path='/team' component={Team} />
       <Route path='/contact' component={Contact} />
       <Route path='/about' component={About} />

     </Switch>
   </Router>
  );
}

export default App;
