// src/app/dishes/page.jsx
import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

async function fetchDishes() {
    try {
        const response = await axios.get('https://dummyjson.com/recipes');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

export default async function Dishes() {
    const data = await fetchDishes();
    return (
        <div>
            <h1 className='text-3xl font-semibold text-center my-2'>All Dishes are here</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-center '>
                {data && data.recipes?.map((dish) => (
                    <div key={dish.id} className='border p-4 rounded-lg gap-y-2'>
                        <h2 className='text-xl font-bold '>{dish.name}</h2>
                        <p className='gap-y-2'>ratings : {dish.servings}</p>
                        <Link href={`dishes/details/${dish.id}`}><Button  className='border p-2 mt-2'>view details</Button></Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

// export function ButtonLink() {
//   return <Button variant="link">Link</Button>
// }
