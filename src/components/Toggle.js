import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);
  //We're setting the initial state here as false, because the button should be "OFF" when the component first renders.

  function handleClick() {
    setIsOn((isOn) => !isOn);
  }

  const color =isOn ? "red" : "white";

  return <button style={{ background: color }} onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>;
} 
export default Toggle;
