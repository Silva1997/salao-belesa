import preco from "../../assets/Espelho Meu.png";
const Tabela = () => {
  return (
    <div className="p-4  bg-yellow-950 ">
      <h6 className="text-white text-center text-xl font-semibold" >Tabela de Precos</h6>{" "}
      <div className=" gap-3  grid place-items-center grid-cols-2 auto-cols-auto auto-rows-auto h-auto">
        <div className=" xs-min:rounded-md bg-white w-full h-[15rem]">
        <h6>Cabelo</h6>
        <p>Corte + Escova</p>
        <p>Hidratacao</p>
        <p>Lavagem profunda</p>
        <p>Lisagem Modelada</p>
        </div>

        <div className="xs-min:rounded-md bg-white w-full h-[15rem]">
        <h6>Manicure</h6>
        <p>Esmaltacao de gel de mao</p>
        <p>Blindagem</p>
        <p>Decoracao de unhas</p>
        <p>Sem gel de unhas</p>
        </div>

        <div className="xs-min:rounded-md bg-white w-full h-[15rem]">
        <h6>Penicure</h6>
        </div>
        <div className="xs-min:rounded-md bg-white w-full h-[15rem]">
        <h6>Makeup</h6>
        </div>

        {/* <img className='xs-min:w-full xs-min:h-full xl:w-full  xl:h-[32rem] object-contain' src={preco} alt='Precos'/> */}
      </div>
    </div>
  );
};

export default Tabela;
