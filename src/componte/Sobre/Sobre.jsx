
import { motion } from "framer-motion";
import cabelo from '../../assets/cabelo-B3.jpg'
import unhas from '../../assets/unhas-Cy.jpg'
import makeup from '../../assets/makeup.png'
export default function Sobre() {

  return (
    <div>


<div className="w-full  xs-min:max-h-auto xs-min:pl-4 xs-min:pr-4  md:h-auto  sm:h-auto    overflow-hidden pt-0  xl:h-[33rem] bg-zinc-80 xl:pl-28 xl:pr-28">
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
          <div className="grid sm:gap-2  sm:grid-cols-2 landscape:grid-rows-[90vh_90vh] sm:auto-cols-[200px]    md:gap-4 xs-min:gap-2  md:auto-cols-[200px]  md:grid-rows-[37vh_37vh] xs-min:grid-cols-2 md:grid-cols-2 xs-min:grid-rows-[35vh_35vh] xl:grid-rows-auto   xl:grid-cols-4 xl:auto-cols-[200px] xl:gap-4 pt-5 pb-5">
            <div className=" sm:h-[100%] md: max-h-[90%] md:min-h-96 md:bg-slate-400      border-b-2  border-orange-400   flex flex-col rounded-sm w-full xl:h-[27rem] xl:relative overflow-hidden group cursor-pointer">
              {/* <!-- Fundo do Card (Imagem) --> */}

              <img
                src={cabelo}
                alt="Imagem do Card"
                className=" sm:w-full sm:object-fill sm:h-full xs-min:max-w-[100%] xs-min:max-h-[100%] md:h-[100%] md:object-center md:object-fill md:w-[100%] xs-min:object-fill xs-min:object-bottom xl:object-fill w-full xl:h-[27rem] xs-min:h-[100%] transform transition-transform duration-300 ease-in-out group-active:scale-110 group-hover:scale-105"
              />

              {/* <!-- Cabeleiro Conteúdo do Card --> */}

              <div className="    md:-top-28 relative xs-min:-top-20 xl:-top-24 pl-4">
                <h6 className=" md:text-[1.7rem] xs-min:text-xl xl:text-[1.8rem] text-start text-transparent bg-clip-text bg-gradient-to-r from-amber-500 from-[5%] to-[20%] to-red-500 font-bold">
                  Cabeleiro
                </h6>
                <p className=" md:text-xl xs-min:text-sm xl:text-xl text-white">
                  Transforme seu visual, realce sua beleza.
                </p>
              </div>
            </div>

            <div className=" sm:h-[100%] md:min-h-96   md: max-h-[90%] md:bg-violet-400     flex flex-col  border-b-2 border-orange-400 rounded-sm w-full xl:h-[27rem] relative overflow-hidden group cursor-pointer">
              {/* <!-- Fundo do Card (Imagem) --> */}
              <img
                   src={unhas}
                alt="Imagem do Card"
                className=" sm:object-center  sm:w-full sm:object-fill sm:h-full md:object-center md:object-fill md-w-full xl:h-[27rem] xs-min:object-fill  xl:object-fill xs-min:h-[100%] transform transition-transform duration-300 ease-in-out group-active:scale-110 group-hover:scale-105"
              />

              {/* <!-- Manicure Conteúdo do Card --> */}

              <div className="  md:-top-28 relative xs-min:-top-20 xl:-top-[6.2rem] pl-4">
                <h6 className=" md:text-[1.6rem] xs-min:text-xl xl:text-[1.8rem] text-start text-transparent bg-clip-text bg-gradient-to-r from-amber-500 from-[5%] to-[20%] to-red-500 font-bold">
                  Manicure
                </h6>
                <p className=" md:text-xl xs-min:text-sm  xl:text-xl  text-white">
                  Unhas impecáveis, confiança inabalável.
                </p>
              </div>
            </div>

            <div className=" sm:h-[100%] md:min-h-96  md: max-h-[90%] md:bg-red-400      border-b-2 border-orange-400 flex flex-col  rounded-sm w-full xl:h-[27rem] relative overflow-hidden group cursor-pointer">
              {/* <!-- Fundo do Card (Imagem) --> */}
              <img
                src={unhas}
                alt="Imagem do Card"
                className=" sm:object-center sm:w-full sm:object-fill sm:h-full  md:object-center md:object-fill md:w-full md:h-[100%] xl:object-fill xs-min:h-[100%] xl:object-bottom xl:w-full xl:h-[27rem] transform transition-transform duration-300 ease-in-out group-active:scale-110 group-hover:scale-105"
              />

              {/* <!-- Penicure Conteúdo do Card --> */}

              <div className="relative md:-top-28 xs-min:-top-20 xl:-top-24 pl-4">
                <h6 className=" md:text-[1.7rem] xs-min:text-xl xl:text-[1.8rem] text-start text-transparent bg-clip-text bg-gradient-to-r from-amber-500 from-[5%] to-[20%] to-red-500 font-bold">
                  Pedicure
                </h6>
                <p className="md:text-xl xl:text-xl xs-min:text-sm text-white">
                  Unhas impecáveis, confiança inabalável.
                </p>
              </div>
            </div>

            <div className=" sm:h-[100%] md:min-h-96   md: max-h-[90%]    border-b-2 border-orange-400 flex flex-col rounded-sm w-full xl:h-[27rem] relative  overflow-hidden group cursor-pointer">
              {/* <!-- Fundo do Card (Imagem) --> */}
              <img
                src={makeup}
                alt="Imagem do Card"
                className=" sm:object-center sm:w-full sm:object-fill sm:h-full  md:object-center md:object-cover md:w-full  md:h-[100%]  xl:h-[27rem] xs-min:object-cover xl:object-fill xs-min:h-[100%] w-full transform transition-transform duration-300 ease-in-out group-active:scale-110 group-hover:scale-105"
              />

              {/* <!-- Makeup Conteúdo do Card --> */}
              <div className="relative xs-min:-top-20 md:-top-24 xl:-top-24 pl-4">
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
  )
}
