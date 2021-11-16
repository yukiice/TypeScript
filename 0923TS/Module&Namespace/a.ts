export interface FuncInterface {
    name:string,
    (arg:number):string
}

export  class Classc {
    constructor() {
    }
}

class ClassD {
    constructor() {
    }
}


export {ClassD}
export {ClassD as ClassNamesD}

export  {name} from './b'

export {name as NameProp} from './b'
