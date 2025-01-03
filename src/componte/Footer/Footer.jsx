import Input from "antd/es/input/Input";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className=" md:pl-16 md:pr-16 xs-min:h-[18rem] overflow-hidden xs-min:pr-1 xs-min:pl-1 xs-min:bg-yellow-950 bg-slate-400 w-full sm:grid-cols-2 md:grid-cols-3  lg:h-auto md:h-auto md:auto-cols-[250px] xs-min:grid-cols-1 xs-min:auto-cols-[150px] xs-min:place-items-center xl:h-[18rem] grid 2xl:grid-cols-3 2xl:auto-cols-[250px  xl:grid-cols-3 xl:auto-cols-[250px] xl:pt-0 pb-1  xl:pl-7 xl:pr-4">
        <div className="w-full md:pt-2 md:mt-0 ">
          <h3 className="  md:text-xl relative md:-top-2 xl:pt-0 md:mt-0 md:p-0 md:text-start xs-min:text-xl xs-min:text-start  text-white font-bold xl:text-[1.8rem]">
            Entre em contacto com a gente!
          </h3>

          <p className=" relative xl:pt-0 md:-top-2 md:text-sm xs-min:text-[12px] xs-min:text-start  text-black  xl:text-xl">
            Entre em contacto com o Espelho Meu,
            <br /> queremos tirar as duvidas, ouvir suas criticas e sugestoes
          </p>

          <span className=" xs-min:pt-2 relative md:-top-2 flex md:flex-row xs-min:flex-row md:pt-1 xl:flex-row gap-1  pb-4  ">
            <FaPhoneAlt className=" xl:text-3xl md:text-sm xs-min:text-xl  text-white rounded-[50%] bg-blue-700 p-1 " />{" "}
            <p className=" xl:text-xl md:text-[11px] xs-min:text-[12px]">
              {" "}
              (+244) 930-000-000{" "}
            </p>
            <FaMapMarkerAlt className=" xl:text-3xl md:text-sm xs-min:text-xl  text-white rounded-[50%] bg-blue-700 p-1 " />{" "}
            <p className=" xl:text-xl md:text-[11px] xs-min:text-[12px]">
              {" "}
              R. da Maxinde iepa
            </p>
          </span>

          <div className="md:hidden xl:hidden lg:hidden flex flex-col gap-2">
            <h6 className="xs-min:text-start xl:pt-0 md:text-xl md:text-start sm:text-sm  xs-min:text-sm xl:text-3xl text-white font-bold">
              Reclamações
            </h6>
            <Input
              className="xs-min:w-[10rem] 2xl:w-full md:w-52 xl:w-full sm:w-40"
              width={12}
              title="Input-rec"
              placeholder="Reclamações ou sugestões"
            />
            <button className=" p-1 md:w-52 sm-w-40 xs-min:w-[10rem] 2xl:w-full xl:w-96 bg-blue-600 text-white rounded-xl">
              Enviar
            </button>
          </div>

          <p className="  xl:hidden lg:hidden  xs-min:pt-8 md:hidden xs-min:text-[12px] xs-min:text-center">
            © 2024 Eng. Silva - Todos os direitos reservados
          </p>
        </div>

        <div className=" xs-min:hidden md:flex md:mt-16 md:flex-col xl:flex xl:flex-col xs-min:pt-16 xl:pt-36 xs-min:text-sm  ">
          <p className="md:text-sm md:text-center  xl:text-sm">
            © 2024 Eng. Silva - Todos os direitos reservados
          </p>
        </div>


        <div className="xs-min:hidden xl:flex xl:flex-col xl:gap-2 sm:flex sm:flex-col sm:gap-2 md:flex md:flex-col md:gap-2 lg:flex lg:flex-col lg:gap-2">
            <h6 className="xs-min:text-start xl:pt-0 md:text-xl md:text-start sm:text-sm  xs-min:text-sm xl:text-3xl text-white font-bold">
              Reclamações
            </h6>
            <Input
              className="xs-min:w-[10rem] 2xl:w-full md:w-52 xl:w-full sm:w-40"
              width={12}
              title="Input-rec"
              placeholder="Reclamações ou sugestões"
            />
            <button className=" p-1 md:w-52 sm-w-40 xs-min:w-[10rem] 2xl:w-full xl:w-96 bg-blue-600 text-white rounded-xl">
              Enviar
            </button>
          </div>


      </footer>
    </>
  );
};
export default Footer;

//   <div className="  xs-min:bg-red-600 xs-min:items-start  grid grid-cols-1 place-items-start xs-min:-top-8  xs-min:relative  pt-0 xs-min:gap-2 xl:items-center ">

//   <p className=" xl:hidden  xs-min:relative xs-min:top-12 xs-min:justify-self-end md:hidden xs-min:text-[12px] xs-min:text-center">
//     © 2024 Eng. Silva - Todos os direitos reservados
//   </p>
// </div>
