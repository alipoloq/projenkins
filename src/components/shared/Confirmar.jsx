import React from 'react'
import {RiCloseFill, RiDeleteBin6Line } from "react-icons/ri";


const Confirmar = (props) => {
    const {verCita, SetCita} = props;
    
  return (
    <div className={` lg:col-span-2 fixed lg:static right-0 top-0 bg-[#1F1D2B] w-full h-full transition-all 
      ${verCita ?"right-0":"-right-full"}`}> 

      <div className="relative pt-16 lg:pt-8 text-gray-300 p-8 h-ful">
        <RiCloseFill onClick={() => SetCita(false)} 
        className="lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl"/>
        <h1 className="text-2xl mt-4">Confirmacion</h1>        
    
        {/* confirmacion de cita */}

        <div>     
          <div className="grid grid-cols-6 mb-4 p-4">
            <h5 className="col-span-4">reserva</h5>
            <h5>fecha</h5>
          </div>
            {/* confirmacion del servicio*/}
      
          <div className="bg-[#262837] p-4 rounded-xl mb-4">
            <div className="grid grid-cols-6 mb-4">
              {/* tarjeta*/}
              <div className="col-span-4 flex items-center gap-3">
                <img src="SALON1.png" className="w-10 h-10 object-cover" />
                <div>
                  <h5 className="text-sm">look neiva</h5>
                  <p className="text-xs text-gray-500">servicio de cejas</p>
                </div>
              </div>
                {/* cuando */}
              <div>
                <span>12/04</span>
              </div>
            </div>

            {/* botton confirmar */}
            <div className=" flex justify-center ">
              <button className="bg-[#1F1D2B] py-2 px-4 rounded-lg  "> 
                Agendar 
              </button>
              <div>
                <button className="border border-red-500 p-3 rounded-lg">
                  <RiDeleteBin6Line className="text-red-500" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Confirmar