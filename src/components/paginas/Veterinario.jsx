import React from 'react'
import { Link } from 'react-router-dom'

export const Veterinario = () => {
  return (
    <div>


<div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16" >
               {/*tarjetas  */}
                <div className="bg-[#1F1D2B] p-12 rounded-xl flex flex-col items-center gap-1 text-gray-300 text-center">
                  <img src="./public/VETER1.png" className="w-40 object-cover -mt-20 shadow-2xl rounded-full"/>
                  <p className="text-xl uppercase">Pet Clinic Clínica Veterinaria y Spa</p>
                  <span className="text-gray-400">Especialista para tus perritos</span>
                  <p className="text-gray-600">estamos ubicados Calle 18A N° 5A-07</p>
                  <Link to='/Agendar'>
                  <button className="flex items-center gap-4 text-gray-300 bg-[#ec7c6a] py-2 px-4 rounded-lg grid-cols-4">
                  AGENDAR:
                  </button>     
                  </Link>
                </div>  

                <div className="bg-[#1F1D2B] p-12 rounded-xl flex flex-col items-center gap-1 text-gray-300 text-center">
                  <img src="./public/VETER2.png" className="w-40 object-cover -mt-20 shadow-2xl rounded-full"/>
                  <p className="text-xl uppercase">Clínica Veterinaria SISBEN </p>
                  <span className="text-gray-400">Especialista para tus perritos</span>
                  <p className="text-gray-600">estamos ubicados Cl. 25 Sur #18-03 </p>
                  <Link to='/Agendar'>
                  <button className="flex items-center gap-4 text-gray-300 bg-[#ec7c6a] py-2 px-4 rounded-lg grid-cols-4">
                  AGENDAR:
                  </button>     
                  </Link>
                </div>  

                <div className="bg-[#1F1D2B] p-12 rounded-xl flex flex-col items-center gap-1 text-gray-300 text-center">
                  <img src="./public/VETER3.png" className="w-40 object-cover -mt-20 shadow-2xl rounded-full"/>
                  <p className="text-xl uppercase">PALOROSA NAILS NEIVA </p>
                  <span className="text-gray-400">Especialista en relajar a tu perro</span>
                  <p className="text-gray-600">estamos ubicados Cl. 19 #6-12</p>
                  <Link to='/Agendar'>
                  <button className="flex items-center gap-4 text-gray-300 bg-[#ec7c6a] py-2 px-4 rounded-lg grid-cols-4">
                  AGENDAR:
                  </button>     
                  </Link>
                </div> 

                <div className="bg-[#1F1D2B] p-12 rounded-xl flex flex-col items-center gap-1 text-gray-300 text-center">
                  <img src="./public/VETER4.png" className="w-40 object-cover -mt-20 shadow-2xl rounded-full"/>
                  <p className="text-xl"> Dog's Garden Club</p>
                  <span className="text-gray-400">Especialista para entrar a tu perro</span>
                  <p className="text-gray-600">estamos ubicados  Km 5 via Neiva - Fortalecillas</p>
                  <Link to='/Agendar'>
                  <button className="flex items-center gap-4 text-gray-300 bg-[#ec7c6a] py-2 px-4 rounded-lg grid-cols-4">
                  AGENDAR:
                  </button>     
                  </Link>
                </div> 

                <div className="bg-[#1F1D2B] p-12 rounded-xl flex flex-col items-center gap-1 text-gray-300 text-center">
                  <img src="./public/VETER5.png" className="w-40 object-cover -mt-20 shadow-2xl rounded-full"/>
                  <p className="text-xl uppercase"> escuela y hotel canino neiva</p>
                  <span className="text-gray-400">Especialista en entrenamiento</span>
                  <p className="text-gray-600">estamos ubicados Cl. 6 #14a-72</p>
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
