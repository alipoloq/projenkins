import React from 'react'
import {RiSearch2Line } from "react-icons/ri"
import { Link } from "react-router-dom";





const Header = () => {
  return (
    <div>
 <header>
    {/* titulo de la  pagina */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl text-gray-300">PROGRAMA TU CITA</h1>
          
        </div>
        <form >
            <div className="w-full relative">
              <RiSearch2Line className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"/>
              <input type="text" className="bg-[#1F1D2B] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-nones" placeholder="buscar sitios"/>
            </div>
        </form>
      </div>
      {/* paginas */}
      
     
    </header>


    <nav className="text-gray-300 flex items-center justify-between lg:justify-start md:gap-8 border-b mb-6">
        <ul className='text-gray-300 flex items-center justify-between lg:justify-start md:gap-8 '>
       
        <Link to="/" >Belleza </Link>
        <Link to="/Asalud">Salud </Link>
        <Link to="/Veterinario">Veterinario </Link>
        <Link to="/Otrasprofesiones">Otros </Link>
        </ul>
    </nav> 


    </div>
  )
}

export default Header