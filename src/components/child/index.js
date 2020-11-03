import React, { useEffect, useState } from "react";

import { BACKGROUND_COLORS } from "../../constants/background-colors";
import "./index.css";

export const Child = ({ question, setBackground }) => {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    setCorrectAnswers(question.choices.map((choice) => choice.correct));
    setSelectedAnswers(question.choices);
  }, [question]);

  const setAnswer = (index, choice, side) => {
    if (locked) return;
    let copy = [...selectedAnswers];
    if (side === "right") {
      copy[index].selected = choice.showRight;
    } else {
      copy[index].selected = choice.showLeft;
    }
    setSelectedAnswers(copy);
    console.log(calculateCorrectAnswers(), "this answer?");
    setBackground(BACKGROUND_COLORS[calculateCorrectAnswers()]);
    if (calculateCorrectAnswers() === 100) {
      setLocked(true);
    }
  };

  const calculateCorrectAnswers = () => {
    console.log();
    const selectedAnswersX = selectedAnswers.map((answer) => answer.selected);
    let correctAnswersTotal = 0;
    selectedAnswersX.forEach((answer, index) => {
      if (answer === correctAnswers[index]) {
        correctAnswersTotal += 1;
      }
    });
    return (correctAnswersTotal / selectedAnswersX.length) * 100;
  };

  const calculateWhichClassToUse = (choice) => {
    const copy = [...selectedAnswers];

    if (choice.selected === choice.showRight) {
      return "highlighted-choice highlighted-choice-right";
    }
    return "highlighted-choice highlighted-choice-left";
    // `highlighted-choice ${
    //   move ? "highlighted-choice-right" : "highlighted-choice-left"
    // }`
  };

  return (
    <div className="container">
      <div className="title">{question.title}:</div>
      <div>
        {selectedAnswers.map((choice, index) => (
          <div className="choices-container">
            <div
              className="choice-selected"
              onClick={() => setAnswer(index, choice, "left")}
            >
              {choice.showLeft}
            </div>
            <div
              onClick={() => setAnswer(index, choice, "right")}
              className={`choice-unselected`}
            >
              {choice.showRight}
            </div>
            <div className={calculateWhichClassToUse(choice)} />
          </div>
        ))}
      </div>
      <div>The answer is {locked ? "correct" : "incorrect"}</div>
    </div>
  );
};
