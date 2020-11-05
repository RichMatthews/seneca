interface setAnswerParams {
    choice: string
    index: number
    side: string
}

export interface ChoiceComponentProps {
    choice: any
    index: number
    setAnswer: ({ choice, index, side }: setAnswerParams) => void
}

export interface DetermineWhichChoiceToHighlightParameters {
    choice: { selected: string; options: string[] }
}
