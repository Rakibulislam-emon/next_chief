"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'


export default function Page() {
  // Initialize data as an empty array
  const [data, setData] = useState([])

  useEffect(() => {
    // Fetch data
    const fetchData = async () => {
      const response = await fetch('https://dummyjson.com/recipes')
      const result = await response.json()
      console.log(result)
      setData(result.recipes || []) // Assume the recipes are in `result.recipes`
    }
    fetchData()
  }, [])
  console.log(data);
  return (
    <div className='lg:grid grid-cols-4 h-96 gap-20 '>
      {
        data.map((recipe) => (
          <Link href={`dishes/${recipe.id}`}
            className='h-40 ' key={recipe.id}>
            <img className='h-full w-full object-cover' src={recipe.image} alt={recipe.name} />
            <h2 className='border py-4 text-center text-2xl font-semibold'>{recipe.name}</h2>
          </Link>
        ))
      }
    </div>
  )
}
