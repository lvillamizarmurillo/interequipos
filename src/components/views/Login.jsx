import {Navegadora} from '../Global.jsx';

function Login() {
  return (
    <>
      <Navegadora />
      
      <div className="flex w-full pb-16 bg-slate-800">
        <form className="flex flex-col mx-auto mt-16 h-96 gap-10 bg-gray-950 p-8 border border-gray-800 rounded-lg text-white text-center text-2xl">
            <div className="font-bold mb-4">Sign Up</div>
            <input
                type="text"
                className="h-10 outline-none border-2 border-lime-600 bg-transparent px-4 py-2 rounded-md transition-colors duration-500 text-slate-300 text-lg focus:bg-gray-800"
                placeholder="Email"
            />
            <input
                type="text"
                className="h-10 outline-none border-2 border-lime-600 bg-transparent px-4 py-2 rounded-md transition-colors duration-500 text-slate-300 text-lg focus:bg-gray-800"
                placeholder="Password"
            />
            <button
                className="w-full text-white transition-colors duration-500 text-lg outline-none border-none h-12 rounded-md bg-lime-500 self-end hover:bg-lime-600"
            >
                Ingresar
            </button>
        </form>
      </div>

    </>
  );
}

export default Login;