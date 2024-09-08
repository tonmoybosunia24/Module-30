// ES6 Intro difference between var, Let and const


// const  money = 25;
// const rich = money + 20
// console.log(rich);
let count = 0;
count = count + 10;
// console.log(count)
const numbers = [25, 45, 23, 14, 16, 96, 50]
numbers[1] = 23;
numbers.push(11, 14, 12)
numbers.pop();
// console.log(numbers)
// Object
const Student = {
       name: "moyna Pakhi",
       class: 12
}
Student.name = "Tonmoy Bosunia"
// console.log(Student)
// let sum = 0;
// for(let i = 0; i < 10; i++){
       // sum = sum + i;
// }
// console.log(sum)



//  Function default parameter for not provided values



function add(num1 = 2, num2 = 5){ /* (num1 = 2, num2 = 5) ডিফল্ট মান হিসাবে ধরবে।যদি ফাংশন এর প্যারামিটার এ কোন মান না থাকে তাহলে এটাকে ধরবে।আর যদি থাকে তাহলে প্যারামিটার এর মানকেই ধরবে। */
       const result = num1 + num2;
       console.log(num1, num2, result)
       return result;
}
// const sum = add(5, 6);
// const sum = add(5);
// const sum = add();
// function fulllName(first, last = "hasan"){
//        const full = first + " " + last;
//        return full;
// }
// const fulll = fulllName("sohan")
// console.log(fulll)
// function friends(numbs = []){

// }
// function person(human = {}){

// }



// Template string, multiple line string, dynamic string



const first = "jaan";
const last = "pakhi";
const greet = "Potas Potas"
const name = first + " " + last + " " + greet;
// console.log(name)
const a = 10;
const b = 20;
const numberss = [52, 45, 63, 2, 85]
// const result = "The Sum Of " + a + " and  " + b + " is  " + (a + b);
// console.log(result)
const Studentss = {name: "john cena", age: 5}
const math = `The Sum Of ${numberss[0]} and ${Studentss.age} is ${a + b}` /* (`The Sum Of ${a} and ${b} is ${a + b}`) এভাবেও স্ট্রিং লেখা যায়। এবং স্টিং এর মধ্যে এ্যারে বা অবজেক্ট এর ভেল্যু কেও কল করা যায়। */
// console.log(math)
const email = "john \n" + 
"cena cena";
// console.log(email)
const challenge  = `john cena 
cena cena lage
mair dimu prochur
`; /* (``) এভাবে স্টিং কে যেভাবে ইচ্ছা সেভাবেই লেখা যায়। */
// console.log(challenge)



// Arrow function, multiple parameter, function body


// Function Declaration
function add(a, b){
       // const result = a + b;
       return a + b;
}
// Function Expression
const add2 = function(a, b){
       return a + b;
}
// Arrow Function
const add3 = (a, b) => a + b;
const sum = add3(5, 5);
// console.log(sum)



// More Arrow functions and big arrow function


// With Peramiter
const difference = (x, y) => x - y; 
const multiply = (first, second, third, forth) => first * second * third * forth;
const getAge = (person) => person.age;
const Studentsss = {name: "tonmoy", age: 19}
const age = getAge(Studentsss)
// console.log(age)
const getThird = numbersss => numbersss[2];
const thid = [5, 4, 11,2, 5,7,2];
const thirds = getThird(thid);
// console.log(thirds);

// No Peramiter
const getpi = () => Math.PI;
// console.log(getpi())

// Large Arrow Function

const doMath = (x,y,z) => {
       const sum = x + y + z;
       const mult = x * y * z;
       const restult = sum + mult;
       return restult;
}
const result = doMath(2,5,7);
// console.log(result)



// Spread operator, array max, copy arrays



const max = Math.max(6, 23, 14, 75,63, 22, 46, 85)
const numberssss = [3, 5, 7, 9, 11,13, 15, 17, 19, 21];
const Arraymax = Math.max(...numberssss) /* (...) এর সাহায্যে কোন এ্যারে থেকে তার ভেল্যু গুলা পাওয়া যায়। */
// console.log(...numberssss)
// console.log(Arraymax)

// Use spread Operatior To Copy
const nums = [4, 5, 87, 9]
const nums2 = nums;
const dosto = [... nums];
// console.log(dosto)
nums.push(100);
// console.log(nums)
// console.log(dosto)

// Advanced
const sonkkha = [...nums, 999];
// console.log(sonkkha)



// (advanced) Object and Array Destructure



const actor = {
       name: "Ananta",
       age: 30,
       phone: "01780259656",
       money: 1321324165465
}
// const phone = actor.phone;
// const names = actor.name
// const ages = actor.age
// Distructure
const{phone, money : tka} = actor; /* (const{phone} = actor;) এভাবে প্রোপারটি এর ভেল্যু গুলাকে পাওয়া যায়। */
// const{money} = actor;
// console.log(phone, tka)
// console.log(money)
// Advance
const numbersssss = [45,99];
const [fst, sec] = numbersssss;
const [x,y] = [12, 66];
function doubleThem(a, b){
       return [a*2, b*2]
}
const [prothom, ditiyo] =  doubleThem(6,9)
// console.log(prothom, ditiyo)



// Keys, values, entries, delete, seal, freeze



// const glasss = {
//        name: "glass",
//        color: "golden",
//        Price: 12,
//        iscleaned: true
// };
// console.log(glasss)
// const keys = Object.keys(glasss) /* (Object.keys(glasss)) কোন অবজেক্ট এর কিস বা প্রোপারটি গুলা বের করার জন্য। */
// const valuess = Object.values(glasss) /* (Object.values(glasss)) কোন অবজেক্ট এর ভেল্যু গুলা বের করার জন্য। */
// const pair = Object.entries(glasss) /* ( Object.entries(glasss)) এ্যারে এর মধ্যে এ্যারে বের করার জন্য */
// delete glasss.iscleaned; /* (delete glasss.iscleaned;) কোন অবজেক্ট থেকে কোন প্রোপারটি কে ডিলিট করার মাধ্যম। */
// const {iscleaned, ...shortGlass} = glasss; /* এটার সাহায্যেও রিমুভ করা যায়। */
// console.log(shortGlass)
// console.log(keys)
// console.log(valuess)
// console.log(pair)




// for of, for in, Module Summary and Practice Problems



const nus = [1, 6, 8, 10];
const nobab = "siraj ud doula";
// for(const char of nobab){
//        console.log(char)
// }
const glasss = {
       name: "glass",
       color: "golden",
       Price: 12,
       iscleaned: true
};
for(const key in glasss){ /* অবজেক্ট এর মধ্যে ফর লুপ চালানোর জন্য। */
       const value = glasss[key]
       console.log(key, value)
}