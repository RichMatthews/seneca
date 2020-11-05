import React from 'react'

import { QuestionSelectProps } from './types'
import './index.css'

export const QuestionSelect = ({
    questionNumber,
    setAllAnswersCorrect,
    setBackground,
    setQuestionNumber,
}: QuestionSelectProps) => {
    const setQuestionNumberAndResetBackgroundAndAnswers = (number: number) => {
        setAllAnswersCorrect(false)
        setBackground('#de5612, #de1215')
        setQuestionNumber(number)
    }
    return (
        <div className="question-select-container">
            <div>Select which question you would like to see</div>
            <div className="question-option">
                <div
                    className={`question-title ${questionNumber === 0 ? 'q-selected' : ''}`}
                    onClick={() => setQuestionNumberAndResetBackgroundAndAnswers(0)}
                >
                    Animal Cells
                </div>
                <div
                    className={`question-title ${questionNumber === 0 ? '' : 'q-selected'}`}
                    onClick={() => setQuestionNumberAndResetBackgroundAndAnswers(1)}
                >
                    Office Conditions
                </div>
            </div>
        </div>
    )
}
