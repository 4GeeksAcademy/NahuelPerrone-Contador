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
setInterval(
function () {
  let seis = Math.floor(cont/100000);
  let cinco = Math.floor(cont/10000);
  let cuatro = Math.floor(cont/1000);
  let tres = Math.floor(cont/100);
  let dos = Math.floor(cont/10);
  let uno = Math.floor(cont/1);
         cont++
     console.log (uno,dos,tres,cuatro,cinco,seis)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SecondCounter seconds={uno%10} secondsOne={dos%10} secondsTwo={tres%10} secondsThree={cuatro%10} secondsFour={cinco%10} secondsFive={seis%10}/>
  </React.StrictMode>,
);
}
,1000);

