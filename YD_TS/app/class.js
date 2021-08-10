function Food() {
    this.type = 'food'
}

Food.prototype.getType = function() {
    return this.type
}

function Vegetables(name) {
    this.name = name
}

Vegetables.prototype = new Food()

const tomato = new Vegetables('tomato')
console.log(tomato.getType())

class Parent {
    constructor(name) {
        this.name = name
    }
    getType() {
        return this.name
    }
}

class Child extends Parent {
    constructor(name, age) {
        super(name)
        this.age = age
    }
}

const c = new Child('yukiice', 15)

console.log(c)
console.log(c.getType())
console.log(c instanceof Child)
console.log(c instanceof Parent)

const obj = new Object()
console.error(obj.__proto__ === Object.prototype, '22')