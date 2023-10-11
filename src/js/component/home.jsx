import React, { useState } from "react";

function TrafficLight() {
  const [color, setColor] = useState(null);

  const handleClick = (clickedColor) => {
    setColor(clickedColor);
  };

  return (
    <>
      <div className="semaforo">
        <div
          className={`circulo rojo ${color === 'red' ? 'brillar' : ''}`}
          onClick={() => handleClick('red')}
        ></div>
        <div
          className={`circulo amarillo ${color === 'yellow' ? 'brillar' : ''}`}
          onClick={() => handleClick('yellow')}
        ></div>
        <div
          className={`circulo verde ${color === 'green' ? 'brillar' : ''}`}
          onClick={() => handleClick('green')}
        ></div>
      </div>
    </>
  );
}

export default TrafficLight;
