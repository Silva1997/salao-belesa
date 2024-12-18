// import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Avatar } from "antd";
// import cabelo from './assets/cabelo-B3.jpg'
// import unhas from './assets/unhas-Cy.jpg'
// import makeup from './assets/makeup.png'
import avatar1 from './assets/picon.png'
import avatar2 from './assets/picon2.png'
import pessoa from './assets/pessoa.png'



// const BemVindo = () => {
//   return (
//     <div className="xs-min:pl-4 xs-min:pr-4 xl:pl-28 xl:pr-28 pb-5">
//       <div className="flex flex-col justify-center gap-1 pb-4">
//         <motion.h5
//           className="xs-min:text-md font-bold xl:text-[1.8rem] 2xl:text-[2rem] text-start text-transparent bg-clip-text bg-gradient-to-r from-amber-500 from-[5%] to-[20%] to-red-500"
//           initial={{ opacity: 0, x: -100 }} // Inicializa o elemento fora da tela à esquerda
//           whileInView={{ opacity: 1, x: 0 }} // Quando estiver na tela, o elemento vai se mover para a posição original
//           transition={{ duration: 1 }} // Define o tempo da animação
//         >
//           01.Bem-Vindo
//         </motion.h5>
//         <hr className="xs-min:w-28 xl:w-44 bg-none xs-min:border-t-2 xl:border-t-4 border-orange-400" />
//       </div>

//       <p className="xs-min:text-md sm:text-[1.2rem] md:text-[1.3rem] xl:text-[1.5rem] 2xl:text-[1.5rem] text-justify">
//         Bem-vindo ao Salão Espelho Meu, onde sua beleza encontra o cuidado que
//         merece! No Salão Espelho Meu, há 4 anos, transformamos confiança e
//         estilo. Somos apaixonados por realçar a sua beleza e oferecer
//         experiências únicas em manicure, pedicure, maquiagem e cuidados com os
//         cabelos. Nossa missão é proporcionar um ambiente acolhedor, onde cada
//         detalhe é pensado para fazer você se sentir especial e destacar o que há
//         de melhor em você.
//       </p>
//     </div>
//   );
// };

