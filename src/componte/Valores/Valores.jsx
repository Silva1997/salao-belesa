

import icon1 from "../../assets/Visao.png";
import icon2 from "../../assets/Valor.png";
import icon3 from "../../assets/Missao.png";

const Valores = () => {
    return (
        <div>
                  <div className=" md:pr-10 md:pl-10 xs-min:-top-8 xs-min:z-[500] sm:pl-4 sm:pr-4  flex  lg:flex-row   xs-min:pl-4 xs-min:pr-4 xs-min:flex-row   xl:flex-row relative xl:-top-4 xl:z-[500] justify-center content-center items-center">
        <div className=" landscape:w-[58vh] lg:w-[45vh] xs-min:w-[35vh] lg:h-[26rem] md:h-[21rem] xs-min:h-[19rem]  drop-shadow-lg p-2 flex flex-col items-center bg-gradient-to-l from-white from-[99%] to-[1%] to-orange-400 xl:w-[40vh] rounded-s-md xl:h-[17rem]">
          <img
            className="object-center  landscape:w-[40px] landscape:h-[40px] lg-min:w-[40px] lg:w-[40px] xs-min:w-[20px] md:w-[35px] md:h-[35px] xs-min:h-[20px] xl:w-[40px]  xl:h-[40px] p-0 m-0 rounded-[50%] "
            src={icon1}
            alt="Valor"
          />

          <h6 className="  landscape:text-xl  lg:text-xl md:text-base xs-min:text-sm xl:text-[1.1rem] text-center">
            Visão
          </h6>
          <p className=" landscape:text-[1.03rem] landscape:leading-5  lg:leading-5 lg:text-[1.58rem] md:text-start md:leading-4 md:pb-3 md:text-[1.22rem] md:tracking-[0px] xs-min:text-start xs-min:leading-[14px] xs-min:text-[12px] xs-min:tracking-[-1px] xl:text-[13px] xl:text-justify xl:-tracking-tighter ">
            Ser referência em atendimento e qualidade no mercado de beleza,
            proporcionando uma experiência transformadora e inovadora para
            nossos clientes. Buscamos ser reconhecidos pela excelência,
            criatividade e pelo impacto positivo que geramos no bem-estar e
            autoestima de cada pessoa.
          </p>
        </div>

        <div className=" md:h-[21rem]  landscape:w-[58vh]  lg:w-[45vh] lg:h-[26rem]  xs-min:w-[35vh] xs-min:h-[19rem]   drop-shadow-lg flex p-2 flex-col items-center bg-gradient-to-r from-slate-500 to-slate-800 xl:w-[40vh] text-white  xl:h-[17rem]">
          <img
            className=" landscape:w-[40px] landscape:h-[40px]  lg-min:w-[40px] lg:w-[40px]  md:w-[35px] md:h-[35px]  xs-min:w-[20px] xs-min:h-[20px] object-center xl:w-[40px]  xl:h-[40px] pt-0 m-0 rounded-[50%] "
            src={icon3}
            alt="Valor"
          />

          <h6 className="  landscape:text-xl  lg:text-xl md:text-base  xs-min:text-sm xl:text-[1.1rem] text-center">
            Missão
            <p className=" landscape:text-[1.03rem] landscape:leading-5 lg:text-[1.56rem]  lg:leading-6 md:text-start md:leading-4 md:pb-3 md:text-[1.26rem] md:tracking-[0px] xs-min:text-start xs-min:leading-[16px] xs-min:text-[12px] xs-min:tracking-[-1px] xl:text-[13px] xl:text-justify xl:-tracking-wide ">
              Proporcionar aos nossos clientes um serviço de beleza único e
              personalizado, combinando expertise, qualidade e inovação. Nosso
              compromisso é valorizar a autoestima e o bem-estar de cada pessoa,
              oferecendo um ambiente acolhedor, moderno e seguro.
            </p>
          </h6>
        </div>
        <div className=" md:h-[21rem] landscape:w-[58vh] lg:w-[45vh] lg:h-[26rem]   xs-min:w-[35vh] xs-min:h-[19rem]   drop-shadow-lg flex flex-col p-2 items-center shadow-zinc-800 bg-gradient-to-r from-white from-[99%] to-[1%] to-orange-400 xl:w-[40vh] rounded-e-md xl:h-[17rem]">
          <img
            className=" landscape:w-[40px] landscape:h-[40px] lg-min:w-[40px] lg:w-[40px] md:w-[38px] md:h-[38px] xs-min:w-[20px] xs-min:h-[20px] object-center xl:w-[40px]  xl:h-[40px] pt-0 m-0 rounded-[50%] "
            src={icon2}
            alt="Valor"
          />

          <h6 className=" landscape:text-xl lg:text-xl md:text-base xs-min:text-sm xl:text-[1.1rem] text-center">
            Valor
          </h6>
        <p className=" landscape:text-[1.03rem] landscape:leading-5 lg:text-[1.56rem]  lg:leading-6  md:text-start md:leading-4 md:pb-3 md:text-[1.22rem] md:tracking-[0px] xs-min:text-start xs-min:leading-[14px] xs-min:text-[14px] xs-min:tracking-[-1px] xl:text-[13px] xl:text-justify xl:-tracking-tighter ">
            Qualidade: Oferecer serviços com o mais alto padrão de excelência.
            Inovação: Estar sempre à frente das tendências, trazendo novas
            técnicas e tratamentos para nossos clientes.
          </p>
        </div>
      </div>
        </div>
    );
}

export default Valores;


