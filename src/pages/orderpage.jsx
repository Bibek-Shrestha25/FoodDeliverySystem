import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const OrderPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Fetch item details using the ID from the URL parameter
    // You can fetch item details from wherever you are storing them
    // For this example, I'll assume the item details are stored locally
    const fetchItemDetails = async () => {
      // Perform fetch or retrieve item details using the ID
      // For now, I'll just use a placeholder item
      const dummyItem = {
        id: id,
        name: "Dummy Item",
        description: "Description of the dummy item",
        image: "https://via.placeholder.com/400",
        price: 10.99,
      };
      setItem(dummyItem);
    };

    fetchItemDetails();
  }, [id]);

  const handleQuantityChange = (value) => {
    // Ensure quantity is not less than 1
    setQuantity(Math.max(1, quantity + value));
  };

  const handleOrder = () => {
    // Implement order functionality
    // You can use 'item' and 'quantity' state values here to place the order
    console.log("Ordered:", item, "Quantity:", quantity);
  };

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-3xl mx-auto">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-auto rounded-lg"
        />
        <h1 className="text-3xl font-bold my-4">{item.name}</h1>
        <p className="text-gray-700 mb-4">{item.description}</p>
        <div className="flex items-center mb-4">
          <p className="text-gray-800 font-bold mr-4">Quantity:</p>
          <button
            onClick={() => handleQuantityChange(-1)}
            className="bg-gray-200 px-3 py-1 rounded-md mr-2"
          >
            -
          </button>
          <span className="px-4">{quantity}</span>
          <button
            onClick={() => handleQuantityChange(1)}
            className="bg-gray-200 px-3 py-1 rounded-md ml-2"
          >
            +
          </button>
        </div>
        <button
          className="bg-orange-500 text-white px-4 py-2 rounded-md"
          onClick={handleOrder}
        >
          Order {quantity} {item.name}
        </button>
      </div>
    </div>
  );
};

export default OrderPage;
