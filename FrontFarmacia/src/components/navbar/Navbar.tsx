import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Pill } from '@phosphor-icons/react'

function Navbar() {
  return (
    <>
      <div className='w-full bg-orange-700 text-white flex justify-center py-4'>
        <div className="container flex justify-between text-lg">
          <div className='flex items-center text-2xl font-bold uppercase'>
            <Pill size={30} weight='bold' className='mr-2'/>
            UltraFarma Generation
          </div>

          <div className='flex gap-4 mr-2'>
              <Link to='/home' className='hover:underline'>Home</Link>
              <div className='hover:underline'>Categorias</div>
              <div className='hover:underline'>Produtos</div>
              <div className='hover:underline'>Sair</div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
