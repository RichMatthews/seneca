export interface CorrectAnswersState {}
export interface QuestionViewProps {
    allAnswersCorrect: boolean
    correctAnswers: string[]
    questionData: {
        choices: []
        title: string
    }
    setAllAnswersCorrect: (correct: boolean) => void
    setBackground: (bgColor: string) => void
}

export interface QuestionChoicesValues {
    options: string[]
    correct: string
    id: number
    selected: string
}

export interface SetAnswerParams {
    choice: string
    index: number
}
