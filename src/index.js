import React from "react";
import reactDOM from "react-dom/client";
import { pizzaData } from "./data.js";
import "./index.css";
function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// header
function Header() {
  return (
    <header>
      <h1>fast react pizza co .</h1>;
    </header>
  );
}
// menu
function Menu() {
  const pizzaDataLen = pizzaData.length;
  return (
    <div className="container">
      <h2 className="menuHeading">our menu</h2>

      {pizzaDataLen > 0 ? (
        <>
          <p className="firstParagraph">
            authentic italian cuisine. {pizzaData.length} creative dishes to
            choose from. all from our stone oven, all organic, all delicious
          </p>

          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : null}
    </div>
  );
}
//pizza
function Pizza({ pizzaObj }) {
  return (
    <li className={`meal ${pizzaObj.soldOut ? "soldOut" : ""}`}>
      <div>
        <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      </div>
      <div className="mealData">
        <h2 className="mealName">{pizzaObj.name}</h2>
        <p className="mealpara">{pizzaObj.ingredients}</p>
        <span className="mealPrice">
          {pizzaObj.soldOut ? "SOLD-OUT" : pizzaObj.price}
        </span>
      </div>
    </li>
  );
}
// footer
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer>
      {isOpen ? (
        <Order />
      ) : (
        <p>
          we're happy to welcome you between {openHour}:00 to {closeHour}:00
        </p>
      )}
      <span>
        {new Date().getFullYear()} - fast react pizza co. all rights reserved
      </span>
    </footer>
  );
}
function Order() {
  return (
    <div>
      <p>
        welcome to you, we're happy to see you, if you wnat to buy click on buy
        now.
      </p>
      <button>buy now</button>
    </div>
  );
}
const root = reactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
