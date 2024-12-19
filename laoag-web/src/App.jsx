
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import History from './components/History'
import Visit from './components/Visit'
import Discover from './components/Discover'

function App() {
 
  return (
    <>
      <Navbar/>
      <main className='container'>
        <Hero />
        <History />
        <Visit />
        <Discover />
      </main>
      <Footer/>
    </>
  )
}

export default App
