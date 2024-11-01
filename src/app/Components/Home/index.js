import Link from 'next/link';
import React from 'react';

const dishes = [
    {
        name: "Margherita Pizza",
        description: "Classic pizza topped with fresh tomatoes, mozzarella cheese, and basil.",
        price: "$12.99",
    },
    {
        name: "Pasta Carbonara",
        description: "Creamy pasta dish made with eggs, cheese, pancetta, and pepper.",
        price: "$14.99",
    },
    {
        name: "Caesar Salad",
        description: "Crisp romaine lettuce tossed with Caesar dressing, croutons, and parmesan.",
        price: "$10.99",
    },
    {
        name: "Tacos al Pastor",
        description: "Soft corn tortillas filled with marinated pork, onions, and fresh cilantro.",
        price: "$9.99",
    },
];

function HomeComponent() {
    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-5xl text-center font-bold mb-4">Food Corner</h1>
            <p className="text-lg text-center mb-8">
                Welcome to our food corner, where you can find a wide variety of delicious and affordable dishes!
            </p>
            <div>
                <h2 className="text-4xl text-center font-semibold mb-6">Featured Dishes</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {dishes.map((dish, index) => (
                        <div key={index} className="border rounded-lg p-4 bg-white shadow-md transition-transform transform hover:scale-105">
                            <h3 className="text-xl font-semibold">{dish.name}</h3>
                            <p className="text-gray-600">{dish.description}</p>
                            <p className="text-lg font-bold mt-2">{dish.price}</p>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-8">
                    <Link href="/dishes" className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded hover:bg-blue-700 transition duration-200">
                        View All Dishes
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HomeComponent;
