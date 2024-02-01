import logo from '../assets/interequiposLogo.png'
import carro from '../assets/carro.png'
import lupa from '../assets/lupa.png'
import menu from '../assets/menu.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import whatsappBlanco from '../assets/whatsappBlanco.png'
import twitterCalidadBlanco from '../assets/twitterCalidadBlanco.png'
import instagramCalidadBlanco from '../assets/instagramCalidadBlanco.png'
import facebookCalidadBlanco from '../assets/facebookCalidadBlanco.png'
import whatsappCalidadBlanco from '../assets/whatsappCalidadBlanco.png'
import celular from '../assets/celular.png'
import correo from '../assets/correo.png'
import ubicacion from '../assets/ubicacion.png'
import React, { useState } from 'react';


function Navegadora() {

    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };
    return (
        <>
            <div className="flex flex-wrap w-5/5 h-34 bg-blue-950 md:h-20">
                <div className='flex w-10/12 justify-center md:w-3/12 md:h-full  md:order-1 h-20 order-1'>
                    <a href="http://localhost:5173/"><img className='flex w-full h-full m-auto transition-all duration-300 transform hover:scale-105' src={logo} alt="logo" /></a>
                </div>
                <div className="flex w-full md:w-8/12 md:h-full  md:order-2 h-12 order-3">
                    <div className="flex m-auto  w-10/12 h-3/5 md:w-full md:h-2/5">
                        <input placeholder='Buscar producto' type="text" className='flex outline-none w-11/12 p-3 rounded-l-lg transition-all duration-300 transform hover:bg-gray-200' />
                        <button className='flex w-1/12 rounded-r-lg bg-lime-400 transition-all duration-300 transform hover:bg-lime-600  items-center justify-center'><img src={lupa} alt="lupa" className='flex w-8/12 md:w-4/12' /></button>
                    </div>
                </div>
                <div className="flex w-2/12 md:w-1/12 md:h-full  md:order-3 h-20 order-2">
                    <button className='flex w-8/12 h-16 m-auto justify-center transition-all duration-300 transform hover:scale-105'><img src={carro} alt="carro" className='flex h-full' /></button>
                </div>
            </div>
            <div className="flex w-full h-10 bg-gray-200">
                <button className='lg:hidden flex w-full justify-center h-auto items-center mx-auto transition-all duration-300 transform hover:scale-105' onClick={toggleMenu}>
                    <img src={menu} alt="menu" className='flex w-8 p-1' />
                    <p className='flex ml-1'>MENU</p>
                </button>
                <div className="hidden lg:flex w-9/12 bg-gray-230 px-2">
                    <a href="http://localhost:5173/" className='flex w-full justify-center items-center h-10 transition-all duration-300 transform hover:scale-95 hover:bg-slate-300'>Inicio</a>
                    <a href="http://localhost:5173/productos" className='flex w-full justify-center items-center h-10 transition-all duration-300 transform hover:scale-95 hover:bg-slate-300'>Productos</a>
                    <a href="http://localhost:5173/productos" className='flex w-full justify-center items-center h-10 transition-all duration-300 transform hover:scale-95 hover:bg-slate-300'>Categorias</a>
                    <a href="#" className='flex w-full justify-center items-center h-10 transition-all duration-300 transform hover:scale-95 hover:bg-slate-300 '>Contactanos</a>
                </div>
                <div className="hidden lg:flex w-3/12 bg-gray-200 px-2 justify-end">
                    <a href="https://www.facebook.com/profile.php?id=100072611583125&mibextid=ZbWKwL" target="_blank" className='flex w-16 justify-center items-center h-10 transition-all duration-300 transform hover:scale-105 '><img src={facebook} className='flex h-3/4' alt="facebook" /></a>
                    <a href="#" target="_blank" className='flex w-16 justify-center items-center h-10 transition-all duration-300 transform hover:scale-105 '><img src={twitter} className='flex h-3/4' alt="twitter" /></a>
                    <a href="https://www.instagram.com/Interequiposamerica/" target="_blank" className='flex w-16 justify-center items-center h-10 transition-all duration-300 transform hover:scale-105  '><img src={instagram} className='flex h-3/4' alt="instagram" /></a>
                </div>
            </div>
            {menuVisible && (
                <div className="flex flex-col w-full justify-center h-auto items-center mx-auto bg-slate-200">
                    <a href="http://localhost:5173/" className='flex w-full justify-center items-center h-10 border-b-2 border-solid border-gray-300 transition-all duration-300 transform hover:scale-105 hover:bg-slate-300'>Inicio</a>
                    <a href="http://localhost:5173/productos" className='flex w-full justify-center items-center h-10 border-b-2 border-solid border-gray-300 transition-all duration-300 transform hover:scale-105 hover:bg-slate-300'>Categorias</a>
                    <a href="#" className='flex w-full justify-center items-center h-10 border-b-2 border-solid border-gray-300 transition-all duration-300 transform hover:scale-105 hover:bg-slate-300'>Contactanos</a>
                </div>
            )}
        </>
    )
}

