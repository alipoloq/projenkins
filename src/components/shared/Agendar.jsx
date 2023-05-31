import Formulario from "./Formulario"
import {useState} from "react"

/*Funcion creadora de la aplicación */ 
function Agendar() {
  const [pacientes, setPacientes] = useState([]);
  //extraer valores con la tarjeta para editar y eliminar
  const [paciente, setPaciente] = useState({});
  //ELiminar paciente
  

  return (
    /*Etiqueta padre y el body de la página*/
   
     
      <div className=" md:flex">
        <Formulario 
          pacientes = {pacientes}
          setPacientes = {setPacientes}
          paciente = {paciente}
          setPaciente = {setPaciente}
        />
        
  
    </div>
  )
}
/*Export para importar el módulo a otras partes de la app*/
export default Agendar
