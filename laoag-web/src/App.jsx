
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import History from './components/History'
import Visit from './components/Visit'
import Discover from './components/Discover'
import Intro from './components/Intro'

function App() {
 
  return (
    <>
      <Navbar/>
      <Intro />
      <main className='container mx-auto p-4'>
       
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
