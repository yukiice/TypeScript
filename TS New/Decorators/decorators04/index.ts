function immutable(target:any,propertyKey:string,descriptor:PropertyDescriptor) {
    const ori = descriptor.set
    descriptor.set = function(value:any){
        return ori?.call(this,{...value})
    }
}

class CO{
    private _point = {x:0,y:0}
    
    @immutable
    set point(value:{x:number,y:number}){
        this._point = value
    }
    get point(){
        return this._point
    }
}

const co = new CO()

const point = {x:1,y:1}

co.point = point

console.log(co.point === point)