// console.log("Hello world");


// // var a = 10;
// // var a = 40;

// // console.log(a);


// // let b = 100;
// // // let b = 50;
// // b = 200;

// // console.log(b);


// // const c = 10;

// // console.log(c);

// // // ........................ Data Types ..............................

// // let stdName = 'ali'   // string
// // console.log("Ali is a ", typeof(stdName), "value");


// // let rollNo = 12    // Number
// // console.log(typeof(rollNo));


// // let is_Present = false    // Boolean
// // console.log(typeof(is_Present));

// // let null_value = null;;
// // console.log(typeof(null_value));

// // let age;
// // console.log(typeof(age));


// // let year;
// // console.log(typeof(year));

// // let ispresent = true;
// // console.log( "ali is true" ,typeof(ispresent));

// // let rollno = 13;
// // console.log( "rollNo 13", typeof(rollno));

// // let is_past = false;
// // console.log("this is true", typeof(is_past))

// // let h = 16;
// // console.log("is a num", h);
// // operators..................
// let x =25;
// let y =10;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// // console.log(x ** y);
// console.log(x / y);
// console.log(x < y);
// console.log(x > y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x += y);
// // console.log(x -= y);
// // console.log(x  y);

// console.log(Math.floor(7.99));
// console.log(Math.min(1,3,4,5,5.9,5,7,0,3,10))
// console.log(Math.max(10,111,466,888,444,643,1,3))
// console.log(Math.round(6.99))
// console.log(Math.sqrt(64))
// console.log(Math.abs(-200))
// // console.Log(Math.cbrt(225))
// console.log(Math.ceil(2.1))
// ///////////////////////////////////

// let nom =["name","rollno","class",[1,4,"5th",[2,"ali","8th"]]]
// // console.log(nom[0])
// console.log(nom[3][3][2])

// let Books = ["eng","computer","physics","bio","islamiat",[1,2,3,4,["ali","hassan"]]]
// console.log(Books[5][4][1]);
// let a = 20;
// let d = 24;
// console.log(`I am ${a} ${d} years old`);
////////////////////////////////////////////
let student_data = [
    "Ali Abbas",
    20,
    ["math","physics","Cs"] ,
    [
     ["Quiz1", "physics",20]  ,
     ["Quiz2", "CS", 40],
     ["Quiz3", "math", 29], 
    ]
]
console.log(`total marks =`, student_data[3][0][2] + student_data[3][1][2] + student_data[3][2][2])
console.log(`my name is`, student_data[0])
console.log(`my age is`, student_data[1])
console.log(`my subjects are`, student_data[2][0],`,`,student_data[2][1],`&`,student_data[2][2])
console.log(`i have`, student_data[3][0][2] ,`marks in`,student_data[3][0][1], `marks`)
console.log(`i have`, student_data[3][1][2] ,`marks in`,student_data[3][1][1], `subject` ,student_data[3][1][0])
console.log(`in`, student_data[3][2][2] ,`subject i have`,student_data[3][2][1] ,`marks.`)
console.log(`my total marks =`, student_data[3][0][2] + student_data[3][1][2] + student_data[3][2][2])
console.log(`my name total marks = `, student_data[3][0][2] + student_data[3][1][2] + student_data[3][2][2])