import React from 'react'
import MenuItems from '@/pages/layout/menu-layout'
import { silkroadProducts } from '@/data/data'
 
export default function SilkMenu() {
  return(
  <div className='text-center text-bold text-4xl'>
    <MenuItems Store={'Silk Road'} products={silkroadProducts} />
  </div>
  );
}