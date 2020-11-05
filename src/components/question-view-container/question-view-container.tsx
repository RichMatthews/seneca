import React, { useEffect, useState } from 'react'
import shuffle from 'shuffle-array'

import { calculateBackgroundColor } from '../../constants/background-colors'
import { QUESTION_DATA, QUESTION_DATA_TWO } from '../../data'
import { QuestionSelect } from '../question-select'
import { QuestionView } from '../question-view'

import './index.css'

export const QuestionViewContainer = () => {
    const [background, setBackground] = useState<string>(calculateBackgroundColor(0))
    const [questionNumber, setQuestionNumber] = useState<number>(0)
    const [questionData, setQuestionData] = useState<{ choices: any; title: string }>(QUESTION_DATA)
    const [correctAnswers, setCorrectAnswers] = useState<string[]>([])
    const [allAnswersCorrect, setAllAnswersCorrect] = useState<boolean>(false)

    useEffect(() => {
        if (questionNumber === 0) {
            setQuestionData(QUESTION_DATA)
            randomizeChoices(QUESTION_DATA)
        } else {
            setQuestionData(QUESTION_DATA_TWO)
            randomizeChoices(QUESTION_DATA_TWO)
        }
    }, [questionNumber])

    const randomizeChoices = (localQuestionData: { choices: {}[]; title: string }) => {
        const shuffleChoicesAndAddInitialSelectedChoice = localQuestionData.choices.map((choice: any) => {
            const randomlySelectedChoice = shuffle(choice.options)[0]
            shuffle(choice.options)
            return { ...choice, selected: randomlySelectedChoice }
        })

        setQuestionData({ ...localQuestionData, choices: shuffleChoicesAndAddInitialSelectedChoice })

        const correctAnswers = shuffleChoicesAndAddInitialSelectedChoice.map(
            (choice: { correct: string }) => choice.correct,
        )
        const selectedAnswers = shuffleChoicesAndAddInitialSelectedChoice.map(
            (choice: { selected: string }) => choice.selected,
        )
        setCorrectAnswers(correctAnswers)

        const moreThan50PercentOfAnswersCorrect = calculateCorrectAnswers(selectedAnswers, correctAnswers)

        // call the function again if answers are higher than 50% as too many are correct from the start
        if (moreThan50PercentOfAnswersCorrect > 50) {
            randomizeChoices(localQuestionData)
        }
    }

    const calculateCorrectAnswers = (selectedAnswers: any, _correctAnswers: any) => {
        let correctAnswersTotal: number = 0
        selectedAnswers
            .map((answer: string) => answer)
            .forEach((answer: string, index: number) => {
                if (answer === _correctAnswers[index]) {
                    correctAnswersTotal += 1
                }
            })

        return (correctAnswersTotal / selectedAnswers.length) * 100
    }

    return (
        <div className="question-view-container" style={{ background: `linear-gradient(${background})` }}>
            <QuestionSelect
                questionNumber={questionNumber}
                setAllAnswersCorrect={setAllAnswersCorrect}
                setBackground={setBackground}
                setQuestionNumber={setQuestionNumber}
            />
            <QuestionView
                allAnswersCorrect={allAnswersCorrect}
                correctAnswers={correctAnswers}
                questionData={questionData}
                setAllAnswersCorrect={setAllAnswersCorrect}
                setBackground={setBackground}
            />
        </div>
    )
}
