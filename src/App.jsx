
import './App.css'
import AutoPlay from './components/AutoPlay'
import { Main } from './components/Main'
import { Nav } from './components/Nav'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'



function App() {


  return (
    <>
      <div className='w-100vw h-svh md:h-screen'>
        <Nav />
        <Main />
        <AutoPlay />
        <Projects />
        <Footer/>
      </div>
    </>
  )
}

export default App
