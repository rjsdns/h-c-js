import { useState } from "react";
export default function Light() {
  let [power, setPower] = useState("OFF");
  let lightOnOff = () => {
    setPower(power === "ON" ? "OFF" : "ON");
  };
  return (
    <div>
      {power === "ON" ? (
        <h1 style={{ backgroundColor: "orange" }}>ON </h1>
      ) : (
        <h1 style={{ backgroundColor: "gray" }}>OFF </h1>
      )}
      <button onClick={lightOnOff}>{power === "ON" ? "끄기" : "켜기"}</button>
    </div>
  );
}
