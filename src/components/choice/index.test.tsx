import { fireEvent, render } from '@testing-library/react'

import { Choice } from './choice'

const mockSetAnswer = jest.fn()

const props = {
    choice: {
        options: ['Chicken', 'Pizza'],
    },
    index: 0,
    setAnswer: mockSetAnswer,
}

describe('QuestionView', () => {
    it('should render both choices', () => {
        const { getByText } = render(<Choice {...props} />)
        expect(getByText('Chicken')).toBeInTheDocument()
        expect(getByText('Pizza')).toBeInTheDocument()
    })

    // it('should render ', () => {
    //     const { getByText } = render(<Choice {...props} />)
    //     expect(mockSetAnswer).not.toHaveBeenCalled()
    //     fireEvent.click(getByText('Pizza'))

    //     expect(mockSetAnswer).toHaveBeenCalledWith('Pizza')
    // })
})
