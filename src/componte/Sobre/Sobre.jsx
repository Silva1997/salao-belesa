import { motion } from "framer-motion";
import cabelo from "../../assets/girl.jpg";
import unhas from "../../assets/unhas-Cy.jpg";
import makeup from "../../assets/makeup.png";
export default function Sobre() {
  return (
    <div>
      <div className=" md:pr-16 md:pl-16 w-full  landscape:h-auto  xs-min:max-h-auto xs-min:pl-4 xs-min:pr-4  md:h-auto  sm:h-auto    overflow-hidden pt-0  xl:h-[33rem] bg-zinc-80 xl:pl-28 xl:pr-28">
        <div className="flex flex-col justify-center gap-1">
          <motion.h5
            className="md:text-3xl xs-min:text-[1.08rem]  font-bold xl:text-[1.8rem] 2xl:text-[2rem] text-start text-transparent bg-clip-text bg-gradient-to-r from-amber-500 from-[5%] to-[20%] to-red-500"
            initial={{ opacity: 0, x: -100 }} // Inicializa o elemento fora da tela à esquerda
            whileInView={{ opacity: 1, x: 0 }} // Quando estiver na tela, o elemento vai se mover para a posição original
            transition={{ duration: 1 }} // Define o tempo da animação
          >
            03.Serviços
          </motion.h5>
          <hr className="md:mb-4 xs-min:w-28 md:border-t-4 md:w-44 xl:w-44 bg-none xs-min:border-t-4 xl:border-t-4 border-orange-400" />
        </div>
        {/*  */}
        <div
          className="grid sm:gap-2  sm:grid-cols-2  
          landscape:grid-rows-auto
          sm:grid-rows-1
          sm:auto-cols-[200px]  md:gap-4 xs-min:gap-2  
          md:auto-cols-[200px]  md:grid-rows-1 xs-min:grid-cols-1 
          md:grid-cols-2 xs-min:grid-rows-auto xl:grid-rows-auto   
          xl:grid-cols-4 xl:auto-cols-[200px] xl:gap-4 pt-5 pb-5"
        >
          <div className=" md:flex md:flex-col sm:max-h-[30rem] xs-min:rounded-md xs-min:h-[13rem] xl:h-[27rem]  md:h-[30rem] md:max-h-[30rem]   border-b-2  border-orange-400   flex flex-col rounded-sm w-full xl:bg-black  xl:relative overflow-hidden group cursor-pointer">
            {/* <!-- Fundo do Card (Imagem) --> */}

            <img
              src={cabelo}
              alt="Imagem do Card"
              className=" sm:w-full  sm:object-fill sm:h-full xs-min:max-w-[100%] xs-min:max-h-[100%] md:h-full md:object-cover md:object-center  md:w-[100%] xs-min:object-cover xs-min:object-center xl:object-fill w-full xl:h-[27rem] xs-min:h-[100%] transform transition-transform duration-300 ease-in-out group-active:scale-110 group-hover:scale-105"
            />

            {/* <!-- Cabeleiro Conteúdo do Card --> */}

            <div className=" md:bg-zinc-800 md:top-0 xs-min:relative    xl:relative xs-min:-top-20 xl:-top-24 pl-4">
              <h6 className=" md:text-[1.7rem] xs-min:text-xl xl:text-[1.8rem] text-start text-transparent bg-clip-text bg-gradient-to-r from-amber-500 from-[5%] to-[20%] to-red-500 font-bold">
                Cabeleiro
              </h6>
              <p className=" md:text-xl xs-min:text-sm xl:text-xl text-white">
                Transforme seu visual, realce sua beleza.
              </p>
            </div>
          </div>

          <div className=" md:flex md:flex-col xs-min:rounded-md xs-min:h-[13rem]  sm:max-h-[30rem]  md:h-[30rem]   md:max-h-[30rem]     flex flex-col  border-b-2 border-orange-400 rounded-sm w-full xl:h-[27rem] relative overflow-hidden group cursor-pointer">
            {/* <!-- Fundo do Card (Imagem) --> */}
            <img
              src={unhas}
              alt="Imagem do Card"
              className=" landscape:tablet:h-[26.4rem] sm:object-center  sm:w-full sm:object-fill sm:h-full md:object-center md:h-[24.6rem] md:object-cover md-w-full xl:h-[27rem] xs-min:object-cover  xs-min:object-center  xl:object-fill xs-min:h-[100%] transform transition-transform duration-300 ease-in-out group-active:scale-110 group-hover:scale-105"
            />

            {/* <!-- Manicure Conteúdo do Card --> */}

            <div className=" xs-min:relative md:bg-zinc-800  md:top-0 xl:relative xs-min:-top-20 xl:-top-[6.2rem] pl-4">
              <h6 className=" md:text-[1.6rem] xs-min:text-xl xl:text-[1.8rem] text-start text-transparent bg-clip-text bg-gradient-to-r from-amber-500 from-[5%] to-[20%] to-red-500 font-bold">
                Manicure
              </h6>
              <p className=" md:text-xl xs-min:text-sm  xl:text-xl  text-white">
                Unhas impecáveis, confiança inabalável.
              </p>
            </div>
          </div>

          <div className=" md:flex md:flex-col  xs-min:rounded-md xs-min:h-[13rem] sm:max-h-[30rem]   md:h-[30rem]  md: md:max-h-[30rem]      border-b-2 border-orange-400 flex flex-col  rounded-sm w-full xl:h-[27rem] relative overflow-hidden group cursor-pointer">
            {/* <!-- Fundo do Card (Imagem) --> */}
            <img
              src={unhas}
              alt="Imagem do Card"
              className=" landscape:tablet:h-[26.4rem]  md:h-[24.8rem] xs-min:object-cover sm:object-center sm:w-full sm:object-fill sm:h-full  md:object-center md:object-cover md:w-full  xl:object-fill xs-min:h-[100%] xl:object-bottom xl:w-full xl:h-[27rem] transform transition-transform duration-300 ease-in-out group-active:scale-110 group-hover:scale-105"
            />

            {/* <!-- Penicure Conteúdo do Card --> */}

            <div className=" md:bg-zinc-800 md:top-0  xl:relative xs-min:relative xs-min:-top-20 xl:-top-24 pl-4">
              <h6 className=" md:text-[1.7rem] xs-min:text-xl xl:text-[1.8rem] text-start text-transparent bg-clip-text bg-gradient-to-r from-amber-500 from-[5%] to-[20%] to-red-500 font-bold">
                Pedicure
              </h6>
              <p className="md:text-xl xl:text-xl xs-min:text-sm text-white">
                Unhas impecáveis, confiança inabalável.
              </p>
            </div>
          </div>

          <div className="  md:flex md:flex-col  xs-min:rounded-md xs-min:h-[13rem] sm:max-h-[30rem]  md:h-[30rem]   md: md:max-h-[30rem]    border-b-2 border-orange-400 flex flex-col rounded-sm w-full xl:h-[27rem] relative  overflow-hidden group cursor-pointer">
            {/* <!-- Fundo do Card (Imagem) --> */}
            <img
              src={makeup}
              alt="Imagem do Card"
              className=" landscape:tablet:h-[26.4rem] sm:object-center sm:w-full sm:object-fill sm:h-full  md:object-center md:object-cover md:w-full  md:h-[24.8rem]  xl:h-[27rem] xs-min:object-cover xl:object-fill xs-min:h-[100%] w-full transform transition-transform duration-300 ease-in-out group-active:scale-110 group-hover:scale-105"
            />

            {/* <!-- Makeup Conteúdo do Card --> */}
            <div className="md:bg-zinc-800 md:top-0  xl:relative xs-min:relative xs-min:-top-20 xl:-top-24 pl-4">
              <h6 className=" md:text-[1.7rem] xs-min:text-xl xl:text-[1.8rem] text-start text-transparent bg-clip-text bg-gradient-to-r from-amber-500 from-[5%] to-[20%] to-red-500 font-bold">
                Makeup
              </h6>
              <p className=" md:text-xl xl:text-xl xs-min:text-sm text-white">
                Belesa impecáveis, confiança inabalável.
              </p>
            </div>
          </div>
        </div>

        {/*  */}
      </div>
    </div>
  );
}
