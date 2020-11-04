import { fireEvent, render } from '@testing-library/react'

import { QuestionView } from './question-view'

const props = {
    question: {
        title: 'Who are the best two football teams in the world',
        choices: [
            {
                id: 0,
                selected: 'Man United',
                correct: 'Man United',
                incorrect: 'Arsenal',
                showLeft: 'Arsenal',
                showRight: 'Man United',
            },
            {
                id: 1,
                selected: 'Chelsea',
                correct: 'Barcelona',
                incorrect: 'Chelsea',
                showLeft: 'Barcelona',
                showRight: 'Chelsea',
            },
        ],
    },
    setBackground: jest.fn(),
}

describe('QuestionView', () => {
    it('should render the test title', () => {
        const { getByText } = render(<QuestionView {...props} />)
        expect(getByText('Who are the best two football teams in the world:')).toBeInTheDocument()
    })

    it('should render the "The answer is correct" text once all the correct answers have been selected', () => {
        const { getByText } = render(<QuestionView {...props} />)
        expect(getByText('The answer is incorrect')).toBeInTheDocument()

        fireEvent.click(getByText('Man United'))
        fireEvent.click(getByText('Barcelona'))
        expect(getByText('The answer is correct')).toBeInTheDocument()
    })

    it('should allow editing after the correct answer has been given', () => {
        const { container, queryByText, getByText } = render(<QuestionView {...props} />)
        expect(getByText('The answer is incorrect')).toBeInTheDocument()

        fireEvent.click(getByText('Man United'))
        fireEvent.click(getByText('Barcelona'))
        expect(getByText('The answer is correct')).toBeInTheDocument()

        fireEvent.click(getByText('Arsenal'))
        expect(getByText('The answer is correct')).toBeInTheDocument()
    })
})
