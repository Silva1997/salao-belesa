import React from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
export default function Grid() {

    const scrolltrolador = React.useRef(null);
    const [pscrollLeft, setScrollleft] = React.useState(false);
    const [pscrollright, setScrollright] = React.useState(true);
  
    //funcao para actualizar os  estados do butao
    // function updateButton() {
    //   const scrollcontainer = scrolltrolador.current;
    //   if (scrollcontainer) {
    //     setScrollleft(scrollcontainer.scrollLeft > 0);
    //     setScrollright(
    //       scrollcontainer.scrollLeft + scrollcontainer.offsetWidth <
    //         scrollcontainer.scrollWidth
    //     );
    //   }
    // }

    function updateButton() {
      const scrollcontainer = scrolltrolador.current;
      if (scrollcontainer) {
        setScrollleft(scrollcontainer.scrollLeft > 0);
        setScrollright(
          scrollcontainer.scrollLeft + scrollcontainer.offsetWidth < scrollcontainer.scrollWidth
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
    // {/* Grid de Imagens */}
    <div className=" md:pr-16 md:pl-16 overflow-hidden md:mb-4 xs-min:pl-4 xs-min:pr-4 md:h-auto overflow-x-auto w-full pt-0 xs-min:h-auto h-auto xs-min:mb-4 xl:h-[33rem] xl:pl-28 xl:pr-28 scroll-smooth xs-min:scroll-auto ">
    <div
      ref={scrolltrolador}
      onScroll={updateButton}
      className=" md:p-2  md:grid md:grid-flow-col md:grid-rows-1  md:gap-2 md:place-items-center xs-min:grid  xs-min:grid-flow-col md:auto-cols-[480px] xs-min:auto-cols-[250px] xs-min:gap-2 xs-min:pb-4
            xl:grid overflow-y-hidden overflow-x-hidden xl:auto-cols-[360px] xl:grid-flow-col xl:place-items-center xl:gap-5 xl:pb-4"
    >
      <div className="xs-min:rounded-md border-[2px] border-amber-400 bg-[url('./assets/Tranca1.png')] bg-cover bg-center bg-no-repeat -min:w-80 md:w-[30rem]  md:h-[30rem] xs-min:h-[20rem] xl:w-[60vh] xl:h-[27rem] bg-zinc-900">
        {/* 01 */}
      </div>
      <div className=" xs-min:rounded-md border-[2px] border-amber-400 bg-[url('./assets/Tranca2.png')] bg-cover bg-center bg-no-repeat md:w-[30rem]  md:h-[30rem] xl:w-[60vh] xl:h-[27rem] bg-red-500">
        {/* 02 */}
      </div>
      <div className=" xs-min:rounded-md border-[2px] border-amber-400 bg-[url('./assets/Tranca3.png')] bg-cover bg-center bg-no-repeat  md:w-[30rem]  md:h-[30rem] xl:w-[60vh] xl:h-[27rem] bg-blue-500">
        {/* 03 */}
      </div>
      <div className="xs-min:rounded-md border-[2px] border-amber-400 xl:w-[60vh] xl:h-[27rem] bg-white md:w-[30rem]  md:h-[30rem]">
        {/* 04 */}
      </div>
      <div className=" xs-min:rounded-md border-[2px] border-amber-400 xl:w-[60vh] xl:h-[27rem] bg-white md:w-[30rem]  md:h-[30rem]">
        {/* 05 */}
      </div>
    </div>

    <button
      onClick={() => scroll("left")}
      disabled={!pscrollLeft}
      className="md:mt-2 text-white md:text-3xl xl:text-2xl rounded-[50%] p-2 bg-gradient-to-r from-amber-500 from-[5%] to-[20%] to-red-500 hover:bg-violet-500 disabled:cursor-not-allowed mr-1"
    >
      <FaArrowLeft />
    </button>
    <button
      onClick={() => scroll("right")}
      disabled={!pscrollright}
      className=" md:mb-2 text-white md:text-3xl xl:text-2xl rounded-[50%] p-2 bg-gradient-to-r from-amber-500 from-[5%] to-[20%] to-red-500 hover:bg-violet-500 disabled:cursor-not-allowed"
    >
      <FaArrowRight />
    </button>
  </div>
  )
}
