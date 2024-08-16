import React from 'react'
import { FacebookLogo, InstagramLogo, LinkedinLogo, Pill } from '@phosphor-icons/react'

function Footer() {
  return (
    <>
      <div className="flex justify-center bg-orange-700 text-white">
        <div className="container flex flex-col items-center py-4">
          <div className='flex items-center text-xl font-bold'>
            <Pill size={48} weight='bold' className='mr-2'/>
            UltraFarma Generation | Copyright:
          </div>
          <p className='text-lg'>Acesse nossas redes sociais</p>
          <div className='flex gap-2'>
            <LinkedinLogo size={48} weight='bold' />
            <InstagramLogo size={48} weight='bold' />
            <FacebookLogo size={48} weight='bold' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
