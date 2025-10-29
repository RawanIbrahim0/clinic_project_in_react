import Logo from './assets/logo.png'
import './App.css'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
{/*        <NavBar/>
 */} 
 <div className='flex'>
 <div className='bg-[var(--black)] w-50 h-50'></div>
 <div className='bg-[var(--dark-green)] w-50 h-50'></div>
 <div className='bg-[var(--caribbean-current)] w-50 h-50'></div>
 <div className='bg-[var(--persian-green)] w-50 h-50'></div>
 <div className='bg-[var(--robin-egg-blue)] w-50 h-50'></div>
 <div className='bg-[var(--timberwolf)] w-50 h-50'></div>
 </div>
  </>
  )
}

export default App
