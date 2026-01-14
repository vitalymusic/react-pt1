import { useState } from 'react'
import './App.css'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import Headeris from './Hederis'
import Pakalpojumi from './Pakalpojumi';
import MaterialUI from './MateralUI';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import ButtonAppBar from './ButtonAppBar';
import SanaIzvelne from './SanaIzvelne';
import Home from './Home';
import User from './User';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Productslist from './Productslist';
import Productcard from './Productcard';



function App() {

  const [openSanaIzvelne, setOpenSanaIzvelne] = useState(false);



  // JSX - JavaScripteXtended
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
    <>
      <div className="app" onClick={pasleptJoslu}>
       <BrowserRouter>
        <ButtonAppBar setFunc={showSanaIzvelne} />,
        <SanaIzvelne opened={openSanaIzvelne} />
        <Headeris />

          {/* <nav>
            <Link to="/">Home</Link> |{" "}
            <Link to="/pakalpojumi">About</Link> |{" "}
            <Link to="/elementi">Contact</Link>|{" "}
            <Link to="/user/Adrew">Andrew</Link>|{" "}
            <Link to="/user/M122">Mik</Link>
          </nav> */}
          <main>



            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pakalpojumi" element={<Pakalpojumi />} />
              <Route path="/elementi" element={<MaterialUI />} />
              <Route path="/user/:userName" element={<User />} />
              <Route path="/shop" element={<Productslist />} />
              <Route path="/shop/product/:id" element={<Productcard />} />
            </Routes>


            {/* <h3 onClick={showAlert}>Mūsu pakalpojumi</h3>
            <Alert hidden={true} icon={
              <CheckIcon fontSize="inherit" />}
              severity="success" >
              ???
            </Alert>
            */}

          </main>
        </BrowserRouter>
        <footer>
          <h3>Lapas footeris</h3>
        </footer>
      </div>
    </>
  )
}

export default App
