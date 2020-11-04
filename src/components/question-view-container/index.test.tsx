import { render } from '@testing-library/react'

import { QuestionViewContainer } from './question-view-container'

it('should render "The answer is incorrect" text by', () => {
    const { getByText } = render(<QuestionViewContainer />)
    expect(getByText('The answer is incorrect')).toBeInTheDocument()
})

// it('should render "The answer is incorrect" text by', () => {
//     const { getByText } = render(<QuestionViewContainer />)
//     expect(getByText('The answer is incorrect')).toBeInTheDocument()
// })
