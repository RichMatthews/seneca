import React, { useEffect, useState } from 'react'

import { BACKGROUND_COLORS } from '../../constants/background-colors'

import './index.css'

interface ChildProps {
    question: any
    setBackground: (bgColor: string) => void
}

interface SelectedAnswersState {}
interface CorrectAnswersState {}

interface SetAnswerParams {
    choice: {
        showLeft: string
        showRight: string
    }
    index: number
    side: string
}

export const Child = ({ question, setBackground }: ChildProps) => {
    const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswersState | []>([])
    const [correctAnswers, setCorrectAnswers] = useState<CorrectAnswersState | []>([])
    const [locked, setLocked] = useState(false)

    useEffect(() => {
        setCorrectAnswers(question.choices.map((choice: any) => choice.correct))
        setSelectedAnswers(question.choices)
    }, [question])

    const setAnswer = ({ choice, index, side }: SetAnswerParams) => {
        if (locked) return
        let copy: any = [...selectedAnswers]
        if (side === 'right') {
            copy[index].selected = choice.showRight
        } else {
            copy[index].selected = choice.showLeft
        }
        setSelectedAnswers(copy)

        setBackground(BACKGROUND_COLORS[calculateCorrectAnswers()])
        if (calculateCorrectAnswers() === 100) {
            setLocked(true)
        }
    }

    const calculateCorrectAnswers = () => {
        console.log(selectedAnswers, 'sa')
        const selectedAnswersX = selectedAnswers.map((answer: any) => answer.selected)
        let correctAnswersTotal = 0
        selectedAnswersX.forEach((answer, index) => {
            if (answer === correctAnswers[index]) {
                correctAnswersTotal += 1
            }
        })
        return (correctAnswersTotal / selectedAnswersX.length) * 100
    }

    const calculateWhichClassToUse = ({ choice }: any) => {
        const copy = [...selectedAnswers]

        if (choice.selected === choice.showRight) {
            return 'highlighted-choice highlighted-choice-right'
        }
        return 'highlighted-choice highlighted-choice-left'
        // `highlighted-choice ${
        //   move ? "highlighted-choice-right" : "highlighted-choice-left"
        // }`
    }

    return (
        <div className="container">
            <div className="title">{question.title}:</div>
            <div>
                {selectedAnswers.map((choice: any, index: number) => (
                    <div className="choices-container">
                        <div className="choice-selected" onClick={() => setAnswer({ choice, index, side: 'left' })}>
                            {choice.showLeft}
                        </div>
                        <div
                            onClick={() => setAnswer({ choice, index, side: 'right' })}
                            className={`choice-unselected`}
                        >
                            {choice.showRight}
                        </div>
                        <div className={calculateWhichClassToUse({ choice })} />
                    </div>
                ))}
            </div>
            <div>The answer is {locked ? 'correct' : 'incorrect'}</div>
        </div>
    )
}
