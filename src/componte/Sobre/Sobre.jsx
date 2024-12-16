
import { motion } from "framer-motion";
import cabelo from '../../assets/cabelo-B3.jpg'
import unhas from '../../assets/unhas-Cy.jpg'
import makeup from '../../assets/makeup.png'
export default function Sobre() {

  return (
    <div>


<div className="w-full xs-min:landscape:h-[60rem] xs-min:max-h-auto xs-min:pl-4 xs-min:pr-4  md:h-[28rem]     overflow-hidden pt-0  xl:h-[27rem] bg-zinc-80 xl:pl-28 xl:pr-28">
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
          <div className="grid  md:bg-red-400  md:gap-4 xs-min:gap-2 md:auto-rows-auto xs-min:grid-cols-2 md:grid-cols-3 xs-min:grid-rows-[35vh_35vh]   xl:grid-cols-4 xl:auto-cols-[250px] xl:gap-6 pt-5 pb-5">
            <div className=" md:h-[41vh] md:bg-slate-400    xs-min:landscape:h-[104vh]  border-b-2  border-orange-400   flex flex-col rounded-sm w-full xl:h-[55vh] xl:relative overflow-hidden group cursor-pointer">
              {/* <!-- Fundo do Card (Imagem) --> */}

              <img
                src={cabelo}
                alt="Imagem do Card"
                className=" xs-min:max-w-[100%] xs-min:max-h-[100%] md:h-[100%] md:object-center md:object-fill md:w-[100%] xs-min:object-fill xs-min:object-bottom xl:object-cover w-full xl:h-[100%] xs-min:h-[100%] transform transition-transform duration-300 ease-in-out group-active:scale-110 group-hover:scale-105"
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

            <div className=" md:h-[41vh] md:bg-violet-400    xs-min:landscape:h-[104vh] flex flex-col  border-b-2 border-orange-400 rounded-sm w-full xl:h-[55vh] relative overflow-hidden group cursor-pointer">
              {/* <!-- Fundo do Card (Imagem) --> */}
              <img
                   src={unhas}
                alt="Imagem do Card"
                className="  md:object-center md:object-fill md-w-full  xl:h-[100%] xs-min:object-fill  xl:object-cover xs-min:h-[100%] transform transition-transform duration-300 ease-in-out group-active:scale-110 group-hover:scale-105"
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

            <div className="md:h-[41vh] md:bg-red-400   xs-min:landscape:h-[104vh]   border-b-2 border-orange-400 flex flex-col  rounded-sm w-full xl:h-[55vh] relative overflow-hidden group cursor-pointer">
              {/* <!-- Fundo do Card (Imagem) --> */}
              <img
                src={unhas}
                alt="Imagem do Card"
                className=" md:object-center md:object-fill md:w-full md:h-[100%] xl:object-cover xs-min:h-[100%] xl:object-bottom xl:w-full xl:h-[55vh] transform transition-transform duration-300 ease-in-out group-active:scale-110 group-hover:scale-105"
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

            <div className=" md:h-[100%] md:hidden  xs-min:landscape:h-[104vh]  border-b-2 border-orange-400 flex flex-col rounded-sm w-full xl:h-[55vh] relative overflow-hidden group cursor-pointer">
              {/* <!-- Fundo do Card (Imagem) --> */}
              <img
                src={makeup}
                alt="Imagem do Card"
                className="  md:object-center md:object-fill md:w-full  md:h-[100%]  xl:h-[55vh]  xs-min:object-cover xl:object-cover xs-min:h-[100%] w-full transform transition-transform duration-300 ease-in-out group-active:scale-110 group-hover:scale-105"
              />

              {/* <!-- Makeup Conteúdo do Card --> */}
              <div className="relative xs-min:-top-20 xl:-top-24 pl-4">
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
