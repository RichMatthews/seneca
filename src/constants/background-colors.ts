// I tried to make this as resuable as possible for different values,
// this works for now but would like to make it more robust if I had more time
export const calculateBackgroundColor = (value: number) => {
    switch (true) {
        case value === 0:
            return '#fc8c03, #fc5a03'
        case value > 0 && value < 25:
            return '#fcb103, #fc8c03'
        case value >= 25 && value < 50:
            return '#fcc203, #fcb103'
        case value >= 50 && value < 75:
            return '#fcd703, #fcc203'
        case value >= 75 && value < 99:
            return '#fce703, #fcd703'
        default:
            return '#47e4c1, #07cddd'
    }
}
