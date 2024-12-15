import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Avatar } from "antd";
import cabelo from './assets/cabelo-B3.jpg'
import unhas from './assets/unhas-Cy.jpg'
import makeup from './assets/makeup.png'
import avatar1 from './assets/picon.png'
import avatar2 from './assets/picon2.png'
import pessoa from './assets/pessoa.png'

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

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
  const scrolltrolador = useRef(null);
  const [pscrollLeft, setScrollleft] = useState(false);
  const [pscrollright, setScrollright] = useState(true);

  //funcao para actualizar os  estados do butao
  function updateButton() {
    const scrollcontainer = scrolltrolador.current;
    if (scrollcontainer) {
      setScrollleft(scrollcontainer.scrollLeft > 0);
      setScrollright(
        scrollcontainer.scrollLeft + scrollcontainer.offsetWidth <
          scrollcontainer.scrollWidth
      );
    }
  }

  //funcao para actualizar os  estados do butao
  function scroll(direction) {
    const scrollcontainer = scrolltrolador.current;
    if (scrollcontainer) {
      const scrollcont = direction == "left" ? -200 : 200;

      scrollcontainer.scrollBy({ left: scrollcont, behavior: "smooth" });
      setTimeout(updateButton, 300);
    }
  }

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

        {/* Bem-Vindo */}
        <div className="xs-min:pl-4 xs-min:pr-4 xl:pl-28 xl:pr-28 mb-5">
          <div className="flex flex-col justify-center gap-1 pb-4">
            <motion.h5
              className="md:text-3xl xs-min:text-md font-bold xl:text-[1.8rem] 2xl:text-[2rem] text-start text-transparent bg-clip-text bg-gradient-to-r from-amber-500 from-[5%] to-[20%] to-red-500"
              initial={{ opacity: 0, x: -100 }} // Inicializa o elemento fora da tela à esquerda
              whileInView={{ opacity: 1, x: 0 }} // Quando estiver na tela, o elemento vai se mover para a posição original
              transition={{ duration: 1 }} // Define o tempo da animação
            >
              01.Bem-Vindo
            </motion.h5>
            <hr className=" md:border-t-4 md:w-44 xs-min:w-28 xl:w-44 bg-none xs-min:border-t-4 xl:border-t-4 border-orange-400" />
          </div>

          <p className="md:text-[1.7rem] xs-min:text-[1.08rem]  2xl:text-[1.5rem] xl:text-[1.5rem] text-justify">
            Bem-vindo ao Salão Espelho Meu, onde sua beleza encontra o cuidado
            que merece! No salão Espelho Meu, há 4 anos, transformamos confiança
            e estilo. Somos apaixonados por realçar a sua beleza e oferecer
            experiências únicas em manicure, pedicure, maquiagem e cuidados com
            os cabelos. Nossa missão é proporcionar um ambiente acolhedor, onde
            cada detalhe é pensado para fazer você se sentir especial e destacar
            o que há de melhor em você.
          </p>
        </div>

        {/* Grid de Imagens */}
        <div className="overflow-hidden md:mb-4 xs-min:pl-4 xs-min:pr-4 md:h-auto overflow-x-auto w-full pt-0 h-[24rem] xl:pl-28 xl:pr-28 scroll-smooth">
          <div
            ref={scrolltrolador}
            onScroll={updateButton}
            className=" md:bg-red-400 md:p-2  md:grid md:grid-flow-col md:gap-2 md:place-items-center xs-min:grid  xs-min:grid-flow-col md:auto-cols-[350px] xs-min:auto-cols-[250px] xs-min:gap-2 xs-min:pb-4
                  xl:grid overflow-y-hidden overflow-x-hidden xl:auto-cols-[350px] xl:grid-flow-col xl:place-items-center xl:gap-7 xl:pb-4"
          >
            <div className="border-[2px] border-amber-400 bg-[url('./assets/Tranca1.png')] bg-cover bg-center bg-no-repeat -min:w-80 md:w-[40vh]  md:h-[25rem] xs-min:h-[20rem] xl:w-[60vh] xl:h-[20rem] bg-zinc-900">
              01
            </div>
            <div className="border-[2px] border-amber-400 bg-[url('./assets/Tranca2.png')] bg-cover bg-center bg-no-repeat md:w-[40vh]  md:h-[25rem] xl:w-[60vh] xl:h-[20rem] bg-red-500">
              02
            </div>
            <div className="border-[2px] border-amber-400 bg-[url('./assets/Tranca3.png')] bg-cover bg-center bg-no-repeat  md:w-[40vh]  md:h-[25rem] xl:w-[60vh] xl:h-[20rem] bg-blue-500">
              03
            </div>
            <div className="border-[2px] border-amber-400 xl:w-[60vh] xl:h-[20rem] bg-white md:w-[40vh]  md:h-[25rem]">
              04
            </div>
            <div className="border-[2px] border-amber-400 xl:w-[60vh] xl:h-[20rem] bg-white md:w-[40vh]  md:h-[25rem]">
              05
            </div>
          </div>

          <button
            onClick={() => scroll("left")}
            disabled={!pscrollLeft}
            className="md:mt-2 rounded-[50%] p-2 bg-gradient-to-r from-amber-500 from-[5%] to-[20%] to-red-500 hover:bg-violet-500 disabled:cursor-not-allowed mr-1"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!pscrollright}
            className=" md:mb-2 rounded-[50%] p-2 bg-gradient-to-r from-amber-500 from-[5%] to-[20%] to-red-500 hover:bg-violet-500 disabled:cursor-not-allowed"
          >
            <FaArrowRight />
          </button>
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
