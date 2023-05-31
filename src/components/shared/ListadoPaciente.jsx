import Pacientes from "./Pacientes"


function ListadoPaciente({pacientes, setPaciente, eliminarPaciente}) {
  //formulas para id unico
  //Date.now().toString(36) 
  //Math.random().toString(36).substr(2)
  return (
    <div className="md:h-screen ">
      { 
        pacientes && pacientes.length ? 
      <>
        <h2 className="text-gray-200 text-3xl text-center">Listado de citas</h2>
        <p className="text-gray-300 text-xl mt-5 mb-10 text-center">
          Administra tus Citas
        </p>
    
        { pacientes.map(indice =>
          <Pacientes 
            key = {indice.id}
            indice = {indice}
            setPaciente = {setPaciente}
            eliminarPaciente = {eliminarPaciente}
          />
        )}
      </>
      :
      <>
        <h2 className="text-gray-200 text-3xl text-center">No hay citas pendientes!</h2>
        <p className="text-gray-200 text-xl mt-5 mb-10 text-center">
          Comienza agregando y aparecerán en este espacio agrega!
        </p>
      </>
      }
    </div>
  )
}

export default ListadoPaciente