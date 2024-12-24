import { motion } from "framer-motion";
import pessoa from "../../assets/pessoa.png";
import pessoa0 from "../../assets/salao/10869.jpg";
import pessoa1 from "../../assets/salao/pessoa10.jpg";
import pessoa2 from "../../assets/salao/pessoa12.jpg";
const Equipa = () => {
  return (
    <div>

      <div className="mb-16 xl:backdrop-brightness-75 portrait:tablet:bg-[url('./assets/fundo-p.jpg')] landscape:tablet:bg-[url('./assets/fundo-p.jpg')] xl:bg-[url('./assets/fundo-p.jpg')] xs-min:bg-slate-100 bg-cover bg-center bg-no-repeat    portrait:tablet:bg-red-200 landscape:tablet:bg-violet-800 md:pr-16 md:pl-16 w-full  landscape:h-auto  xs-min:max-h-auto xs-min:pl-4 xs-min:pr-4  md:h-auto  sm:h-auto    overflow-hidden pt-0  xl:h-[33rem] bg-zinc-80 xl:pl-28 xl:pr-28">
        <div className="flex flex-col justify-center gap-1">
          <motion.h5
            className="md:text-3xl xs-min:text-[1.08rem]  font-bold xl:text-[1.8rem] 2xl:text-[2rem] text-start text-transparent bg-clip-text bg-gradient-to-r from-amber-500 from-[5%] to-[20%] to-red-500"
            initial={{ opacity: 0, x: -100 }} // Inicializa o elemento fora da tela à esquerda
            whileInView={{ opacity: 1, x: 0 }} // Quando estiver na tela, o elemento vai se mover para a posição original
            transition={{ duration: 1 }} // Define o tempo da animação
          >
            03.Nossa Equipe
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
         
         <div className="xl:shadow-2xl bg-white xs-min:flex-row  md:flex md:flex-col sm:max-h-[30rem] xs-min:rounded-md xs-min:h-[15rem] xl:h-[27rem]  md:h-[24rem] md:max-h-[30rem]   border-b-2  border-orange-400   flex flex-col rounded-sm w-full  xl:relative overflow-hidden group cursor-pointer">
            {/* <!-- Fundo do Card (Imagem) --> */}

            <div className=" xl:m-0 xs-min:m-4  ">
              <img
                src={pessoa0}
                alt="Imagem do Card"
                className="xl:rounded-none xs-min:rounded-2xl portrait:tablet:h-[26.4rem] landscape:tablet:h-[20.4rem] sm:w-full xs-min:object-cover  sm:object-fill sm:h-full xs-min:w-full xs-min:max-w-[100%] xs-min:max-h-[18rem] md:h-[19rem] md:object-cover md:object-center  md:w-full xs-min:object-center xl:object-cover xl:object-right w-full xl:h-[27rem] xs-min:h-[12.5rem] transform transition-transform duration-300 ease-in-out group-active:scale-110 group-hover:scale-105"
              />
            </div>

            {/* <!-- Cabeleiro Conteúdo do Card --> xs-min:relative  xs-min:-top-20 */}

            <div className=" xs-min:pt-20  md:top-0    xl:relative  xl:top-10 pl-4 sm:pt-0 md:pt-0 xl:pt-0">
              <h6 className=" md:text-[1.7rem] xs-min:text-xl xl:text-[1.8rem] text-start text-transparent bg-clip-text bg-gradient-to-r from-amber-500 from-[5%] to-[20%] to-red-500 font-bold">
              Ana Lopes
              </h6>
              <p className=" md:text-black md:text-xl xs-min:text-black xs-min:text-sm xl:text-[15px] text-white">
              Cabeleiria Profissional
              </p>
            </div>
          </div>
          {/* Manicure */}
         
          <div className="xl:shadow-2xl bg-white xs-min:flex-row  md:flex md:flex-col sm:max-h-[30rem] xs-min:rounded-md xs-min:h-[15rem] xl:h-[27rem]  md:h-[24rem] md:max-h-[30rem]   border-b-2  border-orange-400   flex flex-col rounded-sm w-full  xl:relative overflow-hidden group cursor-pointer">
            {/* <!-- Fundo do Card (Imagem) --> */}

            <div className=" xl:m-0 xs-min:m-4  ">
              <img
                src={pessoa1}
                alt="Imagem do Card"
                className="xl:rounded-none xs-min:object-top xs-min:w-[22rem] xs-min:object-cover  xl:object-top xs-min:rounded-2xl portrait:tablet:h-[26.4rem] landscape:tablet:h-[20.4rem] sm:w-full   sm:object-fill sm:h-full xs-min:max-w-[100%] xs-min:max-h-[18rem] md:h-full md:object-cover md:object-center  md:w-full xs-min:object-center xl:object-cover w-full xl:h-[27rem] xs-min:h-[12.5rem] transform transition-transform duration-300 ease-in-out group-active:scale-110 group-hover:scale-105"
              />
            </div>

            {/* <!-- Cabeleiro Conteúdo do Card --> xs-min:relative  xs-min:-top-20 */}

            <div className=" xs-min:pt-20  md:top-0    xl:relative  xl:top-10 pl-4 sm:pt-0 md:pt-0 xl:pt-0">
              <h6 className=" md:text-[1.7rem] xs-min:text-xl xl:text-[1.8rem] text-start text-transparent bg-clip-text bg-gradient-to-r from-amber-500 from-[5%] to-[20%] to-red-500 font-bold">
              Gemyma Bastos
              </h6>
              <p className=" md:text-black md:text-xl xs-min:text-black xs-min:text-sm xl:text-[15px] text-white">
              Makeup Profissional
              </p>
            </div>
          </div>

          {/* Makeup */}
          <div className="xl:shadow-2xl bg-white xs-min:flex-row  md:flex md:flex-col sm:max-h-[30rem] xs-min:rounded-md xs-min:h-[15rem] xl:h-[27rem]  md:h-[24rem] md:max-h-[30rem]   border-b-2  border-orange-400   flex flex-col rounded-sm w-full  xl:relative overflow-hidden group cursor-pointer">
            {/* <!-- Fundo do Card (Imagem) --> */}

            <div className=" xl:m-0 xs-min:m-4  ">
              <img
                src={pessoa2}
                alt="Imagem do Card"
                className="xl:rounded-none xs-min:object-top xs-min:w-[22rem] xs-min:object-cover  xl:object-top xs-min:rounded-2xl portrait:tablet:h-[26.4rem] landscape:tablet:h-[20.4rem] sm:w-full   sm:object-fill sm:h-full xs-min:max-w-[100%] xs-min:max-h-[18rem] md:h-full md:object-cover md:object-center  md:w-full xs-min:object-center xl:object-cover w-full xl:h-[27rem] xs-min:h-[12.5rem] transform transition-transform duration-300 ease-in-out group-active:scale-110 group-hover:scale-105"

              />
            </div>

            {/* <!-- Cabeleiro Conteúdo do Card --> xs-min:relative  xs-min:-top-20 */}

            <div className=" xs-min:pt-20  md:top-0    xl:relative  xl:top-10 pl-4 sm:pt-0 md:pt-0 xl:pt-0">
              <h6 className=" md:text-[1.7rem] xs-min:text-xl xl:text-[1.8rem] text-start text-transparent bg-clip-text bg-gradient-to-r from-amber-500 from-[5%] to-[20%] to-red-500 font-bold">
              Teresa Kaluvi
              </h6>
              <p className=" md:text-black md:text-xl xs-min:text-black xs-min:text-sm xl:text-[15px] text-white">
              Manicure e Pedicure
              </p>
            </div>
          </div>
          {/* Penicure */}
          <div className="xl:shadow-2xl bg-white xs-min:flex-row  md:flex md:flex-col sm:max-h-[30rem] xs-min:rounded-md xs-min:h-[15rem] xl:h-[27rem]  md:h-[24rem] md:max-h-[30rem]   border-b-2  border-orange-400   flex flex-col rounded-sm w-full  xl:relative overflow-hidden group cursor-pointer">
            {/* <!-- Fundo do Card (Imagem) --> */}

            <div className=" xl:m-0 xs-min:m-4  ">
              <img
                src={pessoa}
                alt="Imagem do Card"
                className="xl:rounded-none xs-min:object-top xs-min:w-[22rem] xs-min:object-cover  xl:object-top xs-min:rounded-2xl portrait:tablet:h-[26.4rem] landscape:tablet:h-[20.4rem] sm:w-full   sm:object-fill sm:h-full xs-min:max-w-[100%] xs-min:max-h-[18rem] md:h-full md:object-cover md:object-center  md:w-full xs-min:object-center xl:object-cover w-full xl:h-[27rem] xs-min:h-[12.5rem] transform transition-transform duration-300 ease-in-out group-active:scale-110 group-hover:scale-105"

              />
            </div>

            {/* <!-- Cabeleiro Conteúdo do Card --> xs-min:relative  xs-min:-top-20 */}

            <div className=" xs-min:pt-20  md:top-0    xl:relative  xl:top-10 pl-4 sm:pt-0 md:pt-0 xl:pt-0">
              <h6 className=" md:text-[1.7rem] xs-min:text-xl xl:text-[1.8rem] text-start text-transparent bg-clip-text bg-gradient-to-r from-amber-500 from-[5%] to-[20%] to-red-500 font-bold">
              Helena Jorge
              </h6>
              <p className=" md:text-black md:text-xl xs-min:text-black xs-min:text-sm xl:text-[15px] text-white">
              Cabeleiria Junior
              </p>
            </div>
          </div>
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default Equipa;
