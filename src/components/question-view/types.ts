export interface CorrectAnswersState {}
export interface QuestionViewProps {
    question: any
    setBackground: (bgColor: string) => void
}

export interface QuestionChoicesValues {
    options: any
    correct: string
    id: number
    selected: string
}

export interface SetAnswerParams {
    choice: any
    index: number
    side: string
}
