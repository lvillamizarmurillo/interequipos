import logo from '../assets/interequiposLogo.png'
import carro from '../assets/carro.png'
import lupa from '../assets/lupa.png'
import menu from '../assets/menu.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import React, { useState } from 'react';


function Navegadora() {

    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };
    return (
        <>
            <div className="flex flex-wrap w-5/5 h-34 bg-blue-900 sm:h-20">
                <div className='flex w-10/12 justify-center sm:w-3/12 sm:h-full  sm:order-1 h-20 order-1'>
                    <a href="#"><img className='flex w-full h-full m-auto transition-all duration-300 transform hover:scale-105' src={logo} alt="logo" /></a>
                </div>
                <div className="flex w-full sm:w-8/12 sm:h-full  sm:order-2 h-12 order-3">
                    <div className="flex m-auto  w-10/12 h-3/5 sm:w-full sm:h-2/5">
                        <input placeholder='Buscar producto' type="text" className='flex outline-none w-11/12 p-3 rounded-l-lg transition-all duration-300 transform hover:bg-gray-200' />
                        <button className='flex w-1/12 rounded-r-lg bg-lime-400 transition-all duration-300 transform hover:bg-lime-600  items-center justify-center'><img src={lupa} alt="lupa" className='flex w-8/12 sm:w-4/12' /></button>
                    </div>
                </div>
                <div className="flex w-2/12 sm:w-1/12 sm:h-full  sm:order-3 h-20 order-2">
                    <button className='flex w-8/12 h-16 m-auto justify-center transition-all duration-300 transform hover:scale-105'><img src={carro} alt="carro" className='flex h-full' /></button>
                </div>
            </div>
            <div className="flex w-full h-10 bg-gray-200">
                <button className='lg:hidden flex w-full justify-center h-auto items-center mx-auto transition-all duration-300 transform hover:scale-105' onClick={toggleMenu}>
                    <img src={menu} alt="menu" className='flex w-8 p-1' />
                    <p className='flex ml-1'>MENU</p>
                </button>
                <div className="hidden lg:flex w-9/12 bg-gray-230 px-2">
                    <a href="#" className='flex w-full justify-center items-center h-10 transition-all duration-300 transform hover:scale-95 hover:bg-slate-300'>Inicio</a>
                    <a href="#" className='flex w-full justify-center items-center h-10 transition-all duration-300 transform hover:scale-95 hover:bg-slate-300'>Productos</a>
                    <a href="#" className='flex w-full justify-center items-center h-10 transition-all duration-300 transform hover:scale-95 hover:bg-slate-300'>Categorias</a>
                    <a href="#" className='flex w-full justify-center items-center h-10 transition-all duration-300 transform hover:scale-95 hover:bg-slate-300 '>Contactanos</a>
                </div>
                <div className="hidden lg:flex w-3/12 bg-gray-200 px-2 justify-end">
                    <a href="#" className='flex w-16 justify-center items-center h-10 transition-all duration-300 transform hover:scale-105 '><img src={facebook} className='flex h-3/4' alt="facebook" /></a>
                    <a href="#" className='flex w-16 justify-center items-center h-10 transition-all duration-300 transform hover:scale-105 '><img src={twitter} className='flex h-3/4' alt="twitter" /></a>
                    <a href="#" className='flex w-16 justify-center items-center h-10 transition-all duration-300 transform hover:scale-105  '><img src={instagram} className='flex h-3/4' alt="instagram" /></a>
                </div>
            </div>
            {menuVisible && (
                <div className="flex flex-col w-full justify-center h-auto items-center mx-auto bg-slate-200">
                    <a href="#" className='flex w-full justify-center items-center h-10 border-b-2 border-solid border-gray-300 transition-all duration-300 transform hover:scale-105 hover:bg-slate-300'>Inicio</a>
                    <a href="#" className='flex w-full justify-center items-center h-10 border-b-2 border-solid border-gray-300 transition-all duration-300 transform hover:scale-105 hover:bg-slate-300'>Categorias</a>
                    <a href="#" className='flex w-full justify-center items-center h-10 border-b-2 border-solid border-gray-300 transition-all duration-300 transform hover:scale-105 hover:bg-slate-300'>Contactanos</a>
                </div>
            )}
        </>
    )
}

export default Navegadora;