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



 let istrue = true;
 while(istrue){
  let o = Math.floor(Math.random()*10)
  if(o==9 ){
    console.log('winner')
    istrue=false
  }else{
    console.log('loser')
  }
 }