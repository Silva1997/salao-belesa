import React, { useState, useRef } from "react";
import "./index.css";
import { Avatar, Carousel, Input } from "antd";
import { TiThMenu } from "react-icons/ti";

import {
  FaArrowRight,
  FaArrowLeft,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Rever from "./Api";

function App() {
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
      <nav className="flex xs-min:flex-row  xs-min:bg-white md:flex-row drop-shadow-md xl:bg-white sticky top-0 z-[1000] md:bg-white  md:h-[4.8rem] xs-min:h-[3.8rem] xl:h-[4.5rem] justify-between  overflow-hidden">
        <div className="  pl-4 md:w-28 md:h-14 xs-min:w-24 xs-min:h-14 xl:w-28 xl:h-24 overflow-hidden">
          <img
            className="xl:object-cover md:object-contain md:w-full md:h-[8.4vh] xs-min:object-contain xs-min:w-full xs-min:h-[9.5vh] xl:w-[14vh] xl:h-[11vh] pt-0   pb-2 mt-0"
            src="../src/assets/logo.png"
            alt="icon"
          />
        </div>
        <button className="text-white  pr-4">
          <TiThMenu className="text-green-500 md:text-[3rem]  xs-min:text-[1.8rem]    xl:text-[2.5rem]" />
        </button>
      </nav>

      <div
  className=" 
  landscape:bg-[url('./assets/fundo-landscape.png')] 
  portrait:bg-[url('./assets/fundo-portrait.png')]
    xs-min:w-full 
    xs-min:bg-cover 
    xs-min:h-[80vh]  /* Ajuste para 80vh ou uma altura fixa para garantir que a imagem cubra a área */
    md:bg-cover 
    md:w-full 
    md:h-[80vh] 
    md:bg-no-repeat
    md:bg-[url('./assets/fundo.png')]
    xs-min:bg-[url('./assets/fundo.png')] 
    xs-min:bg-center
    xl:bg-[url('./assets/figma.png')] 
    lg:w-full 
    lg:bg-center 
    lg:h-[43rem] 
    lg:bg-cover
    bg-no-repeat bg-gray-950
  "
>
  <div
    className=" 
      flex flex-col  
      xs-min:items-center 
      xs-min:w-full 
      xl:gap-12
      xl:items-start
      xl:pt-1
      sm:text-sm  
      xs-min:gap-6 
      xs-min:pl-3
      xs-min:pt-56"
  >
    <h6
      className="
        xs-min:text-base/4
        xs-min:text-white
        xs-min:font-bold
        font-sans 
        xl:font-semibold 
        xl:ml-24 xl:relative top-[12rem] 
        xl:text-[25px]
        xl:leading-10
        xs-min:border-l-2
        xl:border-l-4
        border-l-amber-500 xs-min:pl-2 
        xl:pl-2 xl:text-white "
    >
      Salão de beleza Espelho Meu <br />
      Por detrás de cada cliente, <br className="xl:hidden" /> a
      excelência no serviço
    </h6>

    <button
      className=" 
        hover:bg-transparent
        hover:border-[2px] border-amber-500
        hover:rounded-[12px]
        xs-min:w-[100px]
        xs-min:text-[12px]
        xs-min:text-white
        xl:ml-24  xl:relative xl:top-[14rem] 
        xl:text-[19px] font-semibold xl:w-[19rem] 
        xl:h-12   bg-blue-500
        xl:text-white p-2 rounded-[12px]"
    >
      Agendamento
    </button>

    <span
      className=" 
        flex flex-row gap-2
        text-white
        xl:ml-24  xl:relative xl:top-[14rem] "
    >
      <FaMapMarkerAlt className=" xs-min:text-md bg-blue-500 hover:bg-transparent hover:border-2 border-orange-400 rounded-[50%] p-1 cursor-pointer  xl:text-2xl" />{" "}
      <p className=" xs-min:text-sm   xl:text-[1.2rem]">
        Malanje-Maxinde{" "}
      </p>
      <FaPhoneAlt className=" xs-min:text-md hover:bg-transparent hover:border-2 border-orange-400   bg-blue-500 rounded-[50%]  cursor-pointer p-1 xl:text-2xl" />{" "}
      <p className="xs-min:text-sm   xl:text-[1.2rem]"> 92013000 </p>
    </span>
  </div>
</div>

      {/* Valores da empresa */}
      <div className=" xs-min:-top-8   flex xs-min:pl-4 xs-min:pr-4 xs-min:flex-row   xl:flex-row relative xl:-top-4 z-[500] justify-center content-center items-center">
        <div className=" xs-min:w-[35vh] xs-min:h-[19rem]  drop-shadow-lg p-2 flex flex-col items-center bg-gradient-to-l from-white from-[99%] to-[1%] to-orange-400 xl:w-[40vh] rounded-s-md xl:h-[17rem]">
          <img
            className="object-center xs-min:w-[20px] xs-min:h-[20px] xl:w-[40px]  xl:h-[40px] p-0 m-0 rounded-[50%] "
            src="../src/assets/Visao.png"
            alt="Valor"
          />

          <h6 className=" xs-min:text-sm xl:text-[1.1rem] text-center">
            Visão
          </h6>
          <p className=" xs-min:text-start xs-min:leading-[14px] xs-min:text-[12px] xs-min:tracking-[-1px] xl:text-[13px] xl:text-justify xl:-tracking-tighter ">
            Ser referência em atendimento e qualidade no mercado de beleza,
            proporcionando uma experiência transformadora e inovadora para
            nossos clientes. Buscamos ser reconhecidos pela excelência,
            criatividade e pelo impacto positivo que geramos no bem-estar e
            autoestima de cada pessoa.
          </p>
        </div>

        <div className="   xs-min:w-[35vh] xs-min:h-[19rem]   drop-shadow-lg flex p-2 flex-col items-center bg-gradient-to-r from-slate-500 to-slate-800 xl:w-[40vh] text-white  xl:h-[17rem]">
          <img
            className=" xs-min:w-[20px] xs-min:h-[20px] object-center xl:w-[40px]  xl:h-[40px] pt-0 m-0 rounded-[50%] "
            src="../src/assets/Missao.png"
            alt="Valor"
          />

          <h6 className=" xs-min:text-sm xl:text-[1.1rem] text-center">
            Missão
            <p className=" xs-min:text-start xs-min:leading-[16px] xs-min:text-[12px] xs-min:tracking-[-1px] xl:text-[13px] xl:text-justify xl:-tracking-wide ">
              Proporcionar aos nossos clientes um serviço de beleza único e
              personalizado, combinando expertise, qualidade e inovação. Nosso
              compromisso é valorizar a autoestima e o bem-estar de cada pessoa,
              oferecendo um ambiente acolhedor, moderno e seguro.
            </p>
          </h6>
        </div>
        <div className="   xs-min:w-[35vh] xs-min:h-[19rem]   drop-shadow-lg flex flex-col p-2 items-center shadow-zinc-800 bg-gradient-to-r from-white from-[99%] to-[1%] to-orange-400 xl:w-[40vh] rounded-e-md xl:h-[17rem]">
          <img
            className="xs-min:w-[20px] xs-min:h-[20px] object-center xl:w-[40px]  xl:h-[40px] pt-0 m-0 rounded-[50%] "
            src="../src/assets/Valor.png"
            alt="Valor"
          />

          <h6 className="t xs-min:text-sm xl:text-[1.1rem] text-center">
            Valor
          </h6>
          <p className=" xs-min:text-start xs-min:leading-[14px] xs-min:text-[14px] xs-min:tracking-[-1px] xl:text-[13px] xl:text-justify xl:-tracking-tighter ">
            Qualidade: Oferecer serviços com o mais alto padrão de excelência.
            Inovação: Estar sempre à frente das tendências, trazendo novas
            técnicas e tratamentos para nossos clientes.
          </p>
        </div>
      </div>
      {/*  */}

      <Rever />
      <Footer />
    </>
  );
}
export default App;

