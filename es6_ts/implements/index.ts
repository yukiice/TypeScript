interface Alarm{
    alert():void
}
interface Qs{
    name:string
}

interface Alarms extends Alarm {
    light():string
}

class Door{

}
class Doors extends Door  implements Alarms,Qs {
    public name: string;
    alert(){
        console.log('哈哈')
    }
    light(){
        return  this.name
    }
}

class Car implements Alarm {
    alert(){
        console.log('hahah ')
    }
}

let a  = new Door();
console.log(a)

let a1  = new Car();
console.log(a1)

