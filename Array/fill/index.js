const arr = [1, 2, 3, 4, 5, 6, 7];
arr.fill(2, 3, 4);
console.log(arr, '给全');
arr.fill(3, 5);
console.log(arr, '只给起始位置');
arr.fill(5);
console.log(arr, '只给val');
