enum Status {
    One,
    Two,
    Three,
}

let q: Status.One;
q = Status['One'];


enum Stringenum {
    'error message' = 400,
    'success' = 200,
}

console.log(Stringenum[400])
console.log(Stringenum[200])

const enum Status1 {
    success = 200
}

const newStatus = Status1.success
const newStatus1 = Status1['200']

console.log(newStatus1,'halo1')
console.log(newStatus, 'halo')




