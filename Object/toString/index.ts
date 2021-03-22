class demos{
    public name: string | undefined 
    constructor(name:string){
        this.name = name
    }
}
const dog1 = new demos('yukiice')
demos.prototype.toString  = function dogToString(){
    return `${this.name}`
}

console.log(dog1.toString())


class demo2{
    public name:string;
    public breed:string;
    public color:string;
    public sex:string;
    constructor(name:string,breed:string,color:string,sex:string) {
        this.name = name;
        this.breed = breed;
        this.color = color;
        this.sex = sex;
      }
}

let theDog = new demo2("Gabby", "Lab", "chocolate", "female");

console.log(theDog.toString())

