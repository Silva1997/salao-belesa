


import { motion } from "framer-motion";
export default function Index() {
  return (
        // {/* Bem-Vindo */}
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

          <p className="md:text-[1.7rem] lg:text-[1.2rem] xs-min:text-[1.08rem]  2xl:text-[1.5rem] xl:text-[1.8rem] text-justify">
            Bem-vindo ao Salão Espelho Meu, onde sua beleza encontra o cuidado
            que merece! No salão Espelho Meu, há 4 anos, transformamos confiança
            e estilo. Somos apaixonados por realçar a sua beleza e oferecer
            experiências únicas em manicure, pedicure, maquiagem e cuidados com
            os cabelos. Nossa missão é proporcionar um ambiente acolhedor, onde
            cada detalhe é pensado para fazer você se sentir especial e destacar
            o que há de melhor em você.
          </p>
        </div>
  )
}
