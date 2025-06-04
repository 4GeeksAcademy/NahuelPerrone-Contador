import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import SecondCounter from './components/SecondsCounter.';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SecondCounter seconds={3333}/>
  </React.StrictMode>,
)
const intervalID = setInterval(myCallback, 1000);
let cont = 0
function myCallback() {
  console.log("paso 1 segundo" + cont++ )
}
