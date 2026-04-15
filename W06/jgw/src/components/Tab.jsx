import { useState } from "react";

export default function Tab() {
  let [activeTab, setActiveTab] = useState("home");
  return (
    <>
      <button onClick={() => {setActiveTab("home")}}>Home</button>
      <button onClick={() => {setActiveTab("about")}}>About</button>

      {activeTab==="home" && <p>Welcome Home!</p>}
      {activeTab==="about" && <p>About us</p>}
    </>
  );
}
