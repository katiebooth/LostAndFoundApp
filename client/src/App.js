import './App.css';
import {useEffect, useState} from 'react'

function App() {

  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch('http://localhost:9000/found')
    .then(res => res.json())
    .then(data => setMessage(data.name))
  })


  return (
    <div className="App">
      <header className="App-header">
        Welcome to the Lost and Found Site!
      </header>
      <div>
       <p> The first lost item is : {message}</p>
      </div>
    </div>
  );
}

export default App;
