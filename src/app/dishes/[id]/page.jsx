
import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'

// Fetch recipe data based on ID
const fetchData = async (id) => {
  try {
    const response = await fetch(`https://dummyjson.com/recipes/${id}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    return null
  }
}

export default async function Page({ params }) {
  const id = (await params).id
  const singleData = await fetchData(id)

  if (!singleData) {
    return <div>Error loading recipe data.</div>
  }

  return (
    <div className="flex justify-center mt-10">
      <Card className="w-full max-w-lg">
        {/* Card Header with Recipe Name and Image */}
        <CardHeader>
          <CardTitle>{singleData.name}</CardTitle>
          {/* <img src={singleData.image} alt={singleData.name} className="rounded-lg w-full h-64 object-cover mt-4" /> */}
          <Image src={singleData.image} width={400} height={400} alt={singleData.name} overrideSrc={singleData.image} />
          <CardDescription className="mt-2 text-gray-500">Cuisine: {singleData.cuisine} | Difficulty: {singleData.difficulty}</CardDescription>
        </CardHeader>

        {/* Card Content with Detailed Information */}
        <CardContent>
          <p><strong>Prep Time:</strong> {singleData.prepTimeMinutes} minutes</p>
          <p><strong>Cook Time:</strong> {singleData.cookTimeMinutes} minutes</p>
          <p><strong>Servings:</strong> {singleData.servings}</p>
          <p><strong>Calories per Serving:</strong> {singleData.caloriesPerServing}</p>
          <p><strong>Rating:</strong> {singleData.rating} ⭐ ({singleData.reviewCount} reviews)</p>

          {/* Ingredients List */}
          <div className="mt-4">
            <h3 className="font-semibold">Ingredients:</h3>
            <ul className="list-disc ml-6 mt-2 text-gray-700">
              {singleData.ingredients?.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          {/* Instructions List */}
          <div className="mt-4">
            <h3 className="font-semibold">Instructions:</h3>
            <ol className="list-decimal ml-6 mt-2 text-gray-700">
              {singleData.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </div>

          {/* Tags */}
          <div className="mt-4">
            <h3 className="font-semibold">Tags:</h3>
            <p>{singleData.tags.join(', ')}</p>
          </div>
        

          {/* Meal Type */}
          <div className="mt-4">
            <h3 className="font-semibold">Meal Type:</h3>
            <p>{singleData.mealType.join(', ')}</p>
          </div>
        </CardContent> 
        

        {/* Card Footer with Additional Info */}
        <CardFooter className="flex justify-end mt-4">
          <p className="text-gray-600">Recipe provided by user {singleData.userId}</p>
        </CardFooter>
      </Card>
    </div>
  )
}
