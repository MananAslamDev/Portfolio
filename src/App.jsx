import './App.css'
import About from './Components/About'
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
    </>
  )
}

export default App