function FinalPage() {

    return (
        <>
            <div className="flex flex-col md:flex-row w-full bg-blue-950">
                <div className="flex flex-col my-2 pl-2 w-full md:2/6 h-68">
                    <p className="flex w-full h-10 items-center text-white text-xl border-b border-white">Comunicate con nosotros</p>
                    <p className="flex mt-4 m-2 text-white"><img src={celular} className='flex w-7 h-7' alt="celular" />(607) 687 9550</p>
                    <p className="flex m-2 text-white"><img src={whatsappBlanco} className='flex w-7 h-7' alt="celular" />316 493 3049</p>
                    <p className="flex m-2 text-white"><img src={whatsappBlanco} className='flex w-7 h-7' alt="celular" />317 515 9212</p>
                    <p className="flex m-2 text-white"><img src={ubicacion} className='flex w-7 h-7' alt="celular" /> Cra. 33 No 48 -109 Oficina 310 C.C. Grtamira</p>
                    <p className="flex m-2 text-white"><img src={correo} className='flex w-7 h-7' alt="celular" />admon.interequipos@gmail.com</p>
                </div>
                <div className="flex flex-col my-2 pl-2 w-full md:2/6 h-64">
                    <p className="flex w-full h-10 items-center text-white text-xl border-b border-white">Busca tu equipo</p>
                    <a href="http://localhost:5173/productos" className='flex ml-4 my-2 mt-4'><p className='flex text-white transition-all duration-300 transform hover:text-slate-500'>Monitores</p></a>
                    <a href="http://localhost:5173/productos" className='flex ml-4 my-2'><p className='flex text-white transition-all duration-300 transform hover:text-slate-500'>Camaras</p></a>
                    <a href="http://localhost:5173/productos" className='flex ml-4 my-2'><p className='flex text-white transition-all duration-300 transform hover:text-slate-500'>Sellos</p></a>
                    <a href="http://localhost:5173/productos" className='flex ml-4 my-2'><p className='flex text-white transition-all duration-300 transform hover:text-slate-500'>Oficina</p></a>
                    <a href="http://localhost:5173/productos" className='flex ml-4 my-2'><p className='flex text-white transition-all duration-300 transform hover:text-slate-500'>Contadores</p></a>
                </div>
                <div className="flex flex-col my-2 pl-2 w-full md:2/6 h-64">
                    <p className="flex w-full h-10 items-center text-white text-xl border-b border-white">Redes sociales</p>
                    <div className="flex w-full h-48">
                        <div className="flex w-1/4 items-center justify-center"><a href="https://www.facebook.com/profile.php?id=100072611583125&mibextid=ZbWKwL" target='_blank'><img src={facebookCalidadBlanco} alt="whatsappCalidadBlanco" className='w-20 h-20 transition-all duration-300 transform hover:scale-105' /></a></div>
                        <div className="flex w-1/4 items-center justify-center"><a href="https://wa.me/message/4IHEOLNB2UWSE1" target='_blank'><img src={whatsappCalidadBlanco} alt="whatsappCalidadBlanco" className='w-20 h-20 transition-all duration-300 transform hover:scale-105' /></a></div>
                        <div className="flex w-1/4 items-center justify-center"><a href="https://www.instagram.com/Interequiposamerica/" target='_blank'><img src={instagramCalidadBlanco} alt="whatsappCalidadBlanco" className='w-20 h-20 transition-all duration-300 transform hover:scale-105' /></a></div>
                        <div className="flex w-1/4 items-center justify-center"><a href="#" target='_blank'><img src={twitterCalidadBlanco} alt="whatsappCalidadBlanco" className='w-20 h-20 transition-all duration-300 transform hover:scale-105' /></a></div>
                    </div>
                </div>
            </div>
        </>
    )
}

function CategoriaNav() {

    return (
        <>
            <div className="flex absolute z-40 w-4/12 md:relative md:flex flex-col md:w-full h-full bg-slate-200">
                <div className="flex flex-col w-full">
                    <a href="#" className="flex h-14 border-b-2 mx-2 border-stone-300 items-center transition duration-300 transform hover:scale-105 hover:bg-stone-300"><p className="text-stone-400 ml-3">Camaras</p></a>
                    <a href="#" className="flex h-14 border-b-2 mx-2 border-stone-300 items-center transition duration-300 transform hover:scale-105 hover:bg-stone-300"><p className="text-stone-400 ml-3">Camaras</p></a>
                    <a href="#" className="flex h-14 border-b-2 mx-2 border-stone-300 items-center transition duration-300 transform hover:scale-105 hover:bg-stone-300"><p className="text-stone-400 ml-3">Camaras</p></a>
                    <a href="#" className="flex h-14 border-b-2 mx-2 border-stone-300 items-center transition duration-300 transform hover:scale-105 hover:bg-stone-300"><p className="text-stone-400 ml-3">Camaras</p></a>
                    <a href="#" className="flex h-14 border-b-2 mx-2 border-stone-300 items-center transition duration-300 transform hover:scale-105 hover:bg-stone-300"><p className="text-stone-400 ml-3">Camaras</p></a>
                    <a href="#" className="flex h-14 border-b-2 mx-2 border-stone-300 items-center transition duration-300 transform hover:scale-105 hover:bg-stone-300"><p className="text-stone-400 ml-3">Camaras</p></a>
                </div>
            </div>
        </>
    )
}

export {
    Navegadora,
    FinalPage,
    CategoriaNav
};