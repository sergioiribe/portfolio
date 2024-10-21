import img from '../assets/sergio_iribe.jpg';

export const Main = () => {
  return (
    <div className="w-full h-[80vh] md:h-[90svh] bg-gray-300 mb-8 md:mb-20" id='home'>
      <div className="w-[80%] md:w-[50%] flex m-auto h-[80svh] flex-col-reverse md:flex-row">
        <div className='flex flex-col justify-start md:justify-center mt-5 md:mt-0 h-full items-start md:items-center md:w-1/2  w-[100%]'>
          <div className="w-full">
            <div className='text-2xl md:text-4xl text-center md:text-left w-full text-gray-600'>Hola, Soy</div>
            <div className=' text-center text-4xl font-semibold md:text-6xl md:text-left w-full text-gray-800'>{`<Sergio Iribe/>`}</div>
            <div className='text-2xl md:text-4xl text-center md:text-left w-full text-gray-600'>Programador</div>
            <a
              href="/cvSergioIribe.pdf"
              download="CV_Sergio_Iribe.pdf"
              className='text-lg underline md:text-xl mt-5 md:mt-10 text-center md:text-left text-gray-600 w-full hover:text-black block'
            >
              Descargar CV
            </a>

          </div>
        </div>
        <div className="flex flex-col justify-center h-full items-center md:w-1/2  mt-10 md:mt-0">
          <img src={img} alt="Sergio Iribe" className='rounded-full h-56 md:h-auto' />
        </div>
      </div>
    </div>
  );
};