const Footer = () => {
  return (
    <>
      <footer className="bg-slate-500 w-full h-[18rem] grid grid-cols-3 auto-cols-[250px] pt-4 pl-4 pr-4">
        <div className="w-full  ">
          <div>
            <h3 className="text-white font-bold text-[1.4rem]">
              Entre em contacto com a gente!
            </h3>

            <p id="texto2-footer">
              Entre em contacto com o Espelho Meu,
              <br /> queremos tirar as duvidas, ouvir suas criticas e sugestoes
            </p>

            <span className="flex flex-row gap-1   ">
              <FaPhoneAlt className="text-white rounded-[50%] bg-blue-700 p-1 text-[1.4rem]" />{" "}
              (+244) 000-000-000{" "}
              <FaMapMarkerAlt className="text-white rounded-[50%] bg-blue-700 p-1 text-[1.4rem]" />{" "}
              R. da Maxinde iepa
            </span>
          </div>
        </div>
        <div className="flex flex-col pt-60  ">
          <p>© 2024 Eng. Silva - Todos os direitos reservados</p>
        </div>
        <div className="flex flex-col pt-0 gap-2 items-center    ">
          <h6 className="text-start text-xl text-white font-bold">
            Reclamações
          </h6>
          <Input
            width={12}
            title="Input-rec"
            placeholder="Reclamações ou sugestões"
          />
          <button className=" p-1 w-80 bg-blue-600 text-white rounded-xl">
            Enviar
          </button>
        </div>
      </footer>
    </>
  );
};

