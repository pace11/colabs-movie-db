import './App.css'
import Film from './film/film'
import Bawah from './footer/footer'

import Hero from './hero/hero'
import Navbarp from './navbar/navbar'

function App() {
  return (
    <div className="App">
      <Navbarp />
      <Hero />
      <Film />
      <Bawah />
    </div>
  )
}

export default App
