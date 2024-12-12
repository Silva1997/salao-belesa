import React,{useState,useRef} from "react";
import { motion } from "framer-motion";
import { Avatar} from "antd";


import {
  FaArrowRight,
  FaArrowLeft,

} from "react-icons/fa";

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
          <h6 className="text-center pb-2">Escolha pela marca</h6>
          <div className="bg-[#e9f8f8be] flex flex-row gap-2 justify-center items-center">
            <a href="/">
              <Avatar size={70} src="../src/assets/picon.png" alt="icon" />
            </a>
            <a href="/">
              <img
                className="object-center object-contain w-full h-[90px]"
                src="../src/assets/picon2.png"
                alt="icon1"
              />
            </a>
          </div>
        </div>

        {/* Bem-Vindo */}
        <div className="xs-min:pl-4 xs-min:pr-4 xl:pl-28 xl:pr-28 pb-5">
          <div className="flex flex-col justify-center gap-1 pb-4">
          <motion.h5
          className="xs-min:text-md font-bold xl:text-[1.8rem] 2xl:text-[2rem] text-start text-transparent bg-clip-text bg-gradient-to-r from-amber-500 from-[5%] to-[20%] to-red-500"
          initial={{ opacity: 0, x: -100 }} // Inicializa o elemento fora da tela à esquerda
          whileInView={{ opacity: 1, x: 0 }} // Quando estiver na tela, o elemento vai se mover para a posição original
          transition={{ duration: 1 }} // Define o tempo da animação
        >
          01.Bem-Vindo
        </motion.h5>
            <hr className="xs-min:w-28 xl:w-44 bg-none xs-min:border-t-2 xl:border-t-4 border-orange-400" />
          </div>

          <p className="xs-min:text-md 2xl:text-[1.5rem] xl:text-[1.5rem] text-justify">
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
        <div className="xs-min:pl-4 xs-min:pr-4 overflow-x-auto w-full pt-0 h-[24rem] xl:pl-28 xl:pr-28 scroll-smooth">
          <div
            ref={scrolltrolador}
            onScroll={updateButton}
            className="xs-min:grid xs-min:overflow-y-hidden xs-min:overflow-x-hidden xs-min:grid-flow-col xs-min:auto-cols-[250px] xs-min:gap-2 xs-min:pb-4
                  xl:grid xl:overflow-y-hidden xl:overflow-x-hidden xl:auto-cols-[350px] xl:grid-flow-col xl:place-items-center xl:gap-7 xl:pb-4"
          >
            <div className="border-[2px] border-amber-400 bg-[url('./assets/Tranca1.png')] bg-cover bg-center bg-no-repeat -min:w-80 xs-min:h-[20rem] xl:w-[60vh] xl:h-[20rem] bg-zinc-900">
              01
            </div>
            <div className="border-[2px] border-amber-400 bg-[url('./assets/Tranca2.png')] bg-cover bg-center bg-no-repeat xl:w-[60vh] xl:h-[20rem] bg-red-500">
              02
            </div>
            <div className="border-[2px] border-amber-400 bg-[url('./assets/Tranca3.png')] bg-cover bg-center bg-no-repeat xl:w-[60vh] xl:h-[20rem] bg-blue-500">
              03
            </div>
            <div className="border-[2px] border-amber-400 xl:w-[60vh] xl:h-[20rem] bg-white">
              04
            </div>
            <div className="border-[2px] border-amber-400 xl:w-[60vh] xl:h-[20rem] bg-white">
              05
            </div>
          </div>

          <button
            onClick={() => scroll("left")}
            disabled={!pscrollLeft}
            className="rounded-[50%] p-2 bg-gradient-to-r from-amber-500 from-[5%] to-[20%] to-red-500 hover:bg-violet-500 disabled:cursor-not-allowed mr-1"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!pscrollright}
            className="rounded-[50%] p-2 bg-gradient-to-r from-amber-500 from-[5%] to-[20%] to-red-500 hover:bg-violet-500 disabled:cursor-not-allowed"
          >
            <FaArrowRight />
          </button>
        </div>

        {/* Sobre Nós */}
        <div className="xs-min:pl-4 xs-min:pr-4 overflow-hidden w-full xl:pl-28 xl:pr-28">
          <div className="flex flex-col justify-center gap-1">
            <h6 className="font-bold xs-min:text-md xl:text-[1.8rem] text-start text-transparent bg-clip-text bg-gradient-to-r from-amber-500 from-[5%] to-[20%] to-red-500">
              03.Sobre Nós
            </h6>
            <hr className="xs-min:w-28 xl:w-44 bg-none border-t-4 border-t-orange-400" />
          </div>
          <div className="grid place-items-center grid-cols-2 auto-cols-auto gap-1">
            <div className="xs-min:h-[22rem] w-full xl:h-[24rem]">
              <p className="xs-min:text-sm text-black text-justify pt-22 block xl:text-[1.5rem] ms-0 me-0">
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
            <div className="w-full xs-min:h-[18rem] xl:h-[24rem]">
              <div className="flex w-full pt-0 flex-row gap-1 relative z-0">
                <div className="xs-min:w-full xs-min:h-[10rem] bg-no-repeat bg-cover bg-center bg-[url('./assets/icon1.jpg')] relative rounded-md z-1 xl:-top-2 xl:left-60 xl:w-full xl:h-[10rem] bg-violet-800">
                  <h6 className="text-center relative top-[-28px] text-black">
                    Fé
                  </h6>
                </div>
                <div className="xs-min:w-full xs-min:h-[10rem] bg-no-repeat bg-cover bg-center bg-[url('./assets/icon2.png')] relative rounded-md z-2 xl:top-[184px] xl:left-14 right-[60px] xl:w-full xl:h-[11rem] bg-slate-500">
                  <h6 className="text-center relative top-[-28px] text-black">
                    Foco
                  </h6>
                </div>
                <div className="xs-min:w-full xs-min:h-[10rem] bg-no-repeat bg-cover bg-center bg-[url('./assets/icon3.png')] relative rounded-md z-3 xl:top-20 xl:-left-1 right-20 xl:w-full xl:h-[12rem] bg-neutral-500">
                  <h6 className="text-center relative top-[-28px] text-black">
                    Trabalho
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Serviços */}
        <div className="w-full overflow-hidden h-[26rem] bg-zinc-100 xl:pl-28 xl:pr-28">
          <div className="flex flex-col justify-center gap-1">
            <h6 className="font-bold text-[1.8rem] text-start text-transparent bg-clip-text bg-gradient-to-r from-amber-500 from-[5%] to-[20%] to-red-500">
              04.Serviços
            </h6>
            <hr className="w-44 bg-none border-t-4 border-t-orange-400" />
          </div>
          <div className="grid xs-min:grid-cols-2 xl:grid-cols-4 gap-6 pt-10 pb-16">
            <div className="w-full h-[15rem] bg-white shadow-lg">
              <img
                className="object-center object-contain w-full h-[12rem]"
                src="../src/assets/picon.png"
                alt="service1"
              />
              <h6 className="text-center text-xl">Manicure</h6>
            </div>
            <div className="w-full h-[15rem] bg-white shadow-lg">
              <img
                className="object-center object-contain w-full h-[12rem]"
                src="../src/assets/picon2.png"
                alt="service2"
              />
              <h6 className="text-center text-xl">Corte</h6>
            </div>
            <div className="w-full h-[15rem] bg-white shadow-lg">
              <img
                className="object-center object-contain w-full h-[12rem]"
                src="../src/assets/picon3.png"
                alt="service3"
              />
              <h6 className="text-center text-xl">Penteado</h6>
            </div>
            <div className="w-full h-[15rem] bg-white shadow-lg">
              <img
                className="object-center object-contain w-full h-[12rem]"
                src="../src/assets/picon4.png"
                alt="service4"
              />
              <h6 className="text-center text-xl">Maquiagem</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
