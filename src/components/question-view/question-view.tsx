import React, { useEffect, useState } from 'react'

import { calculateBackgroundColor } from '../../constants/background-colors'

import { QuestionViewProps, CorrectAnswersState, SetAnswerParams, QuestionChoicesValues } from './types'
import { Choice } from '../choice'

import './index.css'

export const QuestionView = ({ correctAnswers, question, setBackground }: any) => {
    const [selectedAnswers, setSelectedAnswers] = useState<QuestionChoicesValues[]>([])
    const [allAnswersCorrect, setAllAnswersCorrect] = useState<boolean>(false)

    useEffect(() => {
        setSelectedAnswers(question)
    }, [question])

    const setAnswer = ({ choice, index, side }: SetAnswerParams) => {
        if (allAnswersCorrect) return
        let copy = [...selectedAnswers]

        copy[index].selected = choice
        // if (side === 'right') {
        // } else {
        //     copy[index].selected = choice.options[0]
        // }

        setSelectedAnswers(copy)

        const correctAnswerPercentage = calculateCorrectAnswers()

        setBackground(calculateBackgroundColor(correctAnswerPercentage))
        if (correctAnswerPercentage === 100) {
            setAllAnswersCorrect(true)
        }
    }

    const calculateCorrectAnswers = () => {
        let correctAnswersTotal: number = 0
        selectedAnswers
            .map((answer: QuestionChoicesValues) => answer.selected)
            .forEach((answer: string, index: number) => {
                if (answer === correctAnswers[index]) {
                    correctAnswersTotal += 1
                }
            })

        return (correctAnswersTotal / selectedAnswers.length) * 100
    }

    return (
        <div className="container">
            <div className="title">{question.title}:</div>
            <div>
                {selectedAnswers.map((choice: QuestionChoicesValues, index: number) => (
                    <Choice choice={choice} index={index} setAnswer={setAnswer} />
                ))}
            </div>
            <div>The answer is {allAnswersCorrect ? 'correct' : 'incorrect'}</div>
        </div>
    )
}
