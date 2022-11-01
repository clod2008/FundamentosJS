// import { VarConstLet } from "./components/fundamentos/01-VarConstLet";
// import { TemplateString } from "./components/fundamentos/02-TemplateString";

import './App.css'

// import { JsFunction } from "./components/fundamentos/05-JsFunction";
// import { ObjetosLiterales } from "./components/fundamentos/03-Object";
// import { JsArray } from "./components/fundamentos/04-Array";
// import { CardGrid } from "./components/CardGrid/CardGrid";
// import { productos } from "./data/productos";
// import { DesestObj } from "./components/fundamentos/06-DesestObj";
// import { MiPrimerComp } from "./components/MiPrimerComp/MiPrimerComp";
// import { DesestArray } from "./components/fundamentos/07-DesestArray";
// import { HeroBanner } from "./components/HeroBanner/HeroBanner";
// import { FtechApi } from './components/FethApi/FtechApi';
// import { Map } from "./components/fundamentos/04-1-Map";

import { NavBar } from "./components/NavBarPP/NavBar";
import { Footer } from "./components/Footer/Footer";
import { Route, Routes } from 'react-router-dom'; // importacion de componentes de Router Dome
import { Home } from './components/pages/Home';
import { Pp2 } from './components/pages/pp2';
import { About } from './components/pages/About';
import { Contact } from './components/pages/Contact';
import { CartProvider } from './components/context/CartContex';



function App() {
  //  console.log(dataProducts)
  return (
    <>

    <CartProvider>
    <NavBar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/pp2" element={<Pp2 />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />


      </Routes>
    </CartProvider>
      
    <Footer />

    </>
  );
}

export default App;
