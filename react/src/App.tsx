import { useContext } from 'react'
import './App.css'
import { AppContext } from './store'

function App() {

  const store = useContext(AppContext)

  return (
    <div className="App">
      { store?.name }
      <h1>{ store?.count }</h1>
      <button onClick={ () => store?.add(1) }>add</button>
    </div>
  );
}

export default App;
