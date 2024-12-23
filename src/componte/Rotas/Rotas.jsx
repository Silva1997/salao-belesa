

import logo from "../../assets/Logo1.png";
import Menus from '../Gaveta/Drawer'
import { TiThMenu } from "react-icons/ti";
import { Routes, BrowserRouter, Route, Outlet} from "react-router-dom";
import Icon from "../Svg/icon";


 export default function Rotas() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route exact path="/home" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

function Home() {
  return console.log("ola");
}

function App() {
  return (
    <>

<nav
        className="md:bg-white flex xs-min:flex-row 
    xs-min:bg-white md:flex-row drop-shadow-md xl:bg-white 
    sticky top-0 z-[1000]   
    sm:bg-green-300 lg:bg-zinc-400 2xl:bg-violet-800 
    md:h-[4.8rem] xs-min:h-[3.8rem]
     xl:h-[4.5rem] justify-between  overflow-hidden"
      >
        <Icon/>
        <Menus TiThMenu={TiThMenu}/>
        {/* <button className="text-white  pr-4">
        
      <TiThMenu className="text-green-500 lg:text-[3.5rem] md:text-[3rem]  xs-min:text-[1.8rem]    xl:text-[2.5rem]" />
        </button> */}
      </nav>
    
   
     <Outlet/>
    </>
  );
}