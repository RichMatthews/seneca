export const calculateBackgroundColor = (value: number) => {
    switch (true) {
        case value === 0:
            return '#de5612, #de1215'
        case value > 0 && value < 25:
            return '#de7f12, #de5612'
        case value >= 25 && value < 50:
            return '#dea112, #de7f12'
        case value >= 50 && value < 75:
            return '#deb212, #dea112'
        case value >= 75 && value < 99:
            return '#dec312, #deb212'
        default:
            return '#47e4c1, #07cddd'
    }
}
