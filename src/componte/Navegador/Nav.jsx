import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Fundo() {
  return (

  //   landscape:text-transparent 
  //   landscape:bg-clip-text 
  //   landscape:bg-gradient-to-r 
  // landscape:from-red-300 
  //   landscape:from-[48%] 
  //   landscape:to-[100%] 
  // landscape:to-orange-300
    <div
      className=" 

xs-min:bg-center
xs-min:w-full 

xs-min:bg-cover 
xs-min:bg-[url('./assets/fundo.png')]
xs-min:h-[30rem]


sm:w-full
sm:h-[44vh]
sm:bg-[url('./assets/media.png')]


md:grid
md:grid-cols-1
md:auto-cols-[250px]
md:grid-rows-[25rem_25rem]
md:place-items-center

md:bg-[url('./assets/media.png')]
md:w-full  
md:bg-cover
md:h-[50rem]
landscape:tablet:h-[60rem]
landscape:tablet:bg-center


lg:w-full 
lg:bg-left-bottom
lg:h-[100%] 
lg:bg-contain
lg:bg-[url('../../assets/figma.png')]

overflow-hidden

xl:w-full
xl:bg-center
xl:bg-cover

xl:bg-[url('./assets/figma.png')]
xl:h-[120dvh]



landscape:w-[100%] 
landscape:bg-cover 
landscape:h-[55rem]
landscape:bg-center 


bg-no-repeat 
bg-gray-950
"
    >
      {/* 
    

     */}
      <div className="  
      
  xs-min:h-[22rem] 
  xs-min:relative
  xs-min:p-1
  xs-min:top-72
  md:relative

  md:top-[30.9rem]
  md:backdrop-brightness-95

xl:relative
xl:-top-56
xl:-left-64

landscape:tablet:relative
landscape:tablet:top-[3rem]
landscape:tablet:backdrop-brightness-95
  xs-min:backdrop-brightness-95">
        <div
          className=" 
  flex 

 xl:pt-1
  xs-min:flex-col  
  xs-min:w-full 
  xs-min:gap-2 
  xs-min:pl-3
  xs-min:items-center
  

landscape:tablet:flex-col

  sm:text-sm  
  sm:top-[30rem]


  md:mt-0
  md:pt-0
  md:pr-24 md:pl-24

  md:p-10
  md:flex-col
  md:items-center
  md:gap-1

  lg:flex-col
  lg:pt-52
  lg:pl-8

  landscape:flex-col
  landscape:gap-1
  landscape:relative
  landscape:p-10


  xl:flex-col
  xl:gap-12
  xl:items-start


  
  "
        >
          <h6
            className="

    xs-min:text-[1.32rem]
    xs-min:leading-5
    xs-min:text-white
    xs-min:font-bold


    md:ml-0
    md:text-[2rem]
    md:font-extrabold
    md:leading-10
    md:text-white
    /* md:text-transparent bg-clip-text bg-gradient-to-r from-red-300 from-[48%] to-[100%] to-orange-300*/

  landscape:tablet:text-white
    landscape:font-extrabold
   
    font-sans 
    xl:text-xl
    xl:font-semibold 
    xl:ml-2
    xl:leading-2
    xs-min:border-l-4
    xl:border-l-4

    xl:text-white
    lg:text-white

    lg:font-bold
    lg:text-4xl
    lg:border-l-8
    border-l-amber-500 xs-min:pl-1 
    xl:pl-2  "
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

    xs-min:relative xs-min:top-2 xs-min:p-2
    xs-min:w-[210px]
    xs-min:text-[17px]
    xs-min:text-white

    md:ml-0 
    md:w-[230px]
    md:text-2xl
    md:p-2
    md:text-center
    md:mr-6

    lg:max-w-2xl
    lg:w-[300px]
    lg:p-3
    lg:text-2xl
  
    xl:ml-24  
    xl:text-[19px] font-semibold xl:w-[19rem] 
    xl:h-12   
    bg-blue-500
    xl:text-white 
    xl:p-2 rounded-[12px]"
          >
            Agendamento
          </button>

          <span
            className=" 
    flex flex-row 
    xl:gap-2
    xs-min:gap-1
    xs-min:relative 
    xs-min:top-3
xs-min:text-center
    text-white

    md:ml-0
    md:mr-6
    lg:gap-2
  
    xl:ml-24 
 "
          >
            <FaMapMarkerAlt className=" lg:text-3xl xs-min:text-[18px] bg-blue-500 hover:bg-transparent hover:border-2 border-orange-400 rounded-[50%] p-1 cursor-pointer  xl:text-2xl" />{" "}
            <p className=" lg:text-2xl xs-min:text-[13px]   xl:text-[1.2rem]">
              Malanje-Maxinde{" "}
            </p>
            <FaPhoneAlt className=" lg:text-3xl xs-min:text-[18px] hover:bg-transparent hover:border-2 border-orange-400   bg-blue-500 rounded-[50%]  cursor-pointer p-1 xl:text-2xl" />{" "}
            <p className="lg:text-2xl xs-min:text-[13px]   xl:text-[1.2rem]">
              {" "}
              92013000{" "}
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}
