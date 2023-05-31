import Barramenu from "./components/shared/BarraMenu"
import { useState } from "react";
import { RiMenuFill, RiCalendarCheckFill,RiCloseFill,RiSearch2Line,RiArrowDownSLine } from "react-icons/ri";
import Barraconf from "./components/shared/Barraconf";
import Header from "./components/shared/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Belleza } from "./components/paginas/Belleza";
import { Asalud } from "./components/paginas/Asalud";
import { Veterinario } from './components/paginas/Veterinario'
import { Otrasprofesiones } from './components/paginas/Otrasprofesiones'
import Formulario from "./components/shared/Formulario";
import Agendar from "./components/shared/Agendar";


function App() {

        const [verMenu, SetVerMenu] = useState(false);
        const [verCita, SetCita] = useState(false);
      
        const togglemenu = () => {
          SetVerMenu (!verMenu);
          SetCita (false);
        };

        const togglconfirmar  = () => {
          SetCita (!verCita);
          SetVerMenu (false);
        };
  
  return (
   
    <div className="bg-[#262837] w-full min-h-screen">
      
      <Barramenu verMenu={verMenu}/>
      <Barraconf verCita={verCita} SetCita={SetCita}/>
      {/*menu response */}
      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">    
       
        <button onClick={togglconfirmar} className="p-2">
          <RiCalendarCheckFill/>
        </button>
        
        <button onClick={togglemenu} className=" text-white p-2">
        {verMenu ? <RiCloseFill/>: <RiMenuFill/>}

        </button>
      
      </nav>

      <main className="lg:pl-32 lg:pr-96 pb-20">
        <div className="md:p-8 p-4"> 
         {/* encabezado */}       

          {/* titulos del contenido  */}
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-xl text-gray-300">saca tu mejor version</h2> 
            <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
              <RiArrowDownSLine/> Agendar en:
            </button>
          </div>
          {/* contenido  */}

          <Router>
          <Header/>
                <Routes> 
              
              <Route exact path='/Asalud' Component={Asalud} />
              <Route exact path='/Veterinario' Component={Veterinario} />
              <Route exact path='/Otrasprofesiones' Component={Otrasprofesiones} />
              <Route exact path='/Belleza' Component={Belleza}/>
              </Routes>
          </Router>

          <Router>
           <Agendar/>
             <Routes>
                <Route path='/Formulario' component={Formulario} />
             </Routes>
           </Router> 
        
        </div>
         {/* confirmacion de cita */}
            
      </main>
          
    </div>
   
  )
}

export default App
