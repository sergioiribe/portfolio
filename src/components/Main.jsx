import img from '../assets/sergio_iribe.jpg';

export const Main = () => {
  return (
    <div className="w-full h-[80vh] md:h-[90svh] bg-gray-300 mb-8 md:mb-20" id='home'>
      <div className="w-[80%] md:w-[80%] lg:w-[90%] xl:w-[70%] 2xl:w-[60%] flex m-auto h-[80svh] flex-col-reverse md:flex-row lg:gap-x-8 ">
        <div className='flex flex-col justify-start md:justify-center mt-5 md:mt-0 h-full items-start md:items-center md:w-1/2  w-[100%]'>
          <div className="w-full flex justify-center flex-col items-center">
            <div className='text-2xl md:text-4xl text-center lg:text-left w-full text-gray-600'>Hola, soy</div>
            <div className=' text-center text-4xl font-semibold md:text-4xl lg:text-6xl lg:text-left w-full text-gray-800 md:font-bold lg:font-normal'>{`<Sergio Iribe/>`}</div>
            <div className='text-2xl md:text-4xl text-center lg:text-left w-full text-gray-600'>Programador</div>
            <a
              href="/cvSergioIribe.pdf"
              download="cvSergioIribe.pdf"
              className='text-lg underline md:text-xl mt-5 md:mt-10 text-center lg:text-left text-gray-600 w-full hover:text-black block'
            >
              Descargar CV
            </a>

          </div>
        </div>
        <div className="flex flex-col justify-center h-full items-center md:w-1/2  mt-10 md:mt-0 w-full">
        <img src={img} alt="Sergio Iribe" className='rounded-full h-[250px] md:h-[300px] lg:h-[400px] object-cover' />
        </div>
      </div>
    </div>
  );
};
