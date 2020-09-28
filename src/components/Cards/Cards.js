import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
function Cards() {
  return (
    <div className="cards">
      <h1>Checkout this EPIC destination!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-8.jpg"
              text="Explore the hidden deep waterfall inside the Amazon jungle"
              label="Adventure"
              path="/sevices"
            />
            <CardItem
              src="images/img-9.jpg"
              text="Explore the hidden deep waterfall inside the Amazon jungle"
              label="Adventure"
              path="/sevices"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-8.jpg"
              text="Explore the hidden deep waterfall inside the Amazon jungle"
              label="Adventure"
              path="/sevices"
            />
            <CardItem
              src="images/img-9.jpg"
              text="Explore the hidden deep waterfall inside the Amazon jungle"
              label="Adventure"
              path="/sevices"
            />
            <CardItem
              src="images/img-9.jpg"
              text="Explore the hidden deep waterfall inside the Amazon jungle"
              label="Adventure"
              path="/sevices"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
