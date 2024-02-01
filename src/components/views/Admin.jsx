import React, { useState } from 'react';
import { Navegadora, CambiarInfo, AgregarCategoria, AgregarProducto, EliminarCategoria, EliminarProducto } from '../Global.jsx';

function Admin() {
  const [seleccionado, setSeleccionado] = useState(null);

  const renderContenido = () => {
    switch (seleccionado) {
      case 'CambiarInfo':
        return <CambiarInfo />;
      case 'AgregarCategoria':
        return <AgregarCategoria />;
      case 'AgregarProducto':
        return <AgregarProducto />;
      case 'EliminarCategoria':
        return <EliminarCategoria />;
      case 'EliminarProducto':
        return <EliminarProducto />;
      default:
        return null;
    }
  };

  return (
    <>
      <Navegadora />
      
      <div className="flex w-full bg-slate-800">
        <div className="flex w-full h-12 bg-slate-300">
          <button className="flex w-1/5 items-center justify-center transition-all duration-300 hover:bg-slate-400" onClick={() => setSeleccionado('CambiarInfo')}>
            <p className="flex text-xl text-slate-800">Cambiar Info</p>
          </button>
          <button className="flex w-1/5 items-center justify-center transition-all duration-300 hover:bg-slate-400" onClick={() => setSeleccionado('AgregarCategoria')}>
            <p className="flex text-xl text-slate-800">+ Categoria</p>
          </button>
          <button className="flex w-1/5 items-center justify-center transition-all duration-300 hover:bg-slate-400" onClick={() => setSeleccionado('AgregarProducto')}>
            <p className="flex text-xl text-slate-800">+ Producto</p>
          </button>
          <button className="flex w-1/5 items-center justify-center transition-all duration-300 hover:bg-slate-400" onClick={() => setSeleccionado('EliminarCategoria')}>
            <p className="flex text-xl text-slate-800">- Categoria</p>
          </button>
          <button className="flex w-1/5 items-center justify-center transition-all duration-300 hover:bg-slate-400" onClick={() => setSeleccionado('EliminarProducto')}>
            <p className="flex text-xl text-slate-800">- Producto</p>
          </button>
        </div>
      </div>

      <div className="flex w-full bg-gray-950">
        {renderContenido()}
      </div>
    </>
  );
}

export default Admin;
