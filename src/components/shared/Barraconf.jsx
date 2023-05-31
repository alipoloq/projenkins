import React from "react";
import {useState} from "react"
import { RiCloseFill, RiDeleteBin6Line } from "react-icons/ri";
import ListadoPaciente from "./ListadoPaciente";

const Barraconf = (props) => {
  const { verCita, SetCita } = props;
  
  const [pacientes, setPacientes] = useState([]);
  //extraer valores con la tarjeta para editar y eliminar
  const [paciente, setPaciente] = useState({});
  //ELiminar paciente
  const eliminarPaciente = id =>{
    //console.log('Eliminando paciente',id);
    const pacientesActualizados = pacientes.filter(paciente=>
      paciente.id !== id);
    setPacientes(pacientesActualizados)
  }
  return (
    <div
      className={`lg:col-span-2 fixed top-0 bg-[#1F1D2B] w-full lg:w-96 lg:right-0 h-full transition-all z-50 ${
        verCita ? "right-0" : "-right-full"
      }`}
    >
      {/* Orders */}
      <div className="relative pt-16 lg:pt-8 text-gray-300 p-8 h-full">
        <RiCloseFill
          onClick={() => SetCita(false)}
          className="lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl"
        />
        <h1 className="text-2xl text-center my-4">TUS CITAS AGENDADAS </h1>
        
        {/* Pills */}
      
        {/* Car */}
        <div>
        
          {/* Products */}
          <div className="h-[400px] md:h-[700px] lg:h-[540px] ">
            {/* Product */}
            <div className="bg-[#262837] rounded-xl mb-4 overflow-y-auto h-full">
              <div className="grid grid-cols-1 mb-5">

              <ListadoPaciente 
                pacientes = {pacientes}
                setPaciente = {setPaciente}
                eliminarPaciente = {eliminarPaciente}
              />

                
              </div>
            </div>
          </div>
        </div>
        {/* Submit payment */}

      </div>
    </div>
  );
};

export default Barraconf;