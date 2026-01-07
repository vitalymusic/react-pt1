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
import Home from './Home';


import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import User from './User';

function App() {

  const [openSanaIzvelne, setOpenSanaIzvelne] = useState(false);



  //  JSX - JavaScripteXtended
  let showAlert = (e) => {
    alert(e.target.innerText);
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
    <div className='app' onClick={pasleptJoslu}>
      <ButtonAppBar setFunc={showSanaIzvelne} />
      <SanaIzvelne opened={openSanaIzvelne} />
      <Hederis />
      <BrowserRouter>
        <nav>
          <Link to="/">Galvenā</Link> |{" "}
          <Link to="/pakalpojumi">Pakalpojumi</Link> |{" "}
          <Link to="/elementi">Elementi</Link> |{" "}
          <Link to="/user/andrejs">Andrejs</Link> |{" "}
          <Link to="/user/vitalijs">vitalijs</Link>
        </nav>
        <main>




          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pakalpojumi" element={<Pakalpojumi />} />
            <Route path="/elementi" element={<MateralUI />} />
            <Route path="/user/:username" element={<User />} />
          </Routes>

          {/* Your app content */}

          <h3 onClick={showAlert}>Mūsu pakalpojumi</h3>


        </main>
      </BrowserRouter>
      <footer>
        <h3>Fūteris</h3>
      </footer>
    </div>
  )
}

export default App
