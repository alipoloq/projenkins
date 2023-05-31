import { useState, useEffect } from "react";
import Error from "./Error";
import { Link } from "react-router-dom";


const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fingreso, setFingreso] = useState('');
  const [horaAgendar, setHoraAgendar] = useState('');
  const [sintomas, setSintomas] = useState('');

  //Hook para capturar errores
  const[error, setError] = useState(false);

  //Función para construir un ID
  const generarID = ()=>{
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return random+fecha
  }

  //Revisión del cargue de datos en el form
  useEffect(()=>{
    if(Object.keys(paciente).length > 0){
      setNombre(paciente.nombre)
      setEmail(paciente.email)
      setPropietario(paciente.propietario)
      setFingreso(paciente.fingreso)
      setHoraAgendar(paciente.horaAgendar)
      setSintomas(paciente.sintomas)
      
    }
  }, [paciente])
  

  //Limpiar o resetear el formulario cuando carga la página
  const handleSubmit=(e)=>{
    e.preventDefault();
    
    //Validar formulario que no vaya con campos vacíos
  if([nombre, propietario, email, fingreso,horaAgendar, sintomas].includes('')){
    setError(true);
    return;
  }

  setError(false);

  //objeto de paciente - enviar al arreglo
  const objetoPaciente ={
    nombre, 
    propietario, 
    email, 
    fingreso, 
    horaAgendar,
    sintomas
    
  }
  
  //Proceso de actualización
  if(paciente.id){
    //console.log('Editando')
    objetoPaciente.id = paciente.id
    //console.log(objetoPaciente)
    //console.log(paciente)
    const pacienteActualizado = pacientes.map(
      pacienteState =>pacienteState.id === paciente.id ?
      objetoPaciente: pacienteState
    )

    setPacientes(pacienteActualizado)
    setPaciente({})

  }else{
    //console.log('Agregando mascota')
    objetoPaciente.id = generarID();
    setPacientes([...pacientes, objetoPaciente])
    //console.log(objetoPaciente)
  }

  //console.log(objetoPaciente);

  

  //Limpieza de hooks - useState de cada uno
  setNombre('')
  setPropietario('')
  setEmail('')
  setFingreso('')
  setHoraAgendar('')
  setSintomas('')

  }


  return (
  <div className=" w-screen">
    <h2 className="text-gray-100 text-3xl text-center uppercase">
      agenda con tus datos !!
    </h2>
    <p className=" text-[#ec7c6a] text-2xl mt-5 text-center mb-10  uppercase">
    y solicita tu cita
     
    </p>

    <form className="w-full bg-white shadow-md rounded-lg py-10 px-5 mb-10" onSubmit={handleSubmit}>
      {error && <Error>
          <p>
            Todos los campos son Obligatorios!
          </p>
          
          </Error>

      }
      <div className="mb-5">
        <label htmlFor="mascota" className="block text-gray-700 
        uppercase font-bold">Nombre completo:</label>

        <input id="mascota" type="text" className="border-2 
        w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
        placeholder="Nombre completo"
        value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
      </div>

      <div className="mb-5">
        <label htmlFor="propietario" 
        className="block text-gray-700 
        uppercase font-bold">Nombre del negocio:</label>

        <input id="propietario" type="text" 
        className="border-2 w-full p-2 mt-2
         placeholder-gray-400 rounded-md"
          placeholder="Nombre del negocio a agendar"
          value={propietario} onChange={(e)=>setPropietario(e.target.value)}/>
      </div>

      <div className="mb-5">
        <label htmlFor="email" 
        className="block text-gray-700 
        uppercase font-bold">Email de confirmacion:</label>

        <input id="email" type="email" 
        className="border-2 w-full p-2 mt-2
         placeholder-gray-400 rounded-md" 
         placeholder="Email"
         value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </div>

      <div className="mb-5">
        <label htmlFor="fecha" 
        className="block text-gray-700 
        uppercase font-bold">Fecha a agendar:</label>

        <input id="fecha" type="date" 
        className="border-2 w-full p-2 mt-2
          rounded-md" 
          value={fingreso} onChange={(e)=>setFingreso(e.target.value)}
         />
      </div>

      <div className="mb-5">
        <label htmlFor="hora" 
        className="block text-gray-700 
        uppercase font-bold">hora de agendar:</label>

        <input id="hora" type="time" 
        className="border-2 w-full p-2 mt-2
          rounded-md" 
          value={horaAgendar} onChange={(e)=>setHoraAgendar(e.target.value)}
         />
      </div>

      <div className="mb-5">
        <label htmlFor="sintomas" 
        className="block text-gray-700 
        uppercase font-bold">Servicio a tomar :</label>

        <textarea id="sintomas"  
        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
        placeholder="Servicio a tomar" 
        value={sintomas} onChange={(e)=>setSintomas(e.target.value)}
         />
      </div>

      <input type="submit" value={paciente.id ? "Editar cita":"Agregar cita"}
      className="bg-[#ec7c6a] w-full 
      p-3 text-white uppercase font-bold
       hover:bg-[#ee462c] cursor-pointer transition-colors" />

    </form>

  </div>
    
  )
}

export default Formulario