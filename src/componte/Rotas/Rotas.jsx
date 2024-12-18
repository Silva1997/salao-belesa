

import logo from "../../assets/logo.png";
import { TiThMenu } from "react-icons/ti";
import { Routes, BrowserRouter, Route, Outlet} from "react-router-dom";


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
        <div className="lg:pt-1 xs-min:pt-1  md:pt-0  xs-min:landscape:w-auto xs-min:landscape:h-auto pl-4  md:w-28 md:h-auto xs-min:w-24 xs-min:h-14 xl:w-28 xl:h-24 overflow-hidden">
          <img
            className=" xs-min:bg-white  xs-min:landscape:w-full xs-min:landscape:h-[100%]  xl:object-cover md:object-contain md:w-full md:h-[100%] xs-min:object-cover xs-min:w-[100%] xs-min:h-[100%] xl:w-[14vh] xl:h-[11vh] pt-0   mt-0"
            src={logo}
            alt="icon"
          />
        </div>
        <button className="text-white  pr-4">
        
      <TiThMenu className="text-green-500 lg:text-[3.5rem] md:text-[3rem]  xs-min:text-[1.8rem]    xl:text-[2.5rem]" />
        </button>
      </nav>
    
   
     <Outlet/>
    </>
  );
}