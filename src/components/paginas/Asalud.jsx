import { Link } from "react-router-dom"

export const Asalud = () => {
  return (
    <div>
      

      <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16" >
               {/*tarjetas  */}
                <div className="bg-[#1F1D2B] p-12 rounded-xl flex flex-col items-center gap-1 text-gray-300 text-center">
                  <img src="./public/SALUD1.png" className="w-40 object-cover -mt-20 shadow-2xl rounded-full"/>
                  <p className="text-xl uppercase">previred colombia</p>
                  <span className="text-gray-400">Especialista en la salud</span>
                  <p className="text-gray-600">estamos ubicados Cll 18A No 5A - 37</p>
                  <Link to='/Agendar'>
                  <button className="flex items-center gap-4 text-gray-300 bg-[#ec7c6a] py-2 px-4 rounded-lg grid-cols-4">
                  AGENDAR: 
                  </button>     
                  </Link>
                </div>  

                <div className="bg-[#1F1D2B] p-12 rounded-xl flex flex-col items-center gap-1 text-gray-300 text-center">
                  <img src="./public/SALUD2.png" className="w-40 object-cover -mt-20 shadow-2xl rounded-full"/>
                  <p className="text-xl uppercase">sonrie </p>
                  <span className="text-gray-400">Especialista en higiene oral</span>
                  <p className="text-gray-600">estamos ubicados Cl. 7 #6-7 </p>
                  <Link to='/Agendar'>
                  <button className="flex items-center gap-4 text-gray-300 bg-[#ec7c6a] py-2 px-4 rounded-lg grid-cols-4">
                  AGENDAR:
                  </button>     
                  </Link>
                </div>  

                <div className="bg-[#1F1D2B] p-12 rounded-xl flex flex-col items-center gap-1 text-gray-300 text-center">
                  <img src="./public/SALUD3.png" className="w-40 object-cover -mt-20 shadow-2xl rounded-full"/>
                  <p className="text-xl uppercase">salud vital ips sas </p>
                  <span className="text-gray-400">certificados en salud ocupacional</span>
                  <p className="text-gray-600">estamos ubicados Cra. 7a #17 A 25</p>
                  <Link to='/Agendar'>
                  <button className="flex items-center gap-4 text-gray-300 bg-[#ec7c6a] py-2 px-4 rounded-lg grid-cols-4">
                  AGENDAR:
                  </button>
                  </Link>
                </div> 

                <div className="bg-[#1F1D2B] p-12 rounded-xl flex flex-col items-center gap-1 text-gray-300 text-center">
                  <img src="./public/SALUD4.png" className="w-40 object-cover -mt-20 shadow-2xl rounded-full"/>
                  <p className="text-xl uppercase">optica roa </p>
                  <span className="text-gray-400">Especialista en tus ojos</span>
                  <p className="text-gray-600">estamos ubicados Carrera 7 # 7-46</p>
                  <Link to='/Agendar'>
                  <button className="flex items-center gap-4 text-gray-300 bg-[#ec7c6a] py-2 px-4 rounded-lg grid-cols-4">
                  AGENDAR:
                  </button>     
                  </Link>
                </div> 

                
                </div>
    </div>
  )
}
