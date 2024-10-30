import axios from 'axios';
import React from 'react'
async function getSingleRecipe(details) {


  try {
    const response = await fetch(`https://dummyjson.com/recipes/${details}`);
    const data = await response.json();
    return data;
  } catch (error) {

  }
}

async function DetailPage({ params }) {
  const { details } = await params; // Await the params

  console.log('params:', details); // Now you can safely access details
  const SingleData = await getSingleRecipe(details)
  console.log('SingleData:', SingleData)
  
  return (
    <div>DetailPage</div>
  )
}

export default DetailPage