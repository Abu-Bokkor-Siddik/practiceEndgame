// function outPut(number) {
//     return number / 2 !== 0;
//   }

//   function number() {
//     for (let i = 1; i <= 50; i++) {
//       if (outPut(i)) {
//         console.log(i);
//       }
//     }
//   }

//   number();

// console.log('hello world ')
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Number.MIN_SAFE_INTEGER)
// console.log(Number.MAX_VALUE)
// let abc
// let bcd = null
// console.log(abc===bcd)
// console.log(bcd)

// false values
// "",0,null,undefine,NaN

// arithmetic operators
// +,-,*,/, % ,--,++

// %
// let a = 10;
// console.log(a%3)

// incremental
// pre Incremental  and Post incremental
// post Increment  pore 1 increment kore . pre increment age increment kore
// console.log(a++)
// console.log(a)

// pre increment
// let b = 9;
// console.log(++b)

// decrement -- same as increment

// 2 Assignment operators
//  +=,-=,*=,/=
//  let c = 10;
//  let d = 20;
//  c+=d
//  console.log(c)
//  c-=d
//  console.log(c)
//  c/=d
//  console.log(c)
//  c%=d
//  console.log(c)

// 3 comparison  operators
// == ,<,>,<= ,>= ,===(type ta soho korte chaile aita ) !(bang bole mane olte deoya )
// let e = 10 ;
// let f = 10;
// console.log(e<=f)

// 4 logical  operators
//  && and, || or, ! not

// statements
// js a jekono code ba line jeta kono ortho bujai take statement bole ...

//  math function
// let g = 4.264
//  console.log(Math.PI)
//  console.log(Math.abs(g))
//  console.log(Math.floor(g))
//  console.log(Math.ceil(g))
//  console.log(Math.round(g))
//  console.log(Math.max(33,444,456,577,666,4668))
//  console.log(Math.min(5445,44,5,3,1,2,0))
//  console.log(Math.floor(Math.random()*10))
//  console.log(Math.pow(2,4))
//  console.log(Math.sqrt(8))

// Date function
// const a = new Date
// console.log(a.toDateString())
// console.log(a.toTimeString())
// console.log(a.toLocaleTimeString())

// comments

//  single
/*multiple*/

// logic and conditions
// let h = 5;
// if (h % 2 == 0) {
//   console.log("event number");
// } else if (h % 2 == 1) {
//   console.log("not event number.  odd");
// } else {
//   console.log("not a number");
// }
// // switch conditions
// let i = new Date();
// let j = i.getDay();
// console.log(j);
// switch (j) {
//   case 0:
//     console.log("saturday ");
//     break;
//   case 1:
//     console.log("sunday");
//     break;
//   case 2:
//     console.log("monday ");
//     break;
//   case 3:
//     console.log("tuesday ");
//     break;
//   case 4:
//     console.log("wednesday");
//     break;
//   case 5:
//     console.log("thursday");
//     break;
//   case 6:
//     console.log("friday ");
//     break;
//     default:
//       console.log('not mutch')
// }


// ternary operators 
// let k = 20 ;
// console.log((k%2 ==0?'event number':'odd number'))



// short hand of and  or 
//  akhane name ta false value || oparetor ar jonno siddik asesse.
// let names = ''
// let fullname = names || 'siddik'
// console.log(fullname)

// // abar 
// // akhane namess ta jehetu true arse ar jonno atai borse....
// let namess ='masud'
// let fullnamess = namess || 'siddik'
// console.log(fullnamess)

// // and and  
// //  true holei pore jabe ...
//  let l = true 
//  l && console.log('value true ')


// loop for loop , while loop , do while loop,
// for loop 
// for(let i = 1;i<100;i++){
//   console.log(i,'i love my mother')
// }

// //  event number 
// for(let i = 0;i<=100;i++){
//   if(i%2==0){
//     console.log(i,'i love my mother')
//   }
// }
// //  odd nubmer 
// let sum = 0;
// for(let i = 0;i<=100;i++){
//   if(i%2==1){
//     console.log(i,'i love my mother')
//      sum +=i
//   }
// }
// console.log(sum)



// while loop 
//  let m = 0
//  while(m<10){
//   console.log('hi ')
//   m++
//  }
//  lotary 


//  a doroner kaj ar jonno while loop asese ...

//  let isTrue = true;
//  let mission = "'Alhamdullilah','subhanallah','allahhuyak ber'"
//  while(isTrue){
//   let o = Math.floor(Math.random()*mission)
//   if(o =='Alhamdullilah' ){
//     console.log('winner')
//     isTrue=false
//   }else{
//     console.log('loser')
//   }
//  }
// let mission = ['Alhamdullilah','SubhanAllah','Allahhuyak ber'];


