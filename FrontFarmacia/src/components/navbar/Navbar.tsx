import React from 'react'
import { Pill } from '@phosphor-icons/react'

function Navbar() {
  return (
    <>
      <div className='w-full bg-orange-700 text-white flex justify-center py-4'>
        <div className="container flex justify-between text-lg">
          <div className='flex items-center text-2xl font-bold uppercase'>
            <Pill size={48} weight='bold' className='mr-2'/>
            UltraFarma Generation
          </div>

          <div className='flex gap-4'>
            <div className='hover:underline'>Categoria</div>
            <div className='hover:underline'>Produto</div>
            <div className='hover:underline'>Usuario</div>
            <div className='hover:underline'>Sair</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
