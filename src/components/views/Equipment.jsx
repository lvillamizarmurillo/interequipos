import { Navegadora, FinalPage, CategoriaNav } from "../Global"
import pruebaImagen from '../../assets/prueba imagen.jpg'
import documento from '../../assets/documento.png'
import logoAzul from '../../assets/logoAzul.png'
import carro from '../../assets/carro.png'

function Equipment(){
    return(
        <>
            <Navegadora />
            
            <div className="flex my-5 flex-wrap w-full mb-8 border border-blue-600">
                <div className="flex w-full md:w-4/12">
                    <img src={pruebaImagen} alt="" className="flex px-20 w-full" />
                </div>
                <div className="flex flex-col w-full md:w-5/12">
                    <div className="flex w-full h-24">
                        <p className="flex mt-3 mx-2 text-blue-900">Titulo del mejor pc que hay y aparte es un ejemplo de un modelo en especifico y cuesta llenarlo</p>
                    </div>
                    <div className="flex w-full h-4/6 ">
                        <p className="flex mt-2 mx-2 h-full text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde sit voluptatibus, quis omnis, assumenda eligendi dolorem atque aliquid quo hic distinctio fugit nulla nam? Illum accusantium distinctio necessitatibus fugit porro?</p>
                    </div>
                    <div className="flex w-full items-end justify-center h-1/6">
                        <a href="#" className="flex w-11/12 h-3/6 rounded-md mb-2 bg-blue-950 transition-all duration-300 transform hover:scale-105 hover:bg-blue-800"><img src={documento} alt="documento" className="flex m-2" /><div className="flex w-full justify-center"><p className="flex items-center text-white">Ver pdf tecnico</p></div></a>
                    </div>
                </div>
                <div className="flex flex-col w-full md:w-3/12 md:border-l md:border-blue-700 md:my-4 ">
                    <div className="flex w-full md:h-2/6"><img src={logoAzul} alt="" className="flex w-full md:w-auto" /></div>
                    <div className="flex flex-col items-center justify-center w-full h-4/6">
                        <button className="flex justify-center w-11/12 mb-4 h-8 rounded bg-blue-950 transition duration-300 hover:scale-105 hover:bg-blue-800"><p className="flex items-center text-white"><img src={carro} className="flex w-8 mx-2" alt="carro" />Agregar al carrito</p></button>
                        <a href="#" className="flex w-11/12 h-8 mb-2 justify-center rounded bg-blue-950 transition duration-300 hover:scale-105 hover:bg-blue-800"><p className="flex items-center text-white">Cotizar</p></a>
                    </div>
                </div>
            </div>

            <FinalPage />
        </>
    )
} 

export default Equipment;