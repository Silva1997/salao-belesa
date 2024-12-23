
import preco from '../../assets/Espelho Meu.png'
const Tabela = () => {
    return (
        <div className='grid grid-cols-1 auto-cols-auto auto-rows-auto h-auto'>
       
            <img className='xs-min:w-full xs-min:h-full xl:w-full  xl:h-[32rem] object-contain' src={preco} alt='Precos'/>
        </div>
    );
}

export default Tabela;
