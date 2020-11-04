import React, { useEffect, useState } from 'react'

import { calculateBackgroundColor } from '../../constants/background-colors'

import { QuestionViewProps, CorrectAnswersState, SetAnswerParams, QuestionChoicesValues } from './types'
import './index.css'

export const QuestionView = ({ question, setBackground }: QuestionViewProps) => {
    const [selectedAnswers, setSelectedAnswers] = useState<QuestionChoicesValues[]>([])
    const [correctAnswers, setCorrectAnswers] = useState<CorrectAnswersState[]>([])
    const [allAnswersCorrect, setAllAnswersCorrect] = useState<boolean>(false)

    useEffect(() => {
        console.log(question, 'qat')
        setCorrectAnswers(question.map((choice: QuestionChoicesValues) => choice.correct))
        setSelectedAnswers(question)
    }, [question])

    const setAnswer = ({ choice, index, side }: SetAnswerParams) => {
        if (allAnswersCorrect) return
        let copy = [...selectedAnswers]

        if (side === 'right') {
            copy[index].selected = choice.options[1]
        } else {
            copy[index].selected = choice.options[0]
        }

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

    const determineWhichClassToUse = ({ choice }: { choice: { selected: string; options: any } }) => {
        if (choice.selected === choice.options[1]) {
            return 'highlighted-choice highlighted-choice-right'
        }
        return 'highlighted-choice highlighted-choice-left'
    }

    return (
        <div className="container">
            <div className="title">{question.title}:</div>
            <div>
                {selectedAnswers.map((choice: QuestionChoicesValues, index: number) => (
                    <div className="choices-container" key={choice.id}>
                        <div className="choice" onClick={() => setAnswer({ choice, index, side: 'left' })}>
                            {choice.options[0]}
                        </div>
                        <div className="choice" onClick={() => setAnswer({ choice, index, side: 'right' })}>
                            {choice.options[1]}
                        </div>
                        <div className={determineWhichClassToUse({ choice })} />
                    </div>
                ))}
            </div>
            <div>The answer is {allAnswersCorrect ? 'correct' : 'incorrect'}</div>
        </div>
    )
}
