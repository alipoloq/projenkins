import { Link } from "react-router-dom"

export const Otrasprofesiones = () => {
  return (
    <div>

<div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16" >
             {/*tarjetas  */}
              <div className="bg-[#1F1D2B] p-12 rounded-xl flex flex-col items-center gap-1 text-gray-300 text-center">
                <img src="OTRO1.png" className="w-40 object-cover -mt-20 shadow-2xl rounded-full"/>
                <p className="text-xl uppercase">C.E.A El Conductor Seguro</p>
                <span className="text-gray-400">Centro de enseñanza automobilistica el conductor seguro</span>
                <p className="text-gray-600">estamos ubicados Cra. 2 #22-50</p>
                <Link to='/Agendar'> 
                <button className="flex items-center gap-4 text-gray-300 bg-[#ec7c6a] py-2 px-4 rounded-lg grid-cols-4">
                AGENDAR:
                </button>  
                </Link>   
              </div>  

              <div className="bg-[#1F1D2B] p-12 rounded-xl flex flex-col items-center gap-1 text-gray-300 text-center">
                <img src="OTRO2.png" className="w-40 object-cover -mt-20 shadow-2xl rounded-full"/>
                <p className="text-xl uppercase">COOMEVA COOPERATIVA</p>
                <span className="text-gray-400">oportunidad para crecer</span>
                <p className="text-gray-600">estamos ubicados Cl. 13 #5- 44</p>
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
