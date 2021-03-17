// function szqc(arr:any[]) {
//     return Array.from(new Set(arr))
// }
// const arrs:number[] = [1,2,4,2,2,5,3,4,5]
// console.log(szqc(arrs))
// let map = new Map();
// map.set(["a"], 555);
// console.log(map.get(["a"]));
// let maps = new Map();
// let k1 = ["a"];
// let k2 = ["a"];
// map.set(k1, 111).set(k2, 222);
// console.log(map.get(k1), "k1");
// console.log(map.get(k2), "k2");
// let map11 = new Map([
//     ['F','no'],
//     ['T','yes']
// ])
// for(let key of map11.keys()){
//     console.log(key)
// }
// let map =  new Map([
//     [1,'11'],
//     [2,'22'],
//     [3,'33']
// ])
// console.log([...map.keys()])
// function mapToObj(objMap: any) {
//   let obj = Object.create(null)
//   for (let [key, v] of objMap) {
//     obj[key] = v;
//   }
//   return obj;
// }
// let map = new Map().set("yes", 111).set("no", 222);
// console.log(mapToObj(map))
// function objToStrMap(obj:any){
//   let map = new Map()
//   for(let  k of Object.keys(obj)){
//     map.set(k,obj[k])
//   }
//   return map
// }
// let obj:object = {
//   name:'yukiice',
//   age:15
// }
// console.log(objToStrMap(obj))
