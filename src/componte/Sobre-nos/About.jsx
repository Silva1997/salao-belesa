
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className=" md:pr-16 md:pl-16 md:pb-4 xs-min:mb-4 bg-blue-50 md:mb-4 xs-min:pl-4 xs-min:pr-4 xs-min:h-auto md:h-auto xl:h-[33rem] overflow-hidden w-full xl:pl-28 xl:pr-28">
        <div className="flex flex-col justify-center xl:gap-1 ">
          <motion.h5
            className="xl:pt-2  md:text-2xl xs-min:text-[1.08rem] font-bold xl:text-[1.8rem] 2xl:text-[2rem] text-start text-transparent bg-clip-text bg-gradient-to-r from-amber-500 from-[5%] to-[20%] to-red-500"
            initial={{ opacity: 0, x: -100 }} // Inicializa o elemento fora da tela à esquerda
            whileInView={{ opacity: 1, x: 0 }} // Quando estiver na tela, o elemento vai se mover para a posição original
            transition={{ duration: 1 }} // Define o tempo da animação
          >
            02.Sobre Nós
          </motion.h5>
          <hr className="xs-min:w-28 md:w-32 xl:w-44 bg-none border-t-4 border-t-orange-400" />
        </div>


        <div className="grid  md:gap-1  md:pt-0 md:auto-rows-auto   place-items-center xs-min:auto-rows-auto grid-cols-2 auto-cols-auto xl:gap-8 xs-min:gap-4 ">
         
          <div className="xs-min:h-auto md:h-auto w-full xl:h-[24rem]">
            <p className=" md:pt-0 xs-min:text-[1.11rem] md:text-[1.7rem] xs-min:-tracking-[1px] text-black xl:pt-2 text-justify lg:pt-22 block xl:text-[1.7rem] ms-0 me-0">
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
            <div className=" flex xs-min:pt-4  xs-min:justify-center xs-min:items-center md:relative  md:left-[2.80rem] md:top-0 xl:top-0  w-full xl:pt-5  xs-min:flex-col md:flex-col xl:flex-row xs-min:gap-6  md:gap-6 xl:gap-1 xl:relative z-0">
            
              <div className="xs-min:w-40 xs-min:h-36 bg-no-repeat  bg-center bg-[url('./assets/icon1.jpg')] md:min-h-[12rem] xl:relative  rounded-md md:w-60 z-1 bg-cover xl:-top-6  xl:left-60 xl:w-full xl:h-[11rem] bg-white">
                <h6 className="text-center xs-min:text-sm relative top-[-28px] text-black">
                  Fé
                </h6>
              </div>
{/* 
md:relative md:top-8
md:-left-20
md:-left-20
md:relative
md:relative
md:top-14
md:-top-60 
md:left-[6.1rem]

 */}
              <div className="xs-min:w-40 xs-min:h-36 bg-no-repeat bg-cover bg-center bg-[url('./assets/icon2.png')]  md:min-h-[12rem]  xl:relative  rounded-md z-2 md:w-60  xl:top-[195px]  xl:left-8 right-[60px] xl:w-full xl:h-[12rem] bg-slate-500">
                <h6 className="text-center xs-min:text-sm xs-min:p-2 relative top-[-28px] text-black">
                  Foco
                </h6>
              </div>

              <div className="xs-min:w-40 xs-min:h-36 bg-no-repeat bg-cover bg-center bg-[url('./assets/icon3.png')] md:min-h-[12rem]  xl:relative  rounded-md z-3 md:w-60  xl:top-20 xl:-left-0 right-20 xl:w-full xl:h-[13rem] bg-neutral-500">
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
