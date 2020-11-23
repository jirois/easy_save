import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Team from './components/Team';
import About from './components/About';
import Footer from './Footer'
import Hero from './Hero'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Modal from './Modal'
function App() {
  return (
    <>
    <Navbar  />
    <Hero />
    <Sidebar/>
    <Modal />
    <main>
      <Switch>
          <Route path='/about' component={About} />
          <Route path='/team' component={Team} />

      </Switch>
    </main>
    <Footer />
    </>
  );
}

export default App;
