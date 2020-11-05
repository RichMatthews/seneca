export interface QuestionSelectProps {
    questionNumber: number
    setBackground: (color: string) => void
    setAllAnswersCorrect: (correct: boolean) => void
    setQuestionNumber: (questionNumber: number) => void
}
