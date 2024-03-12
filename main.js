// vaqt bilan ishlash
// vaqt SETTIMEOUT, SETINTERVAL, CLEARINTERVAL

// setTimeout(()=>{
//    console.log('salom dunyo');
// },5000)

// let a = setInterval(()=>{
//     console.log('a');

//     setTimeout(()=>{
//         clearInterval(a)
//     },5000)
// },3000)

// ? Sana
// let d = new Date()
let d = new Date('12-31-2002')
console.log(d);
console.log(d.getDate());//sana
console.log(d.getDay());// hafta kuni
console.log(d.getMonth());// oy
console.log(d.getFullYear());// year
console.log(d.getHours());// soat
console.log(d.getMinutes());// minut
console.log(d.getSeconds());// sekunt
console.log(d.getMilliseconds());// milli sekunt
console.log(d.getTime());// milli sekunt 1970-01-01 00:00:01
