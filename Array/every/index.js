let a = [1, 2, 3, 4, 5, 6];
const reduces = (item) => {
    return item < 3;
};
console.log(a.every(reduces));
