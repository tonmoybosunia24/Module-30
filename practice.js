// const money = 25;
// const rich = money + 25;
// console.log(rich)
// const numbers = [25, 30,50, 96]
// numbers[2] = 26;
// numbers.push(33)
// numbers.pop()
// console.log(numbers)
// const Student = {
//        name: "rohim",
//        age: 29
// }
// Student.name = "korim"
// console.log(Student)
// let sum = 0;
// for(let i = 0; i < 10; i++){
//        sum = sum + i;
// }
// console.log(sum)

// function add(num1 = 2, num2 = 2){
//        const result = num1 + num2;
//        console.log(num1, num2, result)
//        return result;
// }
// const sum = add(5);
// console.log(sum)
// function fulllName(first, last = "hasan"){
//        const full = first + " " + last;
//        return full
// }
// const fulls = fulllName()
// console.log(fulls)
// const full = fullName("sohan")
// function fullName(name){
//        return name + "khan";
// }
// console.log(full)
// const a = 10;
// const b = 20;
// const numbers  = [5, 10, 15, 20, 25, 30];
// const Student = {name: "John Cena", Age: 20}
// const restult = "the Sum of " + a + " and " + b + " is " + (a + b);
// console.log(restult)
// const result = `the Sum of  ${numbers[0]} and  ${Student.Age} is ${ a + b}`
// console.log(result)
// const email = `hello
// john cena
// nice to meet you
// `
// console.log(email)
// function add(a, b){
//        return a + b;
// }
// const add = function(a, b){
//        return a + b;
// }
// const add = (a, b) => a + b;
// const sum = add(5, 6);
// console.log(sum)
// const difference = (x, y) => x - y;
// const multiply = (first, second, third, forth) => first + second + third + forth;
// const Student = {name: "tonmoy", age: 26};
// const getAge = (person) => person.age;
// const age = getAge(Student)
// console.log(age)
// const thid = [5, 4, 3, 9, 21, 24];
// const getThird = numbers => numbers[2];
// const thirds = getThird(thid);
// console.log(thirds)
// const getpi = () => Math.PI;
// console.log(getpi())
// const domath = (x,y,z) => {
//        const sum = x + y + z;
//        const mult = x * y * z;
//        const retult = sum + mult;
//        return retult
// }
// const result = domath(2, 5, 7)
// console.log(result)

// const max = Math.max(6, 8, 15, 42, 36, 14, 75, 20, 63, 48);
// console.log(max)
// const number = [3, 5, 7, 9, 11,13, 15, 17, 19, 21];
// const arraymax = Math.max(...number);
// console.log(arraymax)
// const num1 = [5, 6, 48, 25];
// const num2 = num1;
// const dosto = [num1];
// num1.push(17)
// console.log(...dosto)
// const sonkha = [...num1, 999]
// console.log(sonkha)

// const actor = {
//        name: "ananta",
//        age: 30,
//        phone: "01780259656",
//        money: 46546513214
// }
// const phone = actor.age;
// console.log(phone)
// const {phone : number} = actor;
// console.log(number)
// const number = [45, 25];
// const [first, second] = number;
// const [x, y] = [12, 14];
// function doubleThem(a, b){
//        return [a*2, b*2]
// }
// const [prothom, ditiyo] = doubleThem(2, 4);
// console.log(prothom, ditiyo)

// const glass = {
//        name: "glass",
//        color: "golden",
//        price: 12,
//        iscleaned: true
// }
// console.log(glass)
// const keys = Object.keys(glass)
// const values = Object.values(glass)
// const pair = Object.entries(glass)
// delete glass.price
// const {iscleaned, ...shortglass} = glass
// console.log(shortglass)

// const number = [1, 8, 2, 6, 5, 12];
// const nobab = "Siraj Ud Doula";
// for(const char of nobab){
//        console.log(char)
// }
// const glasss = {
//        name: "glass",
//        color: "golden",
//        Price: 12,
//        iscleaned: true
// };
// for(const value in glasss){
//        console.log(value)
// }



// Practice Problems

// const numbers = (num1, num2, num3) => {
//        const result =  num1 * num2 * num3;
//        return result;
// }
// const retults = numbers(2, 2, 2);
// console.log(retults)
// const Lines = `I Am A Web Developer
// I Love To Code
// I Love To Eat Biryani
// `
// console.log(Lines)
// const arrow = (num1, num2 = 5) =>{
//        const result = num1 + num2;
//        console.log(num1, num2, result)
//        return num1, num2, result
// }
// const results = arrow(5);
// console.log(results)
// const friends = ["Rohim", "Korim", "Tonmoy", "Sohan", "Shami"]
// const array = (friendsName) => {
//        let friendsNUmber = [];
//        for(const friend of friendsName){
//               if(friend.length % 2 === 0){
//                      friendsNUmber.push(friend)   
//               }
//        }
//        return friendsNUmber;
// }
// const fir = array(friends);
// console.log(fir)
// const numbers = [5, 7, 9];
// const array = (numbers) =>{
//        let squreCollection = 0;
//        for(const number of numbers){
//               const squre = number * number;
//               const squaree = squreCollection + squre;
//               squreCollection = squaree;           
//        }
//        const numberindex = numbers.length            
//        const avarage = squreCollection / numberindex;
//        return avarage;
// }
// const Total = array(numbers);
// console.log(Total)