import React from 'react'
import logo from './logo.svg'
import './App.css'
import Home from './screens/Home'
import About from './screens/About'
import Services from './screens/Services'
import Projects from './screens/Projects'
import Contact from './screens/Contact'
import Footer from './screens/Footer'

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
