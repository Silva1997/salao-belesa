import { motion } from "framer-motion";
import cabelo from "../../assets/girl.jpg";
import unhas from "../../assets/unhas-Cy.jpg";
import makeup from "./makeup1.jpg";
import penicure from '../../assets/salao/manicure-p1.jpg'

export default function Sobre() {
  return (
    <div>
      <div className="  xs-min:bg-slate-100  xl:bg-white    portrait:tablet:bg-red-200 landscape:tablet:bg-violet-800 md:pr-16 md:pl-16 w-full  landscape:h-auto  xs-min:max-h-auto xs-min:pl-4 xs-min:pr-4  md:h-auto  sm:h-auto    overflow-hidden pt-0  xl:h-[33rem] bg-zinc-80 xl:pl-28 xl:pr-28">
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
          sm:auto-cols-[200px]  md:gap-4 xs-min:gap-6  
          md:auto-cols-[200px]  md:grid-rows-1 xs-min:grid-cols-1 
          md:grid-cols-2 xs-min:grid-rows-auto xl:grid-rows-auto   
          xl:grid-cols-4 xl:auto-cols-[200px] xl:gap-4 pt-5 pb-5"
        >
          <div className=" xl:shadow-2xl bg-white xs-min:flex-row  md:flex md:flex-col sm:max-h-[30rem] xs-min:rounded-md xs-min:h-[15rem] xl:h-[27rem]  md:h-[24rem] md:max-h-[30rem]   border-b-2  border-orange-400   flex flex-col rounded-sm w-full  xl:relative overflow-hidden group cursor-pointer">
            {/* <!-- Fundo do Card (Imagem) --> */}

            <div className=" xl:m-0 xs-min:m-4  ">
              <img
                src={'https://i.imgur.com/huwax6o.jpeg'}
                alt="Imagem do Card"
                className="  xs-min:w-[28rem] xl:rounded-none xs-min:rounded-2xl portrait:tablet:h-[26.4rem] landscape:tablet:h-[20.4rem] sm:w-full sm:object-cover sm:h-full xs-min:max-w-[100%] xs-min:max-h-[18rem] md:h-[19rem] md:object-cover md:object-center  md:w-[100%] xs-min:object-cover xs-min:object-center xl:object-cover w-full xl:h-[27rem] xs-min:h-[12.5rem] transform transition-transform duration-300 ease-in-out group-active:scale-110 group-hover:scale-105"
              />
            </div>

  
      

      
            {/* <!-- Cabeleiro Conteúdo do Card --> xs-min:relative  xs-min:-top-20 */}

            <div className="  md:top-0 sm:pt-0 md:pt-0 xl:pt-0 xs-min:pt-20    xl:relative  xl:top-10 pl-4">
              <h6 className=" md:text-[1.7rem] xs-min:text-xl xl:text-[1.8rem] text-start text-transparent bg-clip-text bg-gradient-to-r from-amber-500 from-[5%] to-[20%] to-red-500 font-bold">
                Cabeleiro
              </h6>
              <p className=" md:text-black md:text-xl xs-min:text-black xs-min:text-sm xl:text-[15px] text-white">
                Transforme seu visual, realce sua beleza.
              </p>
            </div>
          </div>

          {/* Manicure */}
          <div className="xl:shadow-2xl  bg-white  xs-min:flex-row md:flex md:flex-col sm:max-h-[30rem] xs-min:rounded-md xs-min:h-[15rem] xl:h-[27rem]  md:h-[24rem] md:max-h-[30rem]   border-b-2  border-orange-400   flex flex-col rounded-sm w-full  xl:relative overflow-hidden group cursor-pointer">
            {/* <!-- Fundo do Card (Imagem) --> */}

            <div className=" xl:m-0 xs-min:m-4  ">
              <img
                src={unhas}
                alt="Imagem do Card"
                className="xs-min:w-[28rem]  xl:rounded-none xs-min:rounded-2xl portrait:tablet:h-[26.4rem] landscape:tablet:h-[20.4rem] sm:w-full xs-min:object-cover  sm:object-fill sm:h-full xs-min:max-w-[100%] xs-min:max-h-[18rem] md:h-[19rem] md:object-cover md:object-center  md:w-full xs-min:object-center xl:object-cover w-full xl:h-[27rem] xs-min:h-[12.5rem] transform transition-transform duration-300 ease-in-out group-active:scale-110 group-hover:scale-105"

              />
            </div>
      
            {/* <!-- Cabeleiro Conteúdo do Card --> xs-min:relative  xs-min:-top-20 */}

            <div className=" sm:pt-0 md:pt-0 xl:pt-0  md:top-0  xs-min:pt-20   xl:relative  xl:top-10 pl-4">
              <h6 className=" md:text-[1.7rem] xs-min:text-xl xl:text-[1.8rem] text-start text-transparent bg-clip-text bg-gradient-to-r from-amber-500 from-[5%] to-[20%] to-red-500 font-bold">
                Manicure
              </h6>
              <p className=" md:text-black md:text-xl xs-min:text-black xs-min:text-sm xl:text-[15px] text-white">
              Unhas impecáveis, confiança inabalável.
              </p>
            </div>
          </div>

      {/* Makeup */}
      <div className=" xl:shadow-2xl bg-white  xs-min:flex-row md:flex md:flex-col sm:max-h-[30rem] xs-min:rounded-md xs-min:h-[15rem] xl:h-[27rem]  md:h-[24rem] md:max-h-[30rem]   border-b-2  border-orange-400   flex flex-col rounded-sm w-full  xl:relative overflow-hidden group cursor-pointer">
            {/* <!-- Fundo do Card (Imagem) --> */}

            <div className=" xl:m-0 xs-min:m-4  ">
              <img
                src={makeup}
                alt="Imagem do Card"
                className=" xs-min:w-[28rem] xl:rounded-none xs-min:rounded-2xl portrait:tablet:h-[26.4rem] landscape:tablet:h-[20.4rem] sm:w-full xs-min:object-cover  sm:object-fill sm:h-full xs-min:max-w-[100%] xs-min:max-h-[18rem] md:h-[19rem] md:object-cover md:object-center  md:w-full xs-min:object-center xl:object-cover w-full xl:h-[27rem] xs-min:h-[12.5rem] transform transition-transform duration-300 ease-in-out group-active:scale-110 group-hover:scale-105"
              />
            </div>
      
            {/* <!-- Cabeleiro Conteúdo do Card --> xs-min:relative  xs-min:-top-20 */}

            <div className=" sm:pt-0 md:pt-0 xl:pt-0  md:top-0  xs-min:pt-20   xl:relative  xl:top-10 pl-4">
              <h6 className=" md:text-[1.7rem] xs-min:text-xl xl:text-[1.8rem] text-start text-transparent bg-clip-text bg-gradient-to-r from-amber-500 from-[5%] to-[20%] to-red-500 font-bold">
                Makeup
              </h6>
              <p className=" md:text-black md:text-xl xs-min:text-black xs-min:text-sm xl:text-[15px] text-white">
              Belesa impecáveis, confiança inabalável.
              </p>
            </div>
          </div>
      {/* Penicure */}
      

      <div className=" xl:shadow-2xl bg-white  xs-min:flex-row md:flex md:flex-col sm:max-h-[30rem] xs-min:rounded-md xs-min:h-[15rem] xl:h-[27rem]  md:h-[24rem] md:max-h-[30rem]   border-b-2  border-orange-400   flex flex-col rounded-sm w-full  xl:relative overflow-hidden group cursor-pointer">
            {/* <!-- Fundo do Card (Imagem) --> */}

            <div className=" xl:m-0 xs-min:m-4  ">
              <img
                src={penicure}
                alt="Imagem do Card"
                className=" xs-min:w-[28rem] xl:rounded-none xs-min:rounded-2xl portrait:tablet:h-[26.4rem] landscape:tablet:h-[20.4rem] sm:w-full xs-min:object-cover  sm:object-fill sm:h-full xs-min:max-w-[100%] xs-min:max-h-[18rem] md:h-[19rem] md:object-cover md:object-center  md:w-full xs-min:object-center xl:object-cover w-full xl:h-[27rem] xs-min:h-[12.5rem] transform transition-transform duration-300 ease-in-out group-active:scale-110 group-hover:scale-105"
              />
            </div>
      
            {/* <!-- Cabeleiro Conteúdo do Card --> xs-min:relative  xs-min:-top-20 */}

            <div className=" sm:pt-0 md:pt-0 xl:pt-0  md:top-0  xs-min:pt-20   xl:relative  xl:top-10 pl-4">
              <h6 className=" md:text-[1.7rem] xs-min:text-xl xl:text-[1.8rem] text-start text-transparent bg-clip-text bg-gradient-to-r from-amber-500 from-[5%] to-[20%] to-red-500 font-bold">
                Penicure
              </h6>
              <p className=" md:text-black md:text-xl xs-min:text-black xs-min:text-sm xl:text-[15px] text-white">
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


function H (){
  return(

<>
    {/* Penicure */}
    <div className="bg-white md:flex md:flex-col sm:max-h-[30rem] xs-min:rounded-md xs-min:h-[20rem] xl:h-[27rem]  md:h-[30rem] md:max-h-[30rem]   border-b-2  border-orange-400   flex flex-col rounded-sm w-full xl:bg-black  xl:relative overflow-hidden group cursor-pointer">
            {/* <!-- Fundo do Card (Imagem) --> */}

            <div className="xs-min:m-4 md:m-0  ">
              <img
                src={unhas}
                alt="Imagem do Card"
                className="md:rounded-none xs-min:rounded-2xl portrait:tablet:h-[26.4rem] landscape:tablet:h-[30.4rem] sm:w-full  sm:object-fill sm:h-full xs-min:max-w-[100%] xs-min:max-h-[14rem] md:h-full md:object-cover md:object-center  md:w-[100%] xs-min:object-cover xs-min:object-center xl:object-fill w-full xl:h-[27rem] xs-min:h-[100%] transform transition-transform duration-300 ease-in-out group-active:scale-110 group-hover:scale-105"
              />
            </div>

            {/* <!-- Manicure Conteúdo do Card -->  xs-min:relative xs-min:-top-20 */}

            <div className=" md:bg-zinc-800 md:top-0    xl:relative  xl:-top-24 pl-4">
              <h6 className=" md:text-[1.7rem] xs-min:text-xl xl:text-[1.8rem] text-start text-transparent bg-clip-text bg-gradient-to-r from-amber-500 from-[5%] to-[20%] to-red-500 font-bold">
                Pedicure
              </h6>
              <p className=" md:text-xl xs-min:text-black xs-min:text-sm xl:text-xl text-white">
                Unhas impecáveis, confiança inabalável.
              </p>
            </div>
          </div>
          {/* Manekup */}

     
          <div className="bg-white md:flex md:flex-col sm:max-h-[30rem] xs-min:rounded-md xs-min:h-[20rem] xl:h-[27rem]  md:h-[30rem] md:max-h-[30rem]   border-b-2  border-orange-400   flex flex-col rounded-sm w-full xl:bg-black  xl:relative overflow-hidden group cursor-pointer">
            {/* <!-- Fundo do Card (Imagem) --> */}

            <div className="m-4  ">
              <img
                 src={makeup}
                alt="Imagem do Card"
                className=" xs-min:rounded-2xl portrait:tablet:h-[26.4rem] landscape:tablet:h-[26.4rem] sm:w-full  sm:object-fill sm:h-full xs-min:max-w-[100%] xs-min:max-h-[14rem] md:h-full  md:object-cover md:object-center  md:w-[100%] xs-min:object-cover xs-min:object-center xl:object-fill w-full xl:h-[27rem] xs-min:h-[100%] transform transition-transform duration-300 ease-in-out group-active:scale-110 group-hover:scale-105"
              />
            </div>

            {/* <!-- Manicure Conteúdo do Card -->  xs-min:relative xs-min:-top-20 */}

            <div className=" md:bg-zinc-800 md:top-0    xl:relative  xl:-top-24 pl-4">
              <h6 className=" md:text-[1.7rem] xs-min:text-xl xl:text-[1.8rem] text-start text-transparent bg-clip-text bg-gradient-to-r from-amber-500 from-[5%] to-[20%] to-red-500 font-bold">
              Makeup
              </h6>
              <p className=" md:text-xl xs-min:text-black xs-min:text-sm xl:text-xl text-white">
              Belesa impecáveis, confiança inabalável.
              </p>
            </div>
          </div>
</>
    
  )
}