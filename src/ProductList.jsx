import React, { useState } from "react";
import "./ProductList.css";
import CartItem from "./CartItem";

function ProductList() {
  const [showCart, setShowCart] = useState(false);
  const [showPlants, setShowPlants] = useState(false);

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          name: "Snake Plant",
          image: ".\assets\chlorophytum-3530413_1280.jpg",
          description: "Produces oxygen at night, improving air quality.",
          cost: "$15",
        },
        {
          name: "Spider Plant",
          image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
          description: "Filters formaldehyde and xylene from the air.",
          cost: "$12",
        },
        {
          name: "Aloe Vera",
          image: "https://cdn.pixabay.com/photo/2017/09/16/19/21/aloe-plant-2756471_1280.jpg",
          description: "Filters formaldehyde and benzene from the air.",
          cost: "$20",
        },
        // Add more plants here...
      ],
    },
    // Add more categories here...
  ];

  const navbarStyles = {
    backgroundColor: "#4CAF50",
    color: "#fff",
    padding: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  return (
    <div>
      <nav style={navbarStyles}>
        <h1>Plant Shop</h1>
        <button onClick={() => setShowCart(!showCart)}>
          {showCart ? "Hide Cart" : "Show Cart"}
        </button>
      </nav>
      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((category) => (
            <div key={category.category}>
              <h2>{category.category}</h2>
              <div className="plants-list">
                {category.plants.map((plant) => (
                  <div key={plant.name} className="plant-item">
                    <img src={plant.image} alt={plant.name} />
                    <h3>{plant.name}</h3>
                    <p>{plant.description}</p>
                    <p>{plant.cost}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem />
      )}
    </div>
  );
}

export default ProductList;
