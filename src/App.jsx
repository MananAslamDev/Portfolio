import './App.css'
import About from './Components/About'
import Experience from './Components/Experience'
import Home from './Components/Home'
import Navbar from './Components/NavBar'
import Portfolio from './Components/Portfolio'
import Services from './Components/Serivices'

function App() {
    return (
    <>
      <Navbar/>
      <Home />
      <About/>
      <Portfolio/>
      <Services/>
      <Experience/>
    </>
  )
}

export default App
