import Homepage from './components/homepage/index'
import Principal from './components/principal/index'
import { useState } from 'react'
import './App.css';
import './components/homepage/aside/aside.css'
import './components/homepage/section/section.css'
import './components/homepage/homepage.css'
import './components/principal/principal.css'
import './components/principal/aside/aside.css'
import './components/principal/header/header.css'
import './components/principal/main/main.css'
import './components/principal/main/Transations/trasations.css'

function App() {

  const [init, setInit] = useState(false)

  const findSet = (x) => {
    setInit(x)
  }

  return (
    <div className="App">
      <header className="App-header">
        {init ? <Principal findSet={findSet}/> : <Homepage findSet={findSet}/>}
      </header>
    </div>
  );
}

export default App;
