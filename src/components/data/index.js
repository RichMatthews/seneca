import React, { useEffect, useState } from "react";

import { BACKGROUND_COLORS } from "../../constants/background-colors";

import "./index.css";

import { Child } from "../child";

const questionData = {
  title: "An animal cell contains",
  choices: [
    {
      id: 0,
      selected: "Cell Wall",
      correct: "Ribosomes",
      incorrect: "Cell wall",
      showLeft: "Cell wall",
      showRight: "Ribosomes",
    },
    {
      id: 1,
      selected: "Chloroplast",
      correct: "Cytoplasm",
      incorrect: "Chloroplast",
      showLeft: "Chloroplast",
      showRight: "Cytoplasm",
    },
    {
      id: 2,
      selected: "Impermeable membrane",
      correct: "Partially permeable membrane",
      incorrect: "Impermeable membrane",
      showLeft: "Impermeable membrane",
      showRight: "Partially permeable membrane",
    },
    {
      id: 3,
      selected: "Cellulose",
      correct: "Mitochondria",
      incorrect: "Cellulose",
      showLeft: "Cellulose",
      showRight: "Mitochondria",
    },
  ],
};

export const Data = ({}) => {
  const [data, setData] = useState([]);
  const [background, setBackground] = useState(BACKGROUND_COLORS[0]);

  useEffect(() => {
    // would use this to fetch data from an API
  }, []);

  return (
    <div
      className="data-container"
      style={{ background: `linear-gradient(${background})` }}
    >
      <Child question={questionData} setBackground={setBackground} />
    </div>
  );
};
