
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className=" landscape:tablet:bg-yellow-200 md:pr-16 md:pl-16 md:pb-4 xs-min:mb-4  md:mb-4 xs-min:pl-4 xs-min:pr-4 xs-min:h-auto md:h-auto xl:h-[33rem] overflow-hidden w-full xl:pl-28 xl:pr-28">
        <div className="flex flex-col justify-center xl:gap-1 ">
          <motion.h5
            className="xl:pt-2 md:text-3xl xs-min:text-[1.08rem]  font-bold xl:text-[1.8rem] 2xl:text-[2rem] text-start text-transparent bg-clip-text bg-gradient-to-r from-amber-500 from-[5%] to-[20%] to-red-500"
            initial={{ opacity: 0, x: -100 }} // Inicializa o elemento fora da tela à esquerda
            whileInView={{ opacity: 1, x: 0 }} // Quando estiver na tela, o elemento vai se mover para a posição original
            transition={{ duration: 1 }} // Define o tempo da animação
          >
            02.Sobre Nós
          </motion.h5>
          <hr className="xs-min:w-28 md:w-32 xl:w-44 bg-none border-t-4 border-t-orange-400" />
        </div>


        <div className="grid landscape:tablet:place-items-baseline     md:gap-1  md:pt-0 md:auto-rows-auto   place-items-center xs-min:auto-rows-auto grid-cols-2 auto-cols-auto xl:gap-8 xs-min:gap-4 ">
         
          <div className="xs-min:h-auto md:h-auto w-full xl:h-[24rem]">
            <p className="sm:text-[1.11rem] landscape:tablet:text-[1.8rem]  portrait:tablet:text-[1.75rem] lg:text-[1.9rem]  md:pt-0 xs-min:text-[1.11rem] md:text-[1.7rem] xs-min:-tracking-[1px] text-black xl:pt-2 text-justify lg:pt-22 block xl:text-[1.7rem] ms-0 me-0">
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

          <div className="  w-full xs-min:p-1  md:h-auto  xs-min:h-auto xl:h-[24rem]">
            <div className=" xl:top-0 xl:w-full xl:flex xl:flex-row xl:gap-1 xl:relative xl:z-0  xs-min:grid xs-min:grid-cols-1 xs-min:gap-6 xs-min:place-items-end sm:grid sm:grid-cols-1 sm:gap-6 sm:place-items-end md:grid md:grid-cols-1 md:gap-6 md:place-items-end landscape:tablet:grid landscape:tablet:grid-cols-1 landscape:tablet:gap-6 landscape:tablet:place-items-end ">
            
              <div className=" xl:shadow-2xl xs-min:w-40 xs-min:h-36 bg-no-repeat  bg-center bg-[url('https://i.imgur.com/6KOGesS.jpeg')] landscape:tablet:relative landscape:tablet:left-0  md:min-h-[12rem] xl:relative  rounded-md md:w-60 z-1 bg-cover xl:-top-6  xl:left-52 xl:max-w-full xl:w-[55rem]  xl:h-[11rem] bg-white">
                <h6 className="text-center xs-min:text-sm relative top-[-28px] text-black">
                  Fé
                </h6>
              </div>

              <div className=" xl:shadow-2xl  xs-min:w-40 xs-min:h-36 bg-no-repeat bg-cover bg-center bg-[url('https://i.imgur.com/GtmTOsN.png')]  md:min-h-[12rem]  xl:relative  rounded-md z-2 md:w-60  xl:top-[195px]  xl:left-8 right-[60px] xl:max-w-full xl:w-[55rem] xl:h-[12rem] bg-slate-500">
                <h6 className="text-center xs-min:text-sm xs-min:p-2 relative top-[-28px] text-black">
                  Foco
                </h6>
              </div>

              <div className=" xl:shadow-2xl xs-min:w-40 xs-min:h-36 bg-no-repeat bg-cover bg-center bg-[url('https://i.imgur.com/OQyiXSn.png')] md:min-h-[12rem]  xl:relative  rounded-md z-3 md:w-60  xl:top-20 xl:-left-0 right-20 xl:max-w-full xl:w-[58rem]  xl:h-[13rem] bg-neutral-500">
                <h6 className="text-center xs-min:text-sm xs-min:p-2  relative top-[-28px] text-black">
                  Trabalho
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default About;
