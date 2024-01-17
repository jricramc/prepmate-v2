import React from 'react'
import MenuItems from '@/pages/layout/menu-layout'
import { spicedelightProducts } from '@/data/data'
 
export default function SpiceMenu() {
  return(
  <div className='text-center text-bold text-4xl'>
    <MenuItems Store={'Spice Delight'} products={spicedelightProducts} />
  </div>
  );
}