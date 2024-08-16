import React from 'react';
import pills from '../../assets/pills.png'
import './Home.css';


function Home() {
    return (
        <>
        <div className="bg-gray-700 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Seja bem vinde!</h2>
              <p className='text-xl'>A drogaria salva sua vida</p>
  
              <div className="flex justify-around gap-4">
              
                <button className='rounded bg-white text-blue-800 py-2 px-4'>Ver Categorias</button>
              </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={pills} alt="" className='w-2/3' />
      
            </div>
          </div>
        </div>
      
      </>
    );
}

export default Home;