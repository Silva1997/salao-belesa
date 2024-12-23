
import "./index.css";
import Rotas from './componte/Rotas/Rotas'
import { Nav,Index,Grid,Valores,Sobre, About,Footer, Equipa, Tabela } from "./utils/Utils";


function App() {
  return (

    <div className="bg-white">
    <Rotas/>
    <Nav />
    <Valores />
    <Index />
    <Grid/>
    <About/>
    <Sobre />
<Tabela/>
    <Equipa/>
    <Footer/>
  </div>
  );
}
export default App;
