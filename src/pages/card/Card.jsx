import React, { useState } from "react";

const Card = ({ cardInfo }) => {
  const [mouse, setMouse] = useState(false);
const [state, setState] = useState(true)

    const handleClick = ()=>{
        setMouse(state)
        setState(mouse)
    }
  return (
    <div
        onClick={()=> handleClick()}

    >
      <img
        src="https://i4.imageban.ru/out/2023/03/07/f01614daa7837e4371191811786d31c4.jpg"
        alt="собака"
        style={{ width: 250, height: 250 }}
      />

      <h2>{cardInfo.name}</h2>
      <p>{cardInfo.email}</p>
      {mouse && (
        <div >
          <address>
            address:
            {cardInfo.address.street}
          </address>
          <span>city: {cardInfo.address.city}</span>
          <h3> Company name: {cardInfo.company.name}</h3>
          <div>{cardInfo.company.catchPhrase}</div>
        </div>
      )}
    </div>
  );
};

export default Card;
