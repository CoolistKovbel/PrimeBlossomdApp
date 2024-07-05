import Link from 'next/link'
import React from 'react'

const MainHeader = () => {
  return (
    <header className='p-4 bg-[#111] flex items-center justify-between'>
        <h2 className='text-2xl font-bold'>PrimeBlossomVault</h2>

        <nav className='w-[30%] p-2 flex items-center justify-between'>
            <Link href="/about" className='bg-[#444] p-2 font-bold hover:bg-[#222] rounded drop-shadow-lg'>About</Link>
            <Link href="/contact" className='bg-[#444] p-2 font-bold hover:bg-[#222] rounded drop-shadow-lg'>Contact</Link>
            <Link href="/trade" className='bg-[#444] p-2 font-bold hover:bg-[#222] rounded drop-shadow-lg'>Trade</Link>
        </nav>

    </header>
  )
}

export default MainHeader