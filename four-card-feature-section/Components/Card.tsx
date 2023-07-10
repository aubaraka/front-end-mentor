import React from "react";
import Image from "next/image";

interface detail {
  color: string;
  title: string;
  text: string;
  image: string;
}

function Card({ color, title, text, image }: detail) {
  return (
    <div className={`border-t-${color} border-1 bg-orange-400`}>
      <h1>{title}</h1>
      <p>{text}</p>
      <div className="flex justify-end">
        <Image
          src={"./" + image}
          alt="rating star"
          width={20}
          height={20}
          priority
        />
      </div>
    </div>
  );
}

export default Card;
