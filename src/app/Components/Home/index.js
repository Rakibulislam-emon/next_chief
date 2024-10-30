import Link from 'next/link'
import React from 'react'

function HomeComponent() {
    return (
        <div>
            <h1 className='text-3xl text-center'>Food corner</h1>
            <p className='text-center'>Welcome to our food corner, where you can find a wide variety of delicious and affordable dishes!</p>
            <div>
                <h2 className='text-2xl text-center'>Featured Dishes</h2>
                <div className='border text-center mt-4'>
                    {/* Add your featured dishes here */}
                    <Link href={'/dishes'}><h1 className='font-semibold'>click to see all the foods</h1></Link>
                </div>
            </div>
        </div>
    )
}

export default HomeComponent