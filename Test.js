// function oddNumber(numbers){
//     for(let i = 0; i < numbers.length; i++){
//         const index = i;
//         const element = numbers[index];
//         console.log(index, element);
//     }
// };

// const myNumbers = [12, 10, 25, 56, 81];
// oddNumber(myNumbers);

// ............GET THE LARGEST NUMBER..............
// function maxInArray(numbers){
//     let largest = numbers[0];
//     for(let i = 0; i < numbers.length; i++){
//         const index = i;
//         const element = numbers[index];
//         if(element  > largest){
//             largest = element;
//         }
//     }
//     return largest;
// }

// const heights = [120, 150, 130, 170, 200];
// const heightsNumber = maxInArray(heights);
// console.log(heightsNumber);






// ---------- 1. feetToInch ----------
// function feetToInch(feet){
//     const inch = feet * 12;
//     return inch;
// };

// const dadaFeet = 5;
// const result = feetToInch(dadaFeet);
// console.log(result);

// ---------- 2. centimeterToMeter ----------
// function centimeterToMeter(centimeter){
//     const Meter = centimeter / 100;
//     return Meter;
// };

// const dataCentimeter = 1000;
// const result = centimeterToMeter(dataCentimeter);
// console.log(result);

// ---------- 3. paperRequirements ----------
// function paperRequirements(firstBook, secondBook, thirdBook){
//     const firstBookPage = firstBook * 100;
//     const secondBookPage = secondBook * 200;
//     const thirdBookPage = thirdBook * 300;
//     const totalBookPage = firstBookPage + secondBookPage + thirdBookPage;
//     return totalBookPage;
// };

// const bookOne = 10;
// const bookTwo = 5;
// const bookThree = 3;
// const result = paperRequirements(bookOne, bookTwo, bookThree);
// console.log(result);

// ---------- 4. bestFriend ----------
// function bestFriend(friends){
//     let largest = friends[0].length;
//     for(let i = 0; i < friends.length; i++){
//         const index = i;
//         const allFriends = friends[index];
//         if(allFriends.length  > largest){
//             largest = allFriends;
//         }
//     }
//     return largest;
// };

// const myFriends = ['sakib', 'md rakib', 'akib', 'hakib', 'jhankar'];
// const result = bestFriend(myFriends);
// console.log(result);

// ---------- 5. Tricky array ----------
// function positiveArray(numbers){
//     for(let i = 0; i < numbers.length; i++){
//         const index = i;
//         const element = numbers[index];
//         if(element  <= 0){
//             return;
//         }
//         console.log(element);
//     }
// }

// const allNumbers = [120, 150, 130, 170, 0, -5, 50, 200];
// const result = positiveArray(allNumbers);
// console.log(result);

















// 1. convert radian to degree
function radianToDegree(radians){
    let pi = Math.PI;
    const degree = radians * (180/pi);
    const number = Number(degree).toFixed(2);
    return number;
};

const dadaRadian = 'hello';
const result = radianToDegree(dadaRadian);
console.log(result);

// 2. check whether the given file name is a javaScript file or not
// function isJavaScriptFile(files){
//         if(files.charAt(files.length - 1) === 's' && files.charAt(files.length - 2) === 'j' && files.charAt(files.length - 3) === '.') {
//             return true;
//         } else {
//             return false;
//         }
// };

// const myFile = 'javaScriptFile.js';
// const result = isJavaScriptFile(myFile);
// console.log(result);

// 3. calculate the total oil price that I have to pay
// function oilPrice(diesel, petrol, octane){
//     const dieselPrice = diesel * 114;
//     const petrolPrice = petrol * 130;
//     const octanePrice = octane * 135;
//     const totalOilPrice = dieselPrice + petrolPrice + octanePrice;
//     return totalOilPrice;
// };

// const dieselQuantity = 0;
// const petrolQuantity = 2;
// const octaneQuantity = 3;
// const result = oilPrice(dieselQuantity, petrolQuantity, octaneQuantity);
// console.log(result);

// 4. public bus seat price for remaining people 
// function publicBusFare(passengers){
//     const remainingReservedBus = passengers % 50;
//     const remainingMicroBus = remainingReservedBus % 11;
//     const publicBusFare = remainingMicroBus * 250;
//     return publicBusFare;
// };

// const passengerData = 365;
// const result = publicBusFare(passengerData);
// console.log(result);

// 5. Is Best Friend
// function isBestFriend(friends){
//     for(let i = 0; i < friends.length; i++){
//         if(friends[0].name  == friends[1].friend && friends[0].friend  == friends[1].name){
//             return true;
//         } else {
//             return false;
//         }
//     }
// };

// const myFriends = [
//     {name: 'Tom', friend: 'Rock'},
//     {name: 'Rock', friend: 'Tom'}
// ];
// const result = isBestFriend(myFriends);
// console.log(result);
