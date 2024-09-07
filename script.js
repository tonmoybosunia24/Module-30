// ES6 Intro difference between var, Let and const


const  money = 25;
const rich = money + 20
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