import React from "react";

export default function Item({ animals }) {
  console.log(animals);

  return (
    <>
      <div className="item">
        {animals.map((animal, key) => {
          return (
            <>
              <h2>구조정보</h2>
              <p>품종 : {animal.ty3Kind}</p>
              <img src={animal.ty3Picture} alt={animal.ty3Kind} />
              <h2>{animal.ty3Kind}</h2>
              <p>구출 장소 : {animal.ty3Place}</p>
              <p>현재 상황 : {animal.ty3Process}</p>
            </>
          );
        })}
      </div>
    </>
  );
}
