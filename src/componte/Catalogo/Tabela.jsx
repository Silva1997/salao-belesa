// import preco from "../../assets/Espelho Meu.png";
import Formulario from '../Formulario/Form';

const Tabela = () => {
  return (
    <div className="overflow-hidden xs-min:pl-4 xs-min:pr-4  md:pr-16 md:pl-16 xl:pl-28 xl:pr-28 bg-yellow-950  ">
     <h6 className="text-white text-center text-xl font-semibold">Tabela de Preços</h6>

<div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center w-full">
  {/* Cabelo */}
  <div className="xs-min:rounded-md  bg-white w-full h-auto p-4 shadow-md">
    <h6 className="font-semibold text-lg">Cabelo</h6>
    <p className='text-[14px]'>Corte + Escova: <span className=" font-semibold">R$ 80,00</span></p>
    <p>Hidratação: <span className="font-semibold">R$ 50,00</span></p>
    <p>Lavagem Profunda: <span className="font-semibold">R$ 40,00</span></p>
    <p>Lizagem Modelada: <span className="font-semibold">R$ 100,00</span></p>
  </div>

  {/* Manicure */}
  <div className="xs-min:rounded-md bg-white w-full h-auto p-4 shadow-md">
    <h6 className="font-semibold text-lg">Manicure</h6>
    <p className='text-[14px]'>Esmaltação de Gel de Mão: <span className="font-semibold">R$ 60,00</span></p>
    <p>Blindagem: <span className="font-semibold">R$ 70,00</span></p>
    <p>Decoração de Unhas: <span className="font-semibold">R$ 30,00</span></p>
    <p>Sem Gel de Unhas: <span className="font-semibold">R$ 25,00</span></p>
  </div>

  {/* Pedicure */}
  <div className="xs-min:rounded-md bg-white w-full h-auto p-4 shadow-md">
    <h6 className="font-semibold text-lg">Pedicure</h6>
    <p>Corte e Cuidados: <span className="font-semibold">R$ 45,00</span></p>
    <p>Esfoliação: <span className="font-semibold">R$ 35,00</span></p>
    <p>Esmaltação de Gel: <span className="font-semibold">R$ 60,00</span></p>
    <p>Esmaltação de Gel: <span className="font-semibold">R$ 60,00</span></p>
  </div>

  {/* Makeup */}
  <div className="xs-min:rounded-md bg-white w-full h-auto p-4 shadow-md">
    <h6 className="font-semibold text-lg">Makeup</h6>
    <p className='text-[14px]'>Maquiagem Completa: <span className="font-semibold">R$ 150,00</span></p>
    <p>Maquiagem Básica: <span className="font-semibold">R$ 80,00</span></p>
    <p className='text-[14px]'>Maquiagem para Evento: <span className="font-semibold">R$ 120,00</span></p>
    <p>Maquiagem  Infatil: <span className="font-semibold">R$ 120,00</span></p>
  </div>
</div>


      <div className=" mt-8 flex flex-col justify-center items-center">
   <Formulario/>
      </div>
   
    </div>
  );
};

export default Tabela;
