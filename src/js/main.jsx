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

let cont = 0
const intervalID = setInterval(
function () {
  let cuatro = Math.floor(cont/1000);
   let tres = Math.floor(cont/100);
    let dos = Math.floor(cont/10);
     let uno = Math.floor(cont/1);
     cont++
     console.log (uno,dos,tres,cuatro)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SecondCounter seconds={uno%10} seconds1={dos%10} seconds2={tres%10} seconds3={cuatro%10}/>
  </React.StrictMode>,
);
}
,1000);

