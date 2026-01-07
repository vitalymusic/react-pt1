import { useState } from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';

import Hederis from './Hederis';
import Pakalpojumi from './Pakalpojumi';
import MateralUI from './MateralUI';
import ButtonAppBar from './ButtonAppBar';
import SanaIzvelne from './SanaIzvelne';

function App() {

   const [openSanaIzvelne, setOpenSanaIzvelne] = useState(false);



//  JSX - JavaScripteXtended
  let showAlert = (e)=>{
    alert(e.target.innerText);
  }



  let showSanaIzvelne = ()=>{
    setOpenSanaIzvelne(true);
    // alert(openSanaIzvelne);

  }

  const pasleptJoslu = (e)=>{
    // console.log(e);
    if(e.target==document.querySelector('.MuiBackdrop-root')){
       setOpenSanaIzvelne(false);

    }
  }


  return (
    <div className='app' onClick={pasleptJoslu}>
      <ButtonAppBar setFunc={showSanaIzvelne}/>
      <SanaIzvelne opened={openSanaIzvelne}/>
      <Hederis />
      <main>
       <h3 onClick={showAlert}>Mūsu pakalpojumi</h3>
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
