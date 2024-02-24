import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { Layout } from './components/Layout'
import { StartGame } from './components/StartGame'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='start-game' element={
            <>
              <StartGame />
            </>
          } />
        </Route>
      </Routes>
    </>
  )
}

export default App
