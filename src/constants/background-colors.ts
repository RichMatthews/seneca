// I tried to make this as resuable as possible for different values,
// this works for now but would like to make it more robust if I had more time
export const calculateBackgroundColor = (value: number) => {
    switch (true) {
        case value === 0:
            return '#fc5a03, #fc4103'
        case value > 0 && value < 25:
            return '#fc6f03, #fc5a03'
        case value >= 25 && value < 50:
            return '#fc8c03, #fc6f03'
        case value >= 50 && value < 75:
            return '#fc9d03, #fc8c03'
        case value >= 75 && value < 99:
            return '#fcc603, #fc9d03'
        default:
            return '#47e4c1, #07cddd'
    }
}
