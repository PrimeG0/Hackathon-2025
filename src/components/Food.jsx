import React from "react";
import "./Food.css";

const foods = [
  {
    name: "Kathi Roll",
    img: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Kolkata_Rolls.jpg",
    desc: "Juicy rolls stuffed with chicken, egg or paneer – a Pujo evening essential.",
    tag: "Crowd Favorite"
  },
  {
    name: "Biryani",
    img: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg",
    desc: "Fragrant rice with soft potatoes, meat & eggs — Kolkata’s royal dish.",
    tag: "Must Try"
  },
  {
    name: "Puchkas",
    img: "https://images.squarespace-cdn.com/content/v1/5ea5f3913b0ccf06d0ec2563/1593216324212-K527RACGDU12BTJH1AZW/Fuchka+%282%29.jpg?format=2500w",
    desc: "Crispy puris filled with spicy tangy water and mashed potato.",
    tag: "Street Special"
  },
  {
    name: "Kebabs",
    img: "https://cookingorgeous.com/wp-content/uploads/2021/06/lamb-shish-kebab-20.jpg",
    desc: "Smoky skewers of tandoori meat, melting in your mouth.",
    tag: "Spicy Treat"
  },
  {
    name: "Mishti Doi",
    img: "https://bakewithshivesh.com/wp-content/uploads/2023/04/mishti-doi-scaled.jpg",
    desc: "Sweet caramelized curd served in clay pots – Bengal’s pride.",
    tag: "Sweet Tooth"
  }

];

const Food = () => {
  return (
    <section className="food-section">
      
      <p className="food-subtitle">
        No Pujo is complete without feasting! Explore these must-try dishes from Kolkata’s pandals & streets.
      </p>

      <div className="food-grid">
        {foods.map((item, index) => (
          <div className="food-card" key={index}>
            <div className="food-img">
              <img src={item.img} alt={item.name} />
              <span className="food-tag">{item.tag}</span>
            </div>
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="food-cta">
        <button className="food-btn hover-target">Find Food Near Me</button>
      </div>
    </section>
  );
};

export default Food;
