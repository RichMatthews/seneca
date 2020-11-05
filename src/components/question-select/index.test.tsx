import { fireEvent, render } from '@testing-library/react'

import { QuestionSelect } from './question-select'

const mockSetQuestionNumber = jest.fn()

const props = {
    questionNumber: 0,
    setAllAnswersCorrect: jest.fn(),
    setBackground: jest.fn(),
    setQuestionNumber: mockSetQuestionNumber,
}

it('should set the question number correctly when selected', () => {
    const { getByText } = render(<QuestionSelect {...props} />)

    fireEvent.click(getByText('Animal Cells'))

    expect(mockSetQuestionNumber).toHaveBeenCalledWith(0)

    fireEvent.click(getByText('Office Conditions'))

    expect(mockSetQuestionNumber).toHaveBeenCalledWith(1)
})
