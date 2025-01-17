import React from "react";
import Image from "./img_profile.png";
import "./card.css";


function Card() {
  return (
    <>
      <div className="Img">
        <img src = {Image} alt="profile img"/>
      </div>
      <div className="name">
        <h1>Cats and Love</h1>
        <h3>A Purr-fect Bond</h3>
      </div>
      <div className="content">
        <p>Cats are masters of subtle affection, from their soothing purrs to their playful antics. They may seem independent, but their love is expressed in quiet moments—curling up beside you, rubbing against your legs, or giving you those slow, trusting blinks. Every gesture reminds us of the unique and heartwarming connection we share with these furry companions. 🐾❤️</p>
      </div>
    </>
  );
}

export default Card;
