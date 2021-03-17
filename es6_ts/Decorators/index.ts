const provideMap  =new WeakMap()

function provider(target:any){
    provideMap.set(target,null)
}

// io
@provider
class FlowerService{
    strew(){
        console.log('strew flower')
    }
}

function inject(target:any){
    
}

@inject
class Gretter{
    constructor(private readonly flower:FlowerService){
        
    }
    greet(name:string):string{
        console.log(`holo ${name}`)
        this.flower.strew()
        return `hello`
    }
}

const  g  = new Gretter(new FlowerService())

g.greet('ok')






