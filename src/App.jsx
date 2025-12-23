import { useState } from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';

import Hederis from './Hederis';
import Pakalpojumi from './Pakalpojumi';

function App() {
//  JSX - JavaScripteXtended

  return (
    <>
      <Hederis />
      <main>
       <h3>Mūsu pakalpojumi</h3>
       <Pakalpojumi></Pakalpojumi>
      </main>
      <footer>
        <h3>Fūteris</h3>
      </footer>
    </>
  )
}

export default App
