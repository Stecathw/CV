import React, { useState } from "react";

const Hobbies = () => {
  const [hobbies] = useState([
    "Parapente (vols XC)",
    "Bricolage divers",
    "Drones",
  ]);

  return (
    <div className="hobbies">
      <h2>Loisirs et hobbies:</h2>
      {hobbies.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </div>
  );
};

export default Hobbies;
