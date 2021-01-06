
'use strict';

let globalName = 'global name';
{
    let name ='ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
}

console.log(globalName);

{
    age = 4;
    var age;
}
console.log(age);

const daysInWeek =7;
const maxNumber = 5;

//Note!
 //Immutable data types: primitive types, frozen objects (i.e. object.freeze())
 //Mutable data types: all objects by default are mutable in JS
 //favor immutable data type always for a few reasons:
 // -security
 // -thread safety
 // - reduce human mistakes

 //4.Variable types
 //primitive , single item: number,string, boolean, null, undefined, symbol
 //object , box container
 //function, first-class function

 //number
const count = 17;
const size = 17.1;
console.log(`value: ${count}, type : ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number'/2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

const bigInt = 121340233439248239492841n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

const char ='c';
const brendan = 'brendan';
const greeting = 'hello'+ brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`;
console.log(`value: ${helloBob}, type : ${typeof helloBob}`);

const canRead = true;
const test = 3<1;
console.log(`value: ${canRead}, type : ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

let nothing = null;
console.log(`value: ${nothing}, type:${typeof nothing}`);

let x = undefined;
console.log(`value: ${x}, type: ${typeof x}`);

const symbol1 = Symbol('id');
const symbol2 = Symbol('id');


let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7'+5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8'/'2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));

