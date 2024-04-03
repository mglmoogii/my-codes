// console.log("Hello world");
// let a = 5;
// console.log(typeof("Hello")) //string
// console.log(typeof(true)) //boolean
// console.log(typeof("Name")) //string
// console.log(typeof(33)) //number
// console.log(typeof("90")) //string
// console.log(typeof(90+"77")) //string
// console.log(typeof({name:'Anu', age:15})) //object
// console.log(typeof(false)) //boolean
// console.log(typeof(1655/5)) //number
// console.log(typeof(["javascript", "html", "css"])) //object

// let x=5;
// let y=6;
// console.log(x, y)
// x++;
// y--;
// console.log(x,y)
// let x=2;
// let y=6;
// let z=3;
// console.log("x=",z+z, "y=",y-z, "z=", y/3,)

// let A;
// let B=parseInt(prompt("B-д утга оруул"))
// let C=parseInt(prompt("C-д утга оруул"))
// let D=parseInt(prompt("D-д утга оруул"))

// console.log("A=",A=B*C-D)

// let A = parseInt(prompt("Өдөрөө оруулна уу."));
// let B = parseInt(prompt("Цагаа оруулна уу."));
// console.log("Нийт цаг:",A*24+B);

// let A = parseInt(prompt("Төрсөн оноо оруулна уу."));
// let B = parseInt(prompt("Төрсөн сараа оруулна уу."));
// let C = parseInt(prompt("Төрсөн өдрөө оруулна уу."));
// console.log(
//   "Таны төрсөн огноо:",
//   2024 - A,
//   "жил",
//   15 - B,
//   "сар",
//   30 - C,
//   "өдөр"
// );

// let bornYear = 0;
// let bornMonth = 0;
// let bornDay = 0;
// let age = 0;
// let totalDay = 0;

// //////////////////// Дасгал 7
// let bornYear = parseInt(prompt("Төрсөн оноо оруулна уу."));
// let bornMonth = parseInt(prompt("Төрсөн сараа оруулна уу."));
// let bornDay = parseInt(prompt("Төрсөн өдрөө оруулна уу."));
// bornYear = parseInt(bornYear);
// age = 2024 - bornYear;
// totalDay = age * 365 + bornMonth*30 + bornDay;
// console.log("Та " + totalDay + " хоног амьдарсан байна.");

// //////////////Дасгал 8
// let too = 0;
// let a, b, c, d, e;
// too = parseInt(prompt("Та tooгоо оруулна уу."));
// a = too % 10;
// b = parseInt(too / 10) % 10;
// c = parseInt(too / 100) % 10;
// d = parseInt(too / 1000) % 10;
// e = parseInt(too / 10000);
// console.log(a+""+b+""+c+""+d+""+e+"");


//////////////Дасгал 9
let totalNumber = 0;
let niilber;
let a, b, c, d, e;
totalNumber = parseInt(prompt("Та tooгоо оруулна уу."));
a = totalNumber % 10;
b = parseInt(totalNumber / 10) % 10;
c = parseInt(totalNumber / 100) % 10;
d = parseInt(totalNumber / 1000) % 10;
e = parseInt(totalNumber / 10000);
niilber=a+b+c+d+e;
console.log("Оруулсан тоо:", totalNumber);
console.log(e+"+"+d+"+"+c+"+"+b+"+"+a+"=",niilber);