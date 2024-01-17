import React from 'react'
import MenuItems from '@/pages/layout/menu-layout'
import { lifealiveProducts } from '@/data/data.js'


export default function LifeAliveMenu() {
  return(
  <div className='text-center text-bold text-4xl'>
    <MenuItems Store={'Life Alive'} products={lifealiveProducts} />
  </div>
  );
}