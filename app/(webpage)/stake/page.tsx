import PBEds from '@/app/components/compoent'
import React from 'react'

const Page = () => {
                        

  return (
    <main className="flex min-h-screen flex-col items-center  p-10 gap-10">
        
        <header>
          <h2 className='text-2xl'>PBBeds</h2>
          <p className='text-sm'>Approve your own bed and collect yourself our Special Blossom Pollen Token </p>
        </header>

        <PBEds />


    </main>
  )
}

export default Page