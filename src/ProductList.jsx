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
          image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
          description: "Produces oxygen at night, improving air quality.",
          cost: "$15",
        },
        {
          name: "Spider Plant",
          image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
          description: "Filters formaldehyde and xylene from the air.",
          cost: "$12",
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

  const linkStyles = {
    color: "white",
    fontSize: "18px",
    textDecoration: "none",
    margin: "0 10px",
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
    setShowPlants(false);
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowPlants(true);
    setShowCart(false);
  };

  const handleContinueShopping = () => {
    setShowCart(false);
  };

  return (
    <div>
      {/* Navbar */}
      <div className="navbar" style={navbarStyles}>
        <div className="luxury">
          <img
            src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png"
            alt="Paradise Nursery Logo"
            style={{ height: "50px" }}
          />
          <a href="/" style={{ textDecoration: "none", marginLeft: "10px" }}>
            <div>
              <h3 style={{ color: "white" }}>Paradise Nursery</h3>
              <i style={{ color: "white" }}>Where Green Meets Serenity</i>
            </div>
          </a>
        </div>
        <div>
          <a href="#" onClick={handlePlantsClick} style={linkStyles}>
            Plants
          </a>
          <a href="#" onClick={handleCartClick} style={linkStyles}>
            Cart
          </a>
        </div>
      </div>

      {/* Main Content */}
      {!showCart ? (
        <div className="product-grid">
          {showPlants &&
            plantsArray.map((category) => (
              <div key={category.category} className="category">
                <h2>{category.category}</h2>
                <div className="plants">
                  {category.plants.map((plant) => (
                    <div key={plant.name} className="plant-card">
                      <img src={plant.image} alt={plant.name} />
                      <h3>{plant.name}</h3>
                      <p>{plant.description}</p>
                      <p>
                        <strong>Cost: </strong>
                        {plant.cost}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
