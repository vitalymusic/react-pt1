import { useState } from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';

import Hederis from './Hederis';
import Pakalpojumi from './Pakalpojumi';
import MateralUI from './MateralUI';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

function App() {
//  JSX - JavaScripteXtended
  let showAlert = (e)=>{

  }



  let showSanaIzvelne = () => {
    setOpenSanaIzvelne(true);
    // alert(openSanaIzvelne);

  }

  const pasleptJoslu = (e) => {
    // console.log(e);
    if (e.target == document.querySelector('.MuiBackdrop-root')) {
      setOpenSanaIzvelne(false);

    }
  }


  return (
    <>
      <Hederis />
      <main>
       <h3 onClick={showAlert}>Mūsu pakalpojumi</h3>
        <Alert icon={
                   <CheckIcon fontSize="inherit" />} severity="success" >
               Here is a gentle confirmation that your action was successful.
        </Alert>
       <Pakalpojumi />
       <MateralUI />
      </main>
      <footer>
        <h3>Fūteris</h3>
      </footer>
    </div>
  )
}

export default App
