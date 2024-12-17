
import "./index.css";
import Rotas from './componte/Rotas/Rotas'
import { Nav,Index,Grid,Valores,Sobre } from "./utils/Utils";

function App() {
  return (

    <div className="bg-white">
    <Rotas/>
    <Nav />
    <Valores />
    <Index />
    <Grid/>
    <Sobre />

  </div>
  );
}
export default App;
