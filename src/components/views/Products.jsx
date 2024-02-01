import { Navegadora, FinalPage, CategoriaNav } from "../Global"
import pruebaImagen from '../../assets/prueba imagen.jpg'
import carro from '../../assets/carro.png'
import React, { useState } from 'react';

function Productos() {
    const [showCategoriaNav, setShowCategoriaNav] = useState(true);

    const toggleCategoriaNav = () => {
        setShowCategoriaNav(!showCategoriaNav);
    };

    return (
        <>
            <Navegadora />
            <div className="flex w-full h-auto mb-8">
                <div className={`w-auto md:w-2/12 ${showCategoriaNav ? 'block' : 'hidden md:hidden'}`}>
                    <CategoriaNav />
                </div>
                <div className="flex flex-wrap w-auto  md:w-10/12 h-full justify-center md:justify-start bg-stone-100">
                    <div className="flex w-56 h-96 mt-5 mx-3 bg-blue-950 transition duration-300 transform hover:scale-105">
                        <a href="http://localhost:5173/equipos" className="fledx flex-col h-full">
                            <img className="flex w-56 h-60" src={pruebaImagen} alt="foto" />
                            <p className="flex text-sm m-2 h-14 text-white">Computador gaming z3Plus-24kilates 12ava generacion plus hboMAX</p>
                            <div className="flex flex-col h-20 items-center rounded bg-blue-950">
                                <button className="flex w-52 mb-1 h-8 rounded bg-lime-400 transition duration-300 hover:bg-lime-600"><p className="flex items-center text-white"><img src={carro} className="flex w-8 mx-2" alt="carro" />Agregar al carrito</p></button>
                                <a href="http://localhost:5173/equipos" className="flex w-52 h-8 mb-2 justify-center rounded bg-lime-400 transition duration-300 hover:bg-lime-600"><p className="flex items-center text-white">Especificacion</p></a>
                            </div>
                        </a>
                    </div>
                    <div className="flex w-56 h-96 mt-5 mx-3 bg-blue-950 transition duration-300 transform hover:scale-105">
                        <a href="http://localhost:5173/equipos" className="fledx flex-col h-full">
                            <img className="flex w-56 h-60" src={pruebaImagen} alt="foto" />
                            <p className="flex text-sm m-2 h-14 text-white">Computador gaming z3Plus-24kilates 12ava generacion plus hboMAX</p>
                            <div className="flex flex-col h-20 items-center rounded bg-blue-950">
                                <button className="flex w-52 mb-1 h-8 rounded bg-lime-400 transition duration-300 hover:bg-lime-600"><p className="flex items-center text-white"><img src={carro} className="flex w-8 mx-2" alt="carro" />Agregar al carrito</p></button>
                                <a href="http://localhost:5173/equipos" className="flex w-52 h-8 mb-2 justify-center rounded bg-lime-400 transition duration-300 hover:bg-lime-600"><p className="flex items-center text-white">Especificacion</p></a>
                            </div>
                        </a>
                    </div>
                    <div className="flex w-56 h-96 mt-5 mx-3 bg-blue-950 transition duration-300 transform hover:scale-105">
                        <a href="http://localhost:5173/equipos" className="fledx flex-col h-full">
                            <img className="flex w-56 h-60" src={pruebaImagen} alt="foto" />
                            <p className="flex text-sm m-2 h-14 text-white">Computador gaming z3Plus-24kilates 12ava generacion plus hboMAX</p>
                            <div className="flex flex-col h-20 items-center rounded bg-blue-950">
                                <button className="flex w-52 mb-1 h-8 rounded bg-lime-400 transition duration-300 hover:bg-lime-600"><p className="flex items-center text-white"><img src={carro} className="flex w-8 mx-2" alt="carro" />Agregar al carrito</p></button>
                                <a href="http://localhost:5173/equipos" className="flex w-52 h-8 mb-2 justify-center rounded bg-lime-400 transition duration-300 hover:bg-lime-600"><p className="flex items-center text-white">Especificacion</p></a>
                            </div>
                        </a>
                    </div>
                    <div className="flex w-56 h-96 mt-5 mx-3 bg-blue-950 transition duration-300 transform hover:scale-105">
                        <a href="http://localhost:5173/equipos" className="fledx flex-col h-full">
                            <img className="flex w-56 h-60" src={pruebaImagen} alt="foto" />
                            <p className="flex text-sm m-2 h-14 text-white">Computador gaming z3Plus-24kilates 12ava generacion plus hboMAX</p>
                            <div className="flex flex-col h-20 items-center rounded bg-blue-950">
                                <button className="flex w-52 mb-1 h-8 rounded bg-lime-400 transition duration-300 hover:bg-lime-600"><p className="flex items-center text-white"><img src={carro} className="flex w-8 mx-2" alt="carro" />Agregar al carrito</p></button>
                                <a href="http://localhost:5173/equipos" className="flex w-52 h-8 mb-2 justify-center rounded bg-lime-400 transition duration-300 hover:bg-lime-600"><p className="flex items-center text-white">Especificacion</p></a>
                            </div>
                        </a>
                    </div>
                    <div className="flex w-56 h-96 mt-5 mx-3 bg-blue-950 transition duration-300 transform hover:scale-105">
                        <a href="http://localhost:5173/equipos" className="fledx flex-col h-full">
                            <img className="flex w-56 h-60" src={pruebaImagen} alt="foto" />
                            <p className="flex text-sm m-2 h-14 text-white">Computador gaming z3Plus-24kilates 12ava generacion plus hboMAX</p>
                            <div className="flex flex-col h-20 items-center rounded bg-blue-950">
                                <button className="flex w-52 mb-1 h-8 rounded bg-lime-400 transition duration-300 hover:bg-lime-600"><p className="flex items-center text-white"><img src={carro} className="flex w-8 mx-2" alt="carro" />Agregar al carrito</p></button>
                                <a href="http://localhost:5173/equipos" className="flex w-52 h-8 mb-2 justify-center rounded bg-lime-400 transition duration-300 hover:bg-lime-600"><p className="flex items-center text-white">Especificacion</p></a>
                            </div>
                        </a>
                    </div>
                    <div className="flex w-56 h-96 mt-5 mx-3 bg-blue-950 transition duration-300 transform hover:scale-105">
                        <a href="http://localhost:5173/equipos" className="fledx flex-col h-full">
                            <img className="flex w-56 h-60" src={pruebaImagen} alt="foto" />
                            <p className="flex text-sm m-2 h-14 text-white">Computador gaming z3Plus-24kilates 12ava generacion plus hboMAX</p>
                            <div className="flex flex-col h-20 items-center rounded bg-blue-950">
                                <button className="flex w-52 mb-1 h-8 rounded bg-lime-400 transition duration-300 hover:bg-lime-600"><p className="flex items-center text-white"><img src={carro} className="flex w-8 mx-2" alt="carro" />Agregar al carrito</p></button>
                                <a href="http://localhost:5173/equipos" className="flex w-52 h-8 mb-2 justify-center rounded bg-lime-400 transition duration-300 hover:bg-lime-600"><p className="flex items-center text-white">Especificacion</p></a>
                            </div>
                        </a>
                    </div>
                    <div className="flex w-56 h-96 mt-5 mx-3 bg-blue-950 transition duration-300 transform hover:scale-105">
                        <a href="http://localhost:5173/equipos" className="fledx flex-col h-full">
                            <img className="flex w-56 h-60" src={pruebaImagen} alt="foto" />
                            <p className="flex text-sm m-2 h-14 text-white">Computador gaming z3Plus-24kilates 12ava generacion plus hboMAX</p>
                            <div className="flex flex-col h-20 items-center rounded bg-blue-950">
                                <button className="flex w-52 mb-1 h-8 rounded bg-lime-400 transition duration-300 hover:bg-lime-600"><p className="flex items-center text-white"><img src={carro} className="flex w-8 mx-2" alt="carro" />Agregar al carrito</p></button>
                                <a href="http://localhost:5173/equipos" className="flex w-52 h-8 mb-2 justify-center rounded bg-lime-400 transition duration-300 hover:bg-lime-600"><p className="flex items-center text-white">Especificacion</p></a>
                            </div>
                        </a>
                    </div>
                    <div className="flex w-56 h-96 mt-5 mx-3 bg-blue-950 transition duration-300 transform hover:scale-105">
                        <a href="http://localhost:5173/equipos" className="fledx flex-col h-full">
                            <img className="flex w-56 h-60" src={pruebaImagen} alt="foto" />
                            <p className="flex text-sm m-2 h-14 text-white">Computador gaming z3Plus-24kilates 12ava generacion plus hboMAX</p>
                            <div className="flex flex-col h-20 items-center rounded bg-blue-950">
                                <button className="flex w-52 mb-1 h-8 rounded bg-lime-400 transition duration-300 hover:bg-lime-600"><p className="flex items-center text-white"><img src={carro} className="flex w-8 mx-2" alt="carro" />Agregar al carrito</p></button>
                                <a href="http://localhost:5173/equipos" className="flex w-52 h-8 mb-2 justify-center rounded bg-lime-400 transition duration-300 hover:bg-lime-600"><p className="flex items-center text-white">Especificacion</p></a>
                            </div>
                        </a>
                    </div>
                </div>
                <button
                    className="md:hidden fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={toggleCategoriaNav}
                    >
                    {showCategoriaNav ? 'Ocultar' : 'Mostrar'}
                </button>
            </div>
            <FinalPage />
        </>
    )
}

export default Productos;