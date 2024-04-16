import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FoodItem = ({ item }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden m-4">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-64 object-cover object-center"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
        <p className="text-gray-700">{item.description}</p>
        {item.price && (
          <p className="text-gray-800 mt-2">${item.price.toFixed(2)}</p>
        )}
        <Link to="/ordernow">
          <button className="bg-orange-500 text-white px-4 py-2 mt-4 rounded-md">
            Order Now
          </button>
        </Link>
      </div>
    </div>
  );
};

const OrderPage = () => {
  const [foodData, setFoodData] = useState([]);
  const [displayedItems, setDisplayedItems] = useState(6); // Initial number of displayed items
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Chicken")
      .then((response) => response.json())
      .then((data) => {
        setTotalItems(data.meals.length);
        const limitedData = data.meals.slice(0, displayedItems).map((meal) => ({
          id: meal.idMeal,
          name: meal.strMeal,
          description: meal.strInstructions,
          image: meal.strMealThumb,
          price: Math.random() * 10 + 5, // Random price for demonstration
        }));
        setFoodData(limitedData);
      });
  }, [displayedItems]);

  const handleShowMore = () => {
    // Increase the number of displayed items
    setDisplayedItems((prevDisplayedItems) => prevDisplayedItems + 6);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {foodData.map((item) => (
          <FoodItem key={item.id} item={item} />
        ))}
      </div>
      {displayedItems < totalItems && (
        <div className="text-center mt-8">
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded-md"
            onClick={handleShowMore}
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default OrderPage;
