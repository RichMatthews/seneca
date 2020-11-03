import React, { useEffect, useState } from 'react'

import { BACKGROUND_COLORS } from '../../constants/background-colors'

import { ChildProps, CorrectAnswersState, SetAnswerParams, SelectedAnswersState } from './types'
import './index.css'

export const Child = ({ question, setBackground }: ChildProps) => {
    const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswersState[]>([])
    const [correctAnswers, setCorrectAnswers] = useState<CorrectAnswersState[]>([])
    const [allAnswersCorrect, setAllAnswersCorrect] = useState<boolean>(false)

    useEffect(() => {
        setCorrectAnswers(question.choices.map((choice: any) => choice.correct))
        setSelectedAnswers(question.choices)
    }, [question])

    const setAnswer = ({ choice, index, side }: SetAnswerParams) => {
        if (allAnswersCorrect) return
        let copy: any = [...selectedAnswers]
        if (side === 'right') {
            copy[index].selected = choice.showRight
        } else {
            copy[index].selected = choice.showLeft
        }
        setSelectedAnswers(copy)

        setBackground(BACKGROUND_COLORS[calculateCorrectAnswers()])
        if (calculateCorrectAnswers() === 100) {
            setAllAnswersCorrect(true)
        }
    }

    const calculateCorrectAnswers = () => {
        let correctAnswersTotal: number = 0
        selectedAnswers
            .map((answer: SelectedAnswersState) => answer.selected)
            .forEach((answer: string, index: number) => {
                if (answer === correctAnswers[index]) {
                    correctAnswersTotal += 1
                }
            })
        return (correctAnswersTotal / selectedAnswers.length) * 100
    }

    const calculateWhichClassToUse = ({ choice }: { choice: { selected: string; showRight: string } }) => {
        if (choice.selected === choice.showRight) {
            return 'highlighted-choice highlighted-choice-right'
        }
        return 'highlighted-choice highlighted-choice-left'
    }

    return (
        <div className="container">
            <div className="title">{question.title}:</div>
            <div>
                {selectedAnswers.map((choice: SelectedAnswersState, index: number) => (
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
            <div>The answer is {allAnswersCorrect ? 'correct' : 'incorrect'}</div>
        </div>
    )
}
