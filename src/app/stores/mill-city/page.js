import React from 'react'
import MenuItems from '@/pages/layout/menu-layout'
import { millcityProducts } from '@/data/data.js'


export default function LifeAliveMenu() {
  return(
  <div className='text-center text-bold text-4xl'>
    <MenuItems Store={'Mill City'} products={millcityProducts} />
  </div>
  );
}