// Get a random word from the missionArray vvi array ar bitore disi ... random word 
// let randomWord = mission[Math.floor(Math.random() * mission.length)];

// console.log(randomWord);


// let counts = 1;
// let isTrues = true
// let mission = ['Alhamdullilah','SubhanAllah','Allahhuyak ber'];
// while(isTrues){
//   let randomWord = mission[Math.floor(Math.random()*mission.length)]
//   console.log(randomWord)
 
//   if(randomWord==='Alhamdullilah'){
//     isTrues=false
//   }
  
//   counts++

// }


// do while loop  do ar code run hobe ... 
// let is = false;
// do{
//   console.log('do while ')
// }while(is)




// nested loop 
 
// for (let i =1;i<=5;i++){
//   let result = ''
//   for(let k= 1;k<=i;k++){
//     result+=k+" "
//   }
//   console.log(result)
// }
// let numbers =10
// for(let l = 1 ; l<=10;l++){
//   let results =''
//   for(let n =1;n<=10;n++){
//     // console.log(l)
//     results+=n+" "
//   }
//   console.log(results)
// }



//  speape kora ...
// for(m =1;m<=10;m++){
//   if(m==3){
//     continue

//   }
//   console.log(m)
// }

// for(o =1;o<=11;o++){
//   if(o==5){
 
//   break
// }
// console.log(o)
// }



// string 

// // string lateral
// console.log('hi man ')
// // constructor 
// console.log(String('yes man'))

// // escape 
// console.log('hi masud how are \'you\' ')

// const a = 'abc'
// const p ='ced'
// console.log(a<p)


// let q ='My name is '
// let r = 'siddik        '
// console.log(q.concat(r))
// console.log(q.substr(4))
// console.log(q.charAt(4))
// console.log(r.trim())
// console.log(q.split(" "))
// console.log(q.length)

// Array 
const a = [1,2,3,4,5,6]
// console.log(a[4])
// console.log(a?.length)
// const s =[2,3,4,5,6,7,8,9]
// let sum = 0;
// for(let a =0;a<s.length;a++){
//   // console.log(s[a])
//   sum+=s[a]
// }
// console.log(sum)
// for (let b =0;b<=s.length;b++){
//   // console.log(s [b])
//   if(s[b]%2 === 0){
//     console.log(s[b])
//   }
// }

// 

const s =[2,3,4,5,6,7,8,9]
console.log(s.splice(3,0,99))
console.log(s)

// Multidimensional Array
// 2 dymontional array 
const ami =[
  [33,44,55,66,77,88,99],
  [44,55,667,77,888,999],
  [99,88,77,66,55,44,33]
]
console.log(ami[1][5])
console.log(s.join(" , "))
console.log(Array.isArray(s))

let t ={
  name:'masud',
  age:23,
  3:33
}
t.favorite='blue'
console.log(t)
// array notetion
console.log(t['age'])
console.log(t['3'])

// remove an property in object 
let u ={
  x:3,
  y:4,
  a:50
}
u['x']=undefined
delete u.x
console.log(u)
// comparing two object
let v={
  a:3,
  b:4
}
let w={
  a:3,
  b:4
}
// 
console.log(v.a===w.a && v.b===v.b)
// itaret
console.log('a' in w)
for(let i in w){
  console.log(i + w[i])
}
console.log(Object.keys(w))
console.log(Object.values(w))
console.log(Object.entries(w))
const obj = (Object.assign({},w))
obj.p=400
console.log(obj)

// function 
function amis (n){
  console.log('hi',n)
}
amis(44)

function tume (n){
return n
}
 let q =tume(34)
 console.log(q)

//  function expression  function act like an value ...
let func = function(p){
  console.log(p)
}
func(44)
setTimeout(function(){
  console.log('hi man')
},1000)

// inner function 
function y (a,b){
  function x (){
    console.log(a, b)
  } 
  x()
}

y('hi','Siddik')
//  scope holo kono variable declare korle value gula kotha kotha theke access korte parbo ... seta control kore thekek... 
// end of basic js 

// know about functional js 
// pure function   akta function gokhon same value dive and same arggument nibe take pure function bole. and kono side effect thakbe na ...

function z(a){
  return a*a
}
console.log(z(3))
// side effects
var x = 10 
function amiss (){
 x = x*x
}
amiss()
console.log(x)
function amie(){
  console.log('hello world ')
}
amie()

// vvi importance 
// ammi()
let ammi = function (){
console.log('ai function not hoisting ')
}
ammi()