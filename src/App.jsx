
import './App.css'
import AutoPlay from './components/AutoPlay'
import { Main } from './components/Main'
import { Nav } from './components/Nav'
import { Projects } from './components/Projects'



function App() {


  return (
    <>
      <div className='w-100vw h-svh md:h-screen'>
        <Nav />
        <Main />
        <AutoPlay />
        <Projects />
      </div>
    </>
  )
}

export default App
