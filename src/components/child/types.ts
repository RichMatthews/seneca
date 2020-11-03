export interface ChildProps {
    question: any
    setBackground: (bgColor: string) => void
}

export interface SelectedAnswersState {
    correct: string
    incorrect: string
    id: number
    selected: string
    showLeft: string
    showRight: string
}
export interface CorrectAnswersState {}

export interface SetAnswerParams {
    choice: {
        showLeft: string
        showRight: string
    }
    index: number
    side: string
}
