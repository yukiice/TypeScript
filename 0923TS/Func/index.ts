const getArray = <T, U>(param1: T, param2: U, times: number): Array<[T, U]> => {
    return new Array(times).fill([param1, param2])
}

getArray<string, number>('1', 2, 3).forEach((item) => {
    console.log(item[0]);
    console.log(item[1]);
})

