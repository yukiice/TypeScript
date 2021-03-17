"use strict";
exports.__esModule = true;
var arr = [
    {
        id: 1,
        name: 'yukiice',
        about: 'hello'
    },
    {
        id: 2,
        name: 'qqq',
        about: "qqq holo"
    },
    {
        id: 3,
        name: 'yukiice',
        about: 'holo'
    },
];
var arr2 = arr.find(function (item) {
    return item.name === 'yukiice';
});
console.log(arr2 === null || arr2 === void 0 ? void 0 : arr2.about);
