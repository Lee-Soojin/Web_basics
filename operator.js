// 1. String concatenation
console.log('my' + 'cat');
console.log('1'+ 2);
console.log(`string literals : 1+2 = ${1 + 2}`);

//2. Numeric operators
console.log(1+1);
console.log(1-1);
console.log(1/1);
console.log(1*1);
console.log(5%2);
console.log(2**3);

//3.Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
//counter = counter +1;
//preIncrement = counter;
console.log(`preIncrement : ${preIncrement}, counter:${counter}`);
const postIncrement = counter++;
//post Increment = counter;
//counter = counter +1;
console.log(`postIncrement : ${preIncrement}, counter:${counter}`);
const preDecrement = --counter;
console.log(`preDecrement : ${preIncrement}, counter:${counter}`);
const postDecrement = counter--;
console.log(`postDecrement : ${preIncrement}, counter:${counter}`);

//4. Assignment operators
let x = 3;
let y = 6;
x+= y;
x-=y;
x*=y;
x/=y;

//5.Comparison operators
console.log(10<6);
console.log(10<=6);
console.log(10>6);
console.log(10>=6);

//6.Logical operators : \\ $$ !
const value1 = true;
const value2 = 4<2;

console.log(`or: ${value1 || value2 || check()}`);

console.log(`and: ${value1 && value2 && check()}`);

function check(){
    for (let i = 0; i<10; i++){
        console.log('happy');
    }
    return true;
}

console.log(!value1);


//7.Equality
const stringFive = '5';
const numberFive =5;

//== loose equality , with type conversion
console.log(stringFive == numberFive);
console.log(stringFive !== numberFive);

//===strict equality , no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

const ellie1 = {name: 'ellie'};
const ellie2 = {name : 'ellie'};
const ellie3 = ellie1;

console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

//equality - puzzler
console.log(0 == false); // true
console.log(0=== false); //false
console.log(''== false); // true
console.log(''=== false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

//8. Conditional operators : if
//if, else if, else
const name = 'ellie';
if(name === 'ellie'){
    console.log('Welcome, Ellie!');
}
else if (name === 'coder'){
    console.log('You are amazing coder');
}
else {
    console.log('unknown');
}

//9. Ternary operator
//condition?value1 : value2;
console.log(name === 'ellie'?'yes': 'no');

//10. Switch statement
const browser = 'IE';
switch (browser){
    case 'IE':
        console.log('go away');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
    
}

//11. Loops
let i = 3;
while(i > 0){
    console.log(`while: ${i}`);
    i--;
}

// do while
do{
    console.log(`do while: ${i}`);
    i--;
} while(i>0);
//for loop , for(begin; condition; step)

for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i=i-2){
    console.log(`inline variable for: ${i}`);
}

//nested loops
for(let i =0; i <10; i++){
    for(let j=0; j<10; j++){
        console.log(`i: ${i}, j:${j}`);
    }
}

//break , continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i =0; i<=10; i++)
{
    if(i%2===0){
        console.log(`i :${i}`);
    }
    else{
        continue;
    }
}

for(let i =0; i<=10; i++)
{
    if(i!==8)
    {
        console.log(`i:${i}`);
    }
    else
    {
        break;
    }

}






//Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)