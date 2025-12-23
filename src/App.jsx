import { useState } from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';

import Hederis from './Hederis';
import Pakalpojumi from './Pakalpojumi';
import MateralUI from './MateralUI';

function App() {
//  JSX - JavaScripteXtended
  let showAlert = (e)=>{
    alert(e.target.innerText);
  }





  return (
    <>
      <Hederis />
      <main>
       <h3 onClick={showAlert}>Mūsu pakalpojumi</h3>
       <Pakalpojumi />
       <MateralUI />
      </main>
      <footer>
        <h3>Fūteris</h3>
      </footer>
    </>
  )
}

export default App
