import {Navegadora, FinalPage} from '../Global.jsx';
import React, { useState, useEffect } from 'react';
import imagenCarrusel1 from '../../assets/articulosOficina.jpg'
import imagenCarrusel2 from '../../assets/puntosPago.jpg'
import imagenCarrusel3 from '../../assets/seguridadElectronica.jpg'
import imagenCarrusel4 from '../../assets/sellos.jpg'
import categoria1 from '../../assets/categoria1.png'
import categoria2 from '../../assets/categoria2.png'
import categoria3 from '../../assets/categoria3.png'
import categoria4 from '../../assets/categoria4.png'

const images = [
  imagenCarrusel1,
  imagenCarrusel2,
  imagenCarrusel3,
  imagenCarrusel4
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayText, setDisplayText] = useState('Somos uno de los mayores distribuidores de grandes marcas para el sector empresarial, contamos con más de 23 años de experiencia en importación, exportación, venta y comercialización de productos, siempre respaldados por su calidad y certificado internacional, esto no has permitido brindar respaldo y garantía a cada uno de nuestros clientes.');
  const [diplayTitle, setDisplayTitle] = useState('¿Quienes somos?');

  const handleButtonClickText = (newText) => {
    setDisplayText(newText);
  };
  const handleButtonClickTitle = (newText) => {
    setDisplayTitle(newText);
  };

  useEffect(() => {
    setIsTransitioning(true);
    const timeoutId = setTimeout(() => {
      setIsTransitioning(false);
    }, 300); 
    return () => clearTimeout(timeoutId);
  }, [currentIndex]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <Navegadora />
      <div className="carousel-container relative">
        <button
          onClick={prevImage}
          className="prev-button cursor-pointer absolute top-2/4 left-2 size-10 bg-black bg-opacity-20 transition-all duration-300 transform hover:scale-105 hover:bg-opacity-50 text-white p-2"
        >
          {'<'}
        </button>
        <img
          src={images[currentIndex]}
          alt={`imagen ${currentIndex + 1}`}
          className={`carousel-image transition-all duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
        />
        <button
          onClick={nextImage}
          className="next-button absolute top-2/4 right-2 size-12 bg-black bg-opacity-20 transition-all duration-300 transform hover:scale-105 hover:bg-opacity-50 text-white p-2"
        >
          {'>'}
        </button>
      </div>
      <div className="flex w-full h-20 bg-slate-300 justify-center items-center">
            <div className="flex h-3/4 m-auto transition-all duration-300 transform hover:scale-105">
                <a href="#" className='flex flex-col h-full text-center'><img src={categoria1} alt="categoria" className='flex h-3/4' /><p className='flex h-1/4 text-center text-gray-600'>Monitor</p></a>
            </div>
            <div className="flex h-3/4 m-auto transition-all duration-300 transform hover:scale-105">
                <a href="#" className='flex flex-col h-full text-center'><img src={categoria2} alt="categoria" className='flex h-3/4' /><p className='flex h-1/4 text-center text-gray-600'>Camara</p></a>
            </div>
            <div className="flex h-3/4 m-auto transition-all duration-300 transform hover:scale-105">
                <a href="#" className='flex flex-col h-full text-center'><img src={categoria3} alt="categoria" className='flex h-3/4' /><p className='flex h-1/4 text-center text-gray-600'>Sellos</p></a>
            </div>
            <div className="flex h-3/4 m-auto transition-all duration-300 transform hover:scale-105">
                <a href="#" className='flex flex-col h-full text-center'><img src={categoria4} alt="categoria" className='flex h-3/4' /><p className='flex h-1/4 text-center text-gray-600'>Function</p></a>
            </div>
      </div>
      <div className="flex flex-col w-full h-96 bg-gray-200">
        <div className="flex w-full h-14">
            <p className='flex w-full justify-center items-center text-center text-blue-900 text-3xl'>{diplayTitle}</p>
        </div>
        <div className="flex w-96 h-60 mx-auto text-slate-700">
            <p className='flex w-full justify-center items-center text-center text-lg'>{displayText}</p>
        </div>
        <div className="flex w-full h-10 justify-center items-center">
            <button onClick={()=> {handleButtonClickText('Somos uno de los mayores distribuidores de grandes marcas para el sector empresarial, contamos con más de 23 años de experiencia en importación, exportación, venta y comercialización de productos, siempre respaldados por su calidad y certificado internacional, esto no has permitido brindar respaldo y garantía a cada uno de nuestros clientes.'), handleButtonClickTitle('¿Quienes somos?')}} className='flex mx-1 w-3 bg-white items-center h-2/6 rounded-full border border-solid border-gray-400 transition-all duration-300 transform hover:bg-slate-400'></button>
            <button onClick={()=> {handleButtonClickText('Distribuir al por mayor y al por menor productos y servicios, brindando disponibilidad permanente de stock, tecnología de avanzada, seguridad, seriedad y con facilidades de pago, satisfaciendo de manera oportuna las necesidades específicas de cada cliente.'), handleButtonClickTitle('Mision')}} className='flex mx-1 w-3 bg-white items-center h-2/6 rounded-full border border-solid border-gray-400  transition-all duration-300 transform hover:bg-slate-400'></button>
            <button onClick={()=> {handleButtonClickText('Crecer día a día en un enfoque de ganar-ganar fortaleciendo vínculos que nos permitan consolidarnos como la distribuidora de mayor respaldo en el mercado, entregando productos de calidad y avanzada tecnología, siendo competitivos con precios y responsabilidad.'), handleButtonClickTitle('Vision')}} className='flex mx-1 w-3 bg-white items-center h-2/6 rounded-full transition-all duration-300 transform border border-solid border-gray-400 hover:bg-slate-400'></button>
            <button onClick={()=> {handleButtonClickText('Satisfacer las necesidades de cada cliente. Proveer productos y servicios a nivel nacional e internacional. Transmitir nuestros valores y compromiso a través de nuestro servicio.Generar una relación sólida con cada uno de nuestros clientes, fabricantes, empleados y proveedores, garantizando una permanencia competitiva y rentabilidad justa'), handleButtonClickTitle('Objetivos')}} className='flex mx-1 w-3 bg-white items-center h-2/6 rounded-full border border-solid border-gray-400 transition-all duration-300 transform hover:bg-slate-400'></button>
        </div>
      </div>
      <FinalPage />
    </>
  );
}

export default Home;