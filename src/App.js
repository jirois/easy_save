import React,{useState} from 'react'
import Footer from './Footer'
import Hero from './Hero'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }
  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }
  return (
    <>
    <Navbar  openSidebar={openSidebar}/>
    <Hero />
    <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />

    <Footer />
    </>
  );
}

export default App;
