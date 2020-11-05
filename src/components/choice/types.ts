interface setAnswerParams {
    choice: string
    index: number
}

export interface ChoiceComponentProps {
    choice: {
        id: number
        options: string[]
        selected: string
    }
    index: number
    setAnswer: ({ choice, index }: setAnswerParams) => void
}

export interface DetermineWhichChoiceToHighlightParameters {
    choice: { selected: string; options: string[] }
}
