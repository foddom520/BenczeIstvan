import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './home'
import Regiok from './regiok'
import Regis from './registracio'
import Regis1 from './regis1'
import Giga from './giga'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/regiok' element={<Regiok />} />
            <Route path='/registracio' element={<Regis />} />
            <Route path='/Regis1' element={<Regis1 />} />
            <Route path='/GigaNigga' element={<Giga />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App