export default function Rever() {


  return (
    <>
      <div className="overflow-hidden bg-white">
        {/* Escolha pela Marca */}
        <div className="xs-min:pl-4 xs-min:pr-4 xl:pl-28 xl:pr-28 pb-5">
          <h6 className="text-center xs-min:text-[1.08rem] font-sans pb-2">Escolha pela marca</h6>
          <div className="bg-[#dae3e380] flex flex-row gap-2 justify-center items-center">
            <a href="/">
              <Avatar className=" xs-min:w-11 xs-min:h-11 xl:w-auto xl:h-[90px]" src={avatar1} alt="avatar produto" />
            </a>
            <a href="/">
              <img
                className="object-center object-contain w-full xs-min:h-14 xl:h-[90px]"
                src={avatar2}
                alt="avatar produto 1"
              />
            </a>
          </div>
        </div>

    

      

        {/* Sobre Nós */}
        <div className=" xs-min:pl-4 xs-min:pr-4 xs-min:h-auto md:h-[42rem] xl:h-[28rem] overflow-hidden w-full xl:pl-28 xl:pr-28">
          <div className="flex flex-col justify-center xl:gap-1 ">
            <motion.h5
              className=" md:text-2xl xs-min:text-[1.08rem] font-bold xl:text-[1.8rem] 2xl:text-[2rem] text-start text-transparent bg-clip-text bg-gradient-to-r from-amber-500 from-[5%] to-[20%] to-red-500"
              initial={{ opacity: 0, x: -100 }} // Inicializa o elemento fora da tela à esquerda
              whileInView={{ opacity: 1, x: 0 }} // Quando estiver na tela, o elemento vai se mover para a posição original
              transition={{ duration: 1 }} // Define o tempo da animação
            >
              02.Sobre Nós
            </motion.h5>
            <hr className="xs-min:w-28 md:w-32 xl:w-44 bg-none border-t-4 border-t-orange-400" />
          </div>


          <div className="grid md:bg-red-400   md:pt-0 md:auto-rows-auto   place-items-center xs-min:auto-rows-auto grid-cols-2 auto-cols-auto xl:gap-1 xs-min:gap-1 ">
           
            <div className="xs-min:h-auto md:h-auto w-full xl:h-[24rem]">
              <p className=" md:pt-0 xs-min:text-[1.11rem] md:text-[1.7rem] xs-min:-tracking-[1px] text-black xl:pt-2 text-justify lg:pt-22 block xl:text-[1.56rem] ms-0 me-0">
                No coração de Malanje, Espelho Meu é um salão que brilha não só
                pelo luxo, mas pelo talento incrível da nossa equipa. Oferecemos
                serviços que vão desde cortes clássicos até penteados ousados,
                sempre com o toque personalizado que só o Espelho Meu pode
                oferecer.
                <br /> Venha conhecer o lugar onde cada cliente é tratado como
                uma obra de arte, refletindo a verdadeira essência da beleza.
                Afinal, quem é a mais bela do reino?
              </p>
            </div>

            <div className="w-full xs-min:p-1  md:h-auto  xs-min:h-auto xl:h-[24rem]">
              <div className="md:bg-white flex xs-min:pt-4  xs-min:justify-center xs-min:items-center md:relative  md:left-0 md:top-0 xl:top-0  w-full xl:pt-5  xs-min:flex-col md:flex-col xl:flex-row xs-min:gap-6  md:gap-1 xl:gap-1 xl:relative z-0">
              
                <div className="xs-min:w-40 xs-min:h-36 bg-no-repeat bg-cover bg-center bg-[url('./assets/icon1.jpg')] xl:relative md:relative md:top-8 rounded-md md:w-40 z-1 xl:-top-2 md:-left-20 xl:left-60 xl:w-full xl:h-[10rem] bg-violet-800">
                  <h6 className="text-center xs-min:text-sm relative top-[-28px] text-black">
                    Fé
                  </h6>
                </div>

                <div className="xs-min:w-40 xs-min:h-36 bg-no-repeat bg-cover bg-center bg-[url('./assets/icon2.png')]  xl:relative md:relative rounded-md z-2 md:w-40 md:top-14 xl:top-[184px] md:-left-20 xl:left-14 right-[60px] xl:w-full xl:h-[11rem] bg-slate-500">
                  <h6 className="text-center xs-min:text-sm xs-min:p-2 relative top-[-28px] text-black">
                    Foco
                  </h6>
                </div>

                <div className="xs-min:w-40 xs-min:h-36 bg-no-repeat bg-cover bg-center bg-[url('./assets/icon3.png')] xl:relative md:relative rounded-md z-3 md:w-40 md:-top-44 md:left-[6.1rem] xl:top-20 xl:-left-1 right-20 xl:w-full xl:h-[12rem] bg-neutral-500">
                  <h6 className="text-center xs-min:text-sm xs-min:p-2  relative top-[-28px] text-black">
                    Trabalho
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Serviços */}
    
        {/* Nossa equipa */}

        <div className="  xs-min:h-auto xs-min:landscape:h-[68rem] w-full xs-min:pl-4 xs-min:pr-4 md:h-auto  overflow-hidden pt-0  xl:h-[27rem] bg-zinc-100 xl:pl-28 xl:pr-28">
          <div className="flex flex-col justify-center  xs-min:gap-1 xl:gap-1">
            <motion.h5
              className=" md:text-2xl xs-min:text-[1.08rem]  font-bold xl:text-[1.8rem] 2xl:text-[2rem] text-start text-transparent bg-clip-text bg-gradient-to-r from-amber-500 from-[5%] to-[20%] to-red-500"
              initial={{ opacity: 0, x: -100 }} // Inicializa o elemento fora da tela à esquerda
              whileInView={{ opacity: 1, x: 0 }} // Quando estiver na tela, o elemento vai se mover para a posição original
              transition={{ duration: 1 }} // Define o tempo da animação
            >
              04.Nossa Equipe
            </motion.h5>
            <hr className=" md:mb-4 xs-min:w-28 xl:w-44 bg-none xs-min:border-t-4 xl:border-t-4 border-orange-400" />
          </div>
          {/*  */}
          <div className="grid  md:auto-rows-auto xs-min:auto-rows-auto overflow-hiddem   md:gap-2 md:grid-cols-3 md:auto-cols-[250px]  xs-min:grid-cols-2 xs-min:gap-2  xl:grid-cols-4 xl:gap-6 pt-5 pb-5">
           
            <div className=" xs-min:bg-white xs-min:landscape:h-[120vh] md:h-[50vh]  border-b-2 xs-min:h-[100%] border-orange-400 flex flex-col rounded-sm w-full xl:h-[55vh]   group cursor-pointer">
              {/* <!-- Fundo do Card (Imagem) --> */}

            <h6 className="text-black xs-min:text-[1.02rem] xl:text-[16.5px] font-semibold">
              {" "}
              Ana Silva
            </h6>
            <img
              className="xs-min:object-fill lg:cover md:object-cover sm:object-cover xl:object-cover w-full xs-min:h-[100%] xl:h-[130vh]"
              src={pessoa}
              alt="pessoa 1"
            />
            <p className="text-black xs-min:text-[1rem] xl:text-[16px]">Cabeleira Profissional</p>
              
            </div>

            <div className="xs-min:bg-white   xs-min:landscape:h-[120vh] md:h-[50vh] flex flex-col xs-min:h-[100%] border-b-2 border-orange-400 rounded-sm w-full xl:h-[55vh] relative overflow-hidden group cursor-pointer">
              {/* <!-- Fundo do Card (Imagem) --> */}
              <h6 className="text-black xs-min:text-[1.02rem] xl:text-[16.5px] font-semibold">
              {" "}
              Teresa Kaluvi
            </h6>
            <img
              className="xs-min:object-fill lg:cover md:object-cover sm:object-cover xl:object-cover w-full xs-min:h-[100%] xl:h-[130vh]"
              src={pessoa}
              alt="pessoa 1"
            />
            <p className="text-black xs-min:text-[1rem] xl:text-[16px]">Makeup Senior</p>
            </div>

            <div className="xs-min:bg-white    xs-min:landscape:h-[120vh] md:h-[50vh] xs-min:h-[100%] border-b-2 border-orange-400 flex flex-col  rounded-sm w-full xl:h-[55vh] relative overflow-hidden group cursor-pointer">
              {/* <!-- Fundo do Card (Imagem) --> */}
              <h6 className="text-black xs-min:text-[1.02rem] xl:text-[16.5px] font-semibold">
              {" "}
              Gemima Bastos
            </h6>
            <img
              className="xs-min:object-fill lg:cover md:object-cover sm:object-cover xl:object-cover w-full xs-min:h-[100%] xl:h-[130vh]"
              src={pessoa}
              alt="pessoa 1"
            />
            <p className="text-black xs-min:text-[1rem] xl:text-[16px]">Manicure Junior</p>
            </div>

            <div className="xs-min:bg-white md:hidden  xs-min:landscape:h-[120vh] md:h-[50vh] xs-min:h-[100%] border-b-2 border-orange-400 flex flex-col rounded-sm w-full xl:h-[55vh] relative overflow-hidden group cursor-pointer">
              {/* <!-- Fundo do Card (Imagem) --> */}
              <h6 className="text-black xs-min:text-[1.02rem] xl:text-[16.5px] font-semibold">
              {" "}
              Adelia Silva
            </h6>
            <img
              className="xs-min:object-fill lg:cover md:object-cover sm:object-cover xl:object-cover w-full xs-min:h-[100%] xl:h-[130vh]"
              src={pessoa}
              alt="pessoa 1"
            />
            <p className="text-black xs-min:text-[1rem] xl:text-[16px]">Pedicure Senior</p>
            </div>
          </div>

          {/*  */}
        </div>
      </div>
    </>
  );
}
