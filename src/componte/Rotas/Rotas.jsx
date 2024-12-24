import {  useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import Menus from "../Gaveta/Drawer";
import { TiThMenu } from "react-icons/ti";
import { Col,Row} from 'antd';
import Icon from "../Svg/icon";
import {
  Nav,
  Index,
  Grid,
  Valores,
  Sobre,
  About,
  Equipa,
  Tabela,
} from "../../utils/Utils";

export default function Rotas() {


  return (
    <BrowserRouter>
      <Routes>
        {/* A rota principal, onde App é o componente principal */}
        <Route path="/" element={<App  />}>
          {/* Rota para 'home' */}
          <Route path="/home" element={<Home />} />

          {/* Rota para 'sobre' */}
          <Route path="/sobre" element={<Sobre />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return console.log("ola");
}

function App() {
  return (
    <div >
      <nav
        className="md:bg-white flex xs-min:flex-row 
        xs-min:bg-white md:flex-row drop-shadow-md xl:bg-white 
        sticky top-0 z-[1000] sm:bg-green-300 lg:bg-zinc-400 2xl:bg-violet-800 
        md:h-[4.8rem] xs-min:h-[3.8rem] xl:h-[4.5rem] justify-between overflow-hidden"
      >
        <Icon />
        <Menus TiThMenu={TiThMenu} />
       
      </nav>


     <div
        id="home"
     
      />
          <Nav />
          <Valores />
          <Index />
          <Grid />
      <div
        id="sobre"

        
        >
        <About />
      </div>
      <div
        id="servico"
  
      
      >
        <Sobre />
     </div>

     <div id="equipa"
     
  
     >
     <Tabela />
     <Equipa />
     </div>

     
    </div>
  );
}