const Carousel_1 = () => (
 <>
     <div className=" overflow-hidden  bg-white">
        <div className="  xs-min:pl-4 xs-min:pr-4 xl:pl-28 xl:pr-28 pb-5 ">
          <h6 className="text-center pb-2">Escolha pela marca</h6>
          <div className=" bg-[#e9f8f8be] flex flex-row gap-2 justify-center items-center">
            <a href="/">
              {" "}
              <Avatar size={70} src="../src/assets/picon.png" alt="icon" />
            </a>
            <a href="/">
              {" "}
              <img
                className="object-center object-contain w-full h-[90px]"
                src="../src/assets/picon2.png"
                alt="icon1"
              />
            </a>
          </div>
        </div>

        <div className=" xs-min:pl-4 xs-min:pr-4 xl:pl-28 xl:pr-28 pb-5">
          <div className="flex flex-col justify-center gap-1 pb-4">
            <h5 className="  animate-slider-direita duration-150 delay-300 xs-min:text-md font-bold xl:text-[1.8rem] text-start text-transparent bg-clip-text bg-gradient-to-r from-amber-500 from-[5%] to-[20%] to-red-500">
              01.Bem-Vindo
            </h5>
            <hr className=" xs-min:w-28 xl:w-44 bg-none xs-min:border-t-2   xl:border-t-4 border-orange-400" />
          </div>

          <p className=" xs-min:text-md  2xl:text-[1.5rem] xl:text-[1.5rem] text-justify">
            Bem-vindo ao Salão Espelho Meu,onde sua beleza encontra o cuidado
            que omerece! No salão espelho meu, há 4 anos, transformanos
            confiança e estilo. Somos apaixonados por realçar a sua beleza e
            oferecer experiências únicas em manicure,pedicure,maquiagem e
            cuidados com os cabelos. Nossa missão é proporcionar um ambiente
            acolhedor, onde cada detalhe é pensado para fazer você se sentir
            especial e destacar o que ha de melhor em você.
          </p>
          {/* <p className="text-[0.8rem] text-center">Nossos trabalhos</p> */}
        </div>
       
        {/* Ver depois */}
        <div className=" xs-min:pl-4 xs-min:pr-4   overflow-x-auto  w-full pt-0 h-[24rem] xl:pl-28 xl:pr-28   scroll-smooth ">
          <div
            ref={scrolltrolador}
            onScroll={updateButton}
            className=" 
     
xs-min:grid xs-min:overflow-y-hidden xs-min:overflow-x-hidden 
xs-min:grid-flow-col
xs-min:auto-cols-[250px]
xs-min:gap-2
xs-min:pb-4


        xl:grid 
        xl:overflow-y-hidden
        xl:overflow-x-hidden
        xl:auto-cols-[350px]
        xl:grid-flow-col 
        xl:place-items-center
        xl:gap-7
        xl:pb-4
        "
          >
            <div
              className=" 
              border-[2px] border-amber-400
            bg-[url('./assets/Tranca1.png')]
            bg-cover
            bg-center
            bg-no-repeat  
          -min:w-80 xs-min:h-[20rem]    
            xl:w-[60vh] xl:h-[20rem] bg-zinc-900 "
            >
              01
            </div>

            <div
              className=" 
               border-[2px] border-amber-400
             bg-[url('./assets/Tranca2.png')]
            bg-cover
            bg-center
            bg-no-repeat 
         xl:w-[60vh] xl:h-[20rem] bg-red-500"
            >
              02
            </div>
            <div
              className="  
               border-[2px] border-amber-400
             bg-[url('./assets/Tranca3.png')]
            bg-cover
            bg-center
            bg-no-repeat 
        xl:w-[60vh] xl:h-[20rem] bg-blue-500"
            >
              03
            </div>

            <div className="  border-[2px] border-amber-400 xl:w-[60vh] xl:h-[20rem] bg-white">
              04
            </div>

            <div className=" border-[2px] border-amber-400 xl:w-[60vh] xl:h-[20rem] bg-white">
              05
            </div>

          
          </div>

          <button
            onClick={() => scroll("left")}
            disabled={!pscrollLeft}
            className=" rounded-[50%] p-2 bg-gradient-to-r from-amber-500 from-[5%] to-[20%] to-red-500 hover:bg-violet-500 disabled:cursor-not-allowed mr-1"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!pscrollright}
            className=" rounded-[50%] p-2 bg-gradient-to-r from-amber-500 from-[5%] to-[20%] to-red-500 hover:bg-violet-500 disabled:cursor-not-allowed"
          >
            <FaArrowRight />
          </button>
        </div>

        {/* Grid  sobre nos */}
        <div className=" xs-min:pl-4 xs-min:pr-4 overflow-hidden w-full xl:pl-28 xl:pr-28">
          <div className="flex flex-col justify-center gap-1">
            <h6 className=" font-bold xs-min:text-md xl:text-[1.8rem] text-start text-transparent bg-clip-text bg-gradient-to-r from-amber-500 from-[5%] to-[20%] to-red-500">
              03.Sobre Nós
            </h6>
            <hr className="xs-min:w-28 xl:w-44 bg-none border-t-4 border-t-orange-400" />
          </div>
          <div className="grid place-items-center grid-cols-2 auto-cols-auto gap-1 ">
            <div className=" xs-min:h-[22rem] w-full xl:h-[24rem]">
              <p className="xs-min:text-sm   text-black text-justify pt-22   block xl:text-[1.5rem] ms-0 me-0 ">
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
            <div className="  w-full xs-min:h-[18rem] xl:h-[24rem]">
              <div className="flex w-full pt-0 flex-row gap-1 relative z-0">
                <div className=" xs-min:w-full xs-min:h-[10rem]  bg-no-repeat bg-cover bg-center bg-[url('./assets/icon1.jpg')]  relative rounded-md z-1 xl:-top-2  xl:left-60  xl:w-full xl:h-[10rem] bg-violet-800">
                  <h6 className="text-center relative top-[-28px] text-black ">
                    Fé
                  </h6>
                </div>
                <div className=" xs-min:w-full xs-min:h-[10rem] bg-no-repeat bg-cover bg-center bg-[url('./assets/icon2.png')] relative rounded-md z-2 xl:top-[184px] xl:left-14 right-[60px]  xl:w-full xl:h-[11rem] bg-slate-500">
                  <h6 className="text-center relative top-[-28px] text-black">
                    Foco
                  </h6>
                </div>
                <div className=" xs-min:w-full xs-min:h-[10rem] bg-no-repeat bg-cover bg-center bg-[url('./assets/icon3.png')] relative rounded-md z-3 xl:top-20 xl:-left-1 right-20  xl:w-full xl:h-[12rem] bg-neutral-500">
                  <h6 className="text-center relative top-[-28px] text-black">
                    Trabalho
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Servicos */}

        <div className=" w-full overflow-hidden h-[26rem] bg-zinc-100 xl:pl-28 xl:pr-28">
          <div className="flex flex-col justify-center  gap-1">
            <h6 className=" font-bold text-[1.8rem] text-start text-transparent bg-clip-text bg-gradient-to-r from-amber-500 from-[5%] to-[20%] to-red-500">
              04.Serviços
            </h6>
            <hr className=" w-44 bg-none border-t-4 border-t-orange-400" />
          </div>

          <div className="flex flex-row  pt-4 gap-3 justify-center items-center">
            <div className=" border-b-2 border-orange-400 flex flex-col rounded-sm w-full h-[55vh] relative overflow-hidden group cursor-pointer">
              {/* <!-- Fundo do Card (Imagem) --> */}

              <img
                src="../src/assets/cabelo.jpg"
                alt="Imagem do Card"
                className="  object-cover transform transition-transform duration-300 ease-in-out group-active:scale-110 group-hover:scale-105"
              />

              {/* <!-- Cabeleiro Conteúdo do Card --> */}

              <div className="relative -top-24 pl-4">
                <h6 className="text-[1.7rem] text-start text-transparent bg-clip-text bg-gradient-to-r from-amber-500 from-[5%] to-[20%] to-red-500 font-bold">
                  Cabeleiro
                </h6>
                <p className="text-white">
                  Transforme seu visual, realce sua beleza.
                </p>
              </div>
            </div>

            <div className=" flex flex-col border-b-2 border-orange-400 rounded-sm w-full h-[55vh] relative overflow-hidden group cursor-pointer">
              {/* <!-- Fundo do Card (Imagem) --> */}
              <img
                src="../src/assets/unhas1.jpg"
                alt="Imagem do Card"
                className=" object-cover transform transition-transform duration-300 ease-in-out group-active:scale-110 group-hover:scale-105"
              />

              {/* <!-- Manicure Conteúdo do Card --> */}

              <div className="relative -top-40 pl-4">
                <h6 className="text-[1.7rem] text-start text-transparent bg-clip-text bg-gradient-to-r from-amber-500 from-[5%] to-[20%] to-red-500 font-bold">
                  Manicure
                </h6>
                <p className="text-white">
                  Unhas impecáveis, confiança inabalável.
                </p>
              </div>
            </div>

            <div className=" border-b-2 border-orange-400 flex flex-col bg-black rounded-sm w-full h-[55vh] relative overflow-hidden group cursor-pointer">
              {/* <!-- Fundo do Card (Imagem) --> */}
              <img
                src="../src/assets/unhas1.jpg"
                alt="Imagem do Card"
                className=" object-cover object-bottom w-full h-[55vh] transform transition-transform duration-300 ease-in-out group-active:scale-110 group-hover:scale-105"
              />

              {/* <!-- Penicure Conteúdo do Card --> */}

              <div className="relative -top-24 pl-4">
                <h6 className="text-[1.7rem] text-start text-transparent bg-clip-text bg-gradient-to-r from-amber-500 from-[5%] to-[20%] to-red-500 font-bold">
                  Pedicure
                </h6>
                <p className="text-white">
                  Unhas impecáveis, confiança inabalável.
                </p>
              </div>
            </div>

            <div className=" border-b-2 border-orange-400 flex flex-col rounded-sm w-full h-[55vh] relative overflow-hidden group cursor-pointer">
              {/* <!-- Fundo do Card (Imagem) --> */}
              <img
                src="../src/assets/makeup.png"
                alt="Imagem do Card"
                className=" object-cover w-full h-[55vh] transform transition-transform duration-300 ease-in-out group-active:scale-110 group-hover:scale-105"
              />

              {/* <!-- Makeup Conteúdo do Card --> */}
              <div className="relative -top-24 pl-4">
                <h6 className="text-[1.7rem] text-start text-transparent bg-clip-text bg-gradient-to-r from-amber-500 from-[5%] to-[20%] to-red-500 font-bold">
                  Makeup
                </h6>
                <p className="text-white">
                  Belesa impecáveis, confiança inabalável.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Nossa equipe */}

        <div className=" w-full overflow-hidden h-[34rem] bg-zinc-100 xl:pl-28 xl:pr-28">
          <div className="flex flex-col justify-center  gap-1">
            <h6 className=" font-bold text-[1.8rem] text-start text-transparent bg-clip-text bg-gradient-to-r from-amber-500 from-[5%] to-[20%] to-red-500">
              05.Nossa Equipe
            </h6>
            <hr className=" w-44 bg-none border-t-4 border-t-orange-400" />
          </div>

          <div className="flex pt-4 flex-row gap-1 justify-center items-center">
            {/* 1 */}
            <div className=" border-b-2 border-orange-400 flex flex-col rounded-sm w-full h-[58vh] relative overflow-hidden group cursor-pointer">
              <h6 className="text-black text-[16.5px] font-semibold">
                {" "}
                Ana Silva
              </h6>
              <img
                className="object-contain w-full h-[130vh]"
                src="../src/assets/pessoa.png"
                alt="pessoa 1"
              />
              <p className="text-black text-[16px]">Cabeleira Profissional</p>
            </div>
            {/* 2 */}
            <div className=" border-b-2 border-orange-400 flex flex-col rounded-sm w-full h-[58vh] relative overflow-hidden group cursor-pointer">
              <h6 className="text-black text-[16.5px] font-semibold">
                {" "}
                Teresa Kaluvi
              </h6>
              <img
                className="object-contain w-full h-[130vh]"
                src="../src/assets/pessoa.png"
                alt="pessoa 1"
              />
              <p className="text-black text-[16px]">Makeup Senior</p>
            </div>
            {/* 3 */}
            <div className=" border-b-2 border-orange-400 flex flex-col rounded-sm w-full h-[58vh] relative overflow-hidden group cursor-pointer">
              <h6 className="text-black text-[16.5px] font-semibold">
                {" "}
                Gemima Bastos
              </h6>
              <img
                className="object-contain w-full h-[130vh]"
                src="../src/assets/pessoa.png"
                alt="pessoa 1"
              />
              <p className="text-black text-[16px]">Manicure Junior</p>
            </div>
            {/* 4 */}
            <div className=" border-b-2 border-orange-400 flex flex-col rounded-sm w-full h-[58vh] relative overflow-hidden group cursor-pointer">
              <h6 className="text-black text-[16.5px] font-semibold">
                {" "}
                Adelia Silva
              </h6>
              <img
                className="object-contain w-full h-[130vh]"
                src="../src/assets/pessoa.png"
                alt="pessoa 1"
              />
              <p className="text-black text-[16px]">Pedicure Senior</p>
            </div>
          </div>
        </div>
      </div>
 </>
);
