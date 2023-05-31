import { Link } from "react-router-dom"


export const Belleza = () => {

  
    return (
      <div>
  
  <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16" >
               {/*tarjetas  */}
                <div className="bg-[#1F1D2B] p-12 rounded-xl flex flex-col items-center gap-1 text-gray-300 text-center">
                  <img src="./public/SALON1.png" className="w-40 object-cover -mt-20 shadow-2xl rounded-full"/>
                  <p className="text-xl uppercase">Salon look Neiva</p>
                  <span className="text-gray-400">Especialista en cejas y pestañas</span>
                  <p className="text-gray-600">estamos ubicados calle 13 No 5-104</p>
                  <Link to='/Agendar'>
                  <button className="flex items-center gap-4 text-gray-300 bg-[#ec7c6a] py-2 px-4 rounded-lg grid-cols-4">
                  AGENDAR:
                  </button> 
                  </Link>    
                </div>  

                <div className="bg-[#1F1D2B] p-12 rounded-xl flex flex-col items-center gap-1 text-gray-300 text-center">
                  <img src="./public/SALON2.png" className="w-40 object-cover -mt-20 shadow-2xl rounded-full"/>
                  <p className="text-xl uppercase">Salon Zafiro </p>
                  <span className="text-gray-400">Especialista en uñas</span>
                  <p className="text-gray-600">estamos ubicados Cll. 26 Sur 24-63, </p>
                  <Link to='/Agendar'>                 
                  <button className="flex items-center gap-4 text-gray-300 bg-[#ec7c6a] py-2 px-4 rounded-lg grid-cols-4">
                  AGENDAR:
                  </button> 
                  </Link>     
                </div>  

                <div className="bg-[#1F1D2B] p-12 rounded-xl flex flex-col items-center gap-1 text-gray-300 text-center">
                  <img src="./public/SALON3.png" className="w-40 object-cover -mt-20 shadow-2xl rounded-full"/>
                  <p className="text-xl uppercase">PALOROSA NAILS NEIVA </p>
                  <span className="text-gray-400">Especialista en uñas</span>
                  <p className="text-gray-600">estamos ubicados Calle 10 # 8-14</p>
                  <Link to='/Agendar'> 
                  <button className="flex items-center gap-4 text-gray-300 bg-[#ec7c6a] py-2 px-4 rounded-lg grid-cols-4">
                  AGENDAR:
                  </button>    
                  </Link> 
                </div> 

                <div className="bg-[#1F1D2B] p-12 rounded-xl flex flex-col items-center gap-1 text-gray-300 text-center">
                  <img src="./public/SALON4.png" className="w-40 object-cover -mt-20 shadow-2xl rounded-full"/>
                  <p className="text-xl"> PINK NAILS NEIVA</p>
                  <span className="text-gray-400">Especialista en uñas</span>
                  <p className="text-gray-600">estamos ubicados Kra 16 #32-16,</p>
                  <Link to='/Agendar'> 
                  <button className="flex items-center gap-4 text-gray-300 bg-[#ec7c6a] py-2 px-4 rounded-lg grid-cols-4">
                  AGENDAR: <Link to = "/Barraconfi"></Link>
                  </button>     
                  </Link>
                </div> 

                <div className="bg-[#1F1D2B] p-12 rounded-xl flex flex-col items-center gap-1 text-gray-300 text-center">
                  <img src="./public/SALON5.png" className="w-40 object-cover -mt-20 shadow-2xl rounded-full"/>
                  <p className="text-xl uppercase"> studio22hc</p>
                  <span className="text-gray-400">Especialista en cabello</span>
                  <p className="text-gray-600">estamos ubicados Calle 10 # 8-14</p>
                  <Link to='/Agendar'> 
                  <button className="flex items-center gap-4 text-gray-300 bg-[#ec7c6a] py-2 px-4 rounded-lg grid-cols-4">
                  AGENDAR:
                  </button>     
                  </Link>
                </div> 

                <div className="bg-[#1F1D2B] p-12 rounded-xl flex flex-col items-center gap-1 text-gray-300 text-center">
                  <img src="./public/SALON6.png" className="w-40 object-cover -mt-20 shadow-2xl rounded-full"/>
                  <p className="text-xl uppercase"> BODY BRITE</p>
                  <span className="text-gray-400">Especialista en la piel </span>
                  <p className="text-gray-600">estamos ubicados Calle 8 # 37a-26 Local 4</p>
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
  