import React, { useEffect, useState } from 'react'
import shuffle from 'shuffle-array'

import { calculateBackgroundColor } from '../../constants/background-colors'
import { QUESTION_DATA, QUESTION_DATA_TWO } from '../../data'
import { QuestionView } from '../question-view'

import './index.css'

export const QuestionViewContainer = () => {
    const [background, setBackground] = useState<string>(calculateBackgroundColor(0))
    const [question, setQuestion] = useState<number>(0)
    const [questions, setQuestions] = useState<any>([])

    useEffect(() => {
        // would normally use this to fetch data from an API normally but as this is just a FE task data is hardcoded above
        // instead I've decided to randomize the choices so that you we don't get 4 correct answeres loaded from the start
        randomizeChoices()
    }, [])

    const randomizeChoices = () => {
        const questionData: any = question === 0 ? QUESTION_DATA : QUESTION_DATA_TWO

        const shuffleChoicesAndAddInitialSelectedChoice = questionData.choices.map((question: any) => {
            const shuffled = shuffle(question.options)[0]
            shuffle(question.options)
            return { ...question, selected: shuffled }
        })

        setQuestions(shuffleChoicesAndAddInitialSelectedChoice)
    }

    // obviously all the below stuff is a bit hacky but wanted to give an easy way of showing this is built in a reusable way
    return (
        <div className="data-container" style={{ background: `linear-gradient(${background})` }}>
            <div className="question-select">Select which question you would like to see</div>
            <div className="question-option">
                <div className={`question-title ${question === 0 ? 'q-selected' : ''}`} onClick={() => setQuestion(0)}>
                    Animal Cells
                </div>
                <div className={`question-title ${question === 0 ? '' : 'q-selected'}`} onClick={() => setQuestion(1)}>
                    Office
                </div>
            </div>
            <QuestionView question={questions} setBackground={setBackground} />
        </div>
    )
}
