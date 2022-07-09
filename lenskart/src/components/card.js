import React from "react";
import "../styles/amazon.css";


const Cards = ({ item, handleClick }) => {
  const { title, author, price, img } = item;
  return (
    <>
      {/*<div className="cards">
        <div className="image_box">
          <img src={img} alt="" />
        </div>
        <div className="details">
          <p>{title}</p>
          <p>{author}</p>
          <p>Price - {price}Rs</p>
          <button onClick={() => handleClick(item)}>Add to Cart</button>
        </div>
  </div>*/}

      <div className="cards">
        <div className="image_box">
         <img  id="img_Kart" src={img} alt="" />

        </div>
        <div className="details">
          <h5>{title}</h5>
          <p>Specifications - {author}</p>
          <p>Price - {price}Rs</p>
          <button onClick={() => handleClick(item)}>Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default Cards;
