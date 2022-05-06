import React, { useState } from "react";

const Otherskills = () => {
  const [languages] = useState([
    { id: 0, language: "Anglais", lvl: "C1" },
    { id: 1, language: "Espagnol", lvl: "A2" },
    { id: 2, language: "Chinois", lvl: "A2" },
  ]);

  const [devs] = useState([
    "Visual Studio Code",
    "Google suite",
    "Microsoft office",
    "Solidworks, PrusaSlicer",
    "Montage photos/vidéos",
  ]);

  const [skills] = useState([
    "Persévérance",
    "Curiosité",
    "Adapdation",
    "Analyse",
    "Ouverture d'esprit",
  ]);

  return (
    <div className="otherskills">
      <h2>Autres points:</h2>
      <h4>Compétences :</h4>
      <ul>
        {skills.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <h4>Informatique :</h4>
      <ul>
        {devs.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <h4>Langues :</h4>
      <ul>
        {languages.map((item, index) => {
          return (
            <li key={index}>
              {item.language} - {item.lvl}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Otherskills;
