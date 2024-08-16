import React from 'react'
import { Link } from 'react-router-dom'
import Category from '../../../models/Category'

interface CardCategoryProps {
  category: Category
}

function CardCategory({category}: CardCategoryProps) {
  return (
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
      <header className='py-2 px-6 bg-indigo-800 text-white font-bold text-2xl'>Categoria</header>
      <p className='pt-6 pl-8 text-3xl bg-slate-200 h-full'>{category.nome}</p>
      <p className='pt-8 pl-8 text-3xl bg-slate-200 h-full'>{category.descricao}</p>
      <div className="flex">
        <Link to={`/editarCategoria/${category.id}`} className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarCategoria/${category.id}`} className='text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardCategory