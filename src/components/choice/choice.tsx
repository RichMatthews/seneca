import React from 'react'

import { ChoiceComponentProps, DetermineWhichChoiceToHighlightParameters } from './types'
import './index.css'

export const Choice = ({ choice, index, setAnswer }: ChoiceComponentProps) => {
    const determineWhichChoiceToHighlight = ({ choice }: DetermineWhichChoiceToHighlightParameters) => {
        if (choice.selected === choice.options[1]) {
            return 'highlighted-choice highlighted-choice-right'
        }
        return 'highlighted-choice highlighted-choice-left'
    }

    const leftHandSideTextIsSelected = choice.options[0] === choice.selected

    return (
        <div className="choices-container" key={choice.id}>
            <div
                className={`choice ${leftHandSideTextIsSelected ? 'text-selected' : ''}`}
                onClick={() => setAnswer({ choice: choice.options[0], index, side: 'left' })}
            >
                {choice.options[0]}
            </div>
            <div
                className={`choice ${!leftHandSideTextIsSelected ? 'text-selected' : ''}`}
                onClick={() => setAnswer({ choice: choice.options[1], index, side: 'right' })}
            >
                {choice.options[1]}
            </div>
            <div className={determineWhichChoiceToHighlight({ choice })} />
        </div>
    )
}
