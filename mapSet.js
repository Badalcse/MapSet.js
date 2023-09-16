const oneArray = [1,2,3,4]
const twoArray = [5,6,7,8]

// const threeArray = oneArray.concat(twoArray)
// const threeArray = [oneArray, twoArray] 
// const threeArray = [...oneArray, ...twoArray]
// const threeArray = {...oneArray,...twoArray}

// console.log(threeArray);

// const name = new Object(
//     {name1: "badal"},
//     {name2: "kumar"}
// )
// console.log( name);

// function manyArgument(){
//     let args = Array.from(arguments)
//     let finalArr = args.map(e => e)
//     console.log(finalArr);
// }

// function manyArgument(...args){
//     console.log(typeof args);
//     let final = args.map(e => e)
//     console.log(final);
// }
// manyArgument(1,2,3)
// manyArgument(1,2,3,4,5,6)

// let MySet = new Set()

// MySet.add(1)

// console.log(MySet.size);

let mySet = [1,2,3,4,5]

// let num = new Set(mySet)

// console.log(num.size);
// console.log(num);

// num.add(9)
// console.log(num.has(9));

// const mp = new Map();
// mp.set("a", 10)
// mp.set("b", 12)
// mp.set("c",13)
// mp.set("d",12)

// mp.forEach((key, value)=>{
//     console.log(key, value);

// })

// let map1 = new Map([[1, 10],[2, 11],[3, 12],[4, 14]]);

// // map1.forEach((key, vale)=>{
// //     console.log(map1);
// // })
// console.log("map1: ");
// console.log(map1);

// let map1 = new Map([
//     [1, 10],
//     [2, 12], 
//     [3, 14]
// ]);
// console.log(map1);

// let map2 = new Map([
//     ["firstName", "badal"],
//     ["lastName", "kumar"],
//     ["firstName", "mohit"],
//     ["lastName", "kumar"]
// ]);
// console.log(map2);

// let map1 = new Map();

// map1.set("firstName", "badal")
// map1.set("lastName","kumar")
// map1.set("num1",1)
// map1.set("num2", 2)
//     .set("friend1", "gautham")
//     .set("friend", "rahul")

// console.log(map1);

// console.log("map has friend1" + map1.has("friend1"));
// console.log("map has friend2 " + map1.has("friend3"));

// map1.clear()
// console.log(map1);
// let set1 = new Set();
// set1.add(10).add(20).add(30)

// set1.add(40)

// console.log(set1);
// // console.log(typeof set1);
// // console.log(set1.size);

// // set1.delete(20)
// console.log(set1);

// console.log(set1.has(20));

let set1 = new Set(["badal","kumar","mohan","vikash"])

let newSet = set1[Symbol.iterator]();
console.log(newSet.next());
