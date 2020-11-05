import React, { useEffect, useState } from 'react'

import { calculateBackgroundColor } from '../../constants/background-colors'

import { SetAnswerParams, QuestionViewProps, QuestionChoicesValues } from './types'
import { Choice } from '../choice'

import './index.css'

export const QuestionView = ({
    allAnswersCorrect,
    correctAnswers,
    questionData,
    setAllAnswersCorrect,
    setBackground,
}: QuestionViewProps) => {
    const [selectedAnswers, setSelectedAnswers] = useState<QuestionChoicesValues[]>([])

    useEffect(() => {
        setSelectedAnswers(questionData.choices)
    }, [questionData])

    const setAnswer = ({ choice, index }: SetAnswerParams) => {
        if (allAnswersCorrect) return
        let copy = [...selectedAnswers]

        copy[index].selected = choice

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
            <div className="title">{questionData.title}:</div>
            <div>
                {selectedAnswers.map((choice: QuestionChoicesValues, index: number) => (
                    <Choice key={choice.id} choice={choice} index={index} setAnswer={setAnswer} />
                ))}
            </div>
            <div>The answer is {allAnswersCorrect ? 'correct' : 'incorrect'}</div>
        </div>
    )
}
