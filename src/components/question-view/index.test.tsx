import { render } from '@testing-library/react'

import { QuestionView } from './question-view'

const props = {
    allAnswersCorrect: false,
    questionData: {
        title: 'Who are the best two football teams in the world',
        choices: [
            {
                id: 0,
                options: ['Man United', 'Arsenal'],
                correct: 'Man United',
            },
            { id: 1, options: ['Chelsea', 'Liverpool'], correct: 'Chelsea' },
        ],
    },
    correctAnswers: ['Man United', 'Chelsea'],
    setAllAnswersCorrect: jest.fn().mockImplementation(() => true),
    setBackground: jest.fn(),
}

describe('QuestionView', () => {
    it('should render the test title', () => {
        const { getByText } = render(<QuestionView {...props} />)
        expect(getByText('Who are the best two football teams in the world:')).toBeInTheDocument()
    })

    it('should render the "The answer is correct" text once all the correct answers have been selected', () => {
        const { getByText, rerender } = render(<QuestionView {...props} />)
        expect(getByText('The answer is incorrect')).toBeInTheDocument()

        rerender(<QuestionView {...props} allAnswersCorrect={true} />)

        expect(getByText('The answer is correct')).toBeInTheDocument()
    })
})
