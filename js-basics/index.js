
// let selectedColors = ['red', 'blue']
// selectedColors.forEach(function(e, i) {
//     console.log('eeeeee' + e + i)
// })
// console.log(selectedColors.length    )
// selectedColors.forEach((e,i) => {
//     console.log(1+e+i)
//     })

// var fruits = ["apple", "orange", "cherry"];
// fruits.forEach(myFunction);

// function myFunction(item, index) {
//         console.log('dsdasd', item + index);
//     }
// //   document.getElementById("demo").innerHTML += index + ":" + item + "<br>";


// function greet(name, lastName) { // name is parameter of greet function
//     console.log('hello world ' + name + ' ' + lastName)
// }

// greet('john', 'dasdsad') // john is argument of greet function

// function test (myCondition) {
//     if (myCondition) {
//        return "It was **true**";
//     }
//     return "It was **false**";
//   }
//   let g = test(true)
// //   test(true);  // returns "It was true"
// //   test(false); // returns "It was false"
//   console.log(test(true))
//   console.log(test())
//   console.log(g + ' ...global g')
//   document.write(g)

//   function switchOfStuff(val) {
//     var answer = "";
//     // Only change code below this line
//     switch (val) {
//       case 'a':
//       case 'c':
//         answer = 'apple';
//         break;
//       case 'b':
//         answer = 'bird';
//         break;
//       case 'c':
//         answer = 'cat';
//         break;
//       default:
//       answer = 'stuff';
//     }
  
  
//     // Only change code above this line
//     return answer;
//   }
  
//   // Change this value to test
//   console.log(switchOfStuff('c'));
//   function myFun() {
//     console.log("Hello");
//     return "World";
//     console.log("byebye")
//   }
//   myFun();

//   var count = 0;

// function cc(card) {
//   // Only change code below this line
//   switch (card) {
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//       count ++;
//       break;
//     case 10:
//     case 'J':
//     case 'Q':
//     case 'K':
//     case 'A':
//       count --;
//       break;
//   }

//   if (count > 0) {
//     return count + ' Bet';
//   } else if (count <= 0) {
//     return count + ' Hold'
//   }
//   // Only change code above this line
// }

// // Add/remove calls to test your function.
// // Note: Only the last will display
// console.log(cc(2));
// console.log(cc(3));
// console.log(cc(7));
// console.log(cc('K'));
// console.log(cc('A'));
// console.log(count)

// var ourStorage = {
//   "desk": {
//     "drawer": "stapler"
//   },
//   "cabinet": {
//     "top drawer": { 
//       "folder1": "a file",
//       "folder2": "secrets"
//     },
//     "bottom drawer": "soda"
//   }
// };
// document.write(ourStorage.cabinet["top drawer"].folder2);  // "secrets"
// document.write(ourStorage.desk.drawer); // "stapler"

// var ourPets = [
//   {
//     animalType: "cat",
//     names: [
//       "Meowzer",
//       "Fluffy",
//       "Kit-Cat"
//     ]
//   },
//   {
//     animalType: "dog",
//     names: [
//       "Spot",
//       "Bowser",
//       "Frankie"
//     ]
//   }
// ];
// document.write(ourPets[0].names[1]); // "Fluffy"
// ourPets[1].names[0]; // "Spot"

// function multiplyAll(arr) {
//   var product = 1;
//   // Only change code below this line
//     for (var i = 0; i < arr.length; i++) {
//       for (var j = 0; j < arr[i].length; j++) {
//         product *= arr[i][j]
//       }
//     }
//   // Only change code above this line
//   console.log(product)
//   return product;
// }

// // Modify values below to test your code
// multiplyAll([[1,2],[3,4],[5,6,7]]);

// // Create a for loop that iterates up to 100 while outputting “fizz” at multiples of 3, “buzz” at multiples of 5 and “fizzbuzz” at multiples of 3 and 5

// for (let i = 1; i < 101; i++) {
//   if (i % 3 === 0  && i % 5 === 0) {
//     console.log (i, 'fizzbuzz')
//   } else if (i % 3 === 0) {
//     console.log (i, 'fizz')
//   } else if (i % 5 === 0) {
//     console.log (i, 'buzz')
//   }
// }

// // duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
// function duplicate(ttt) {
//    ttt.push(...ttt)
//  console.log(ttt)
// }
// duplicate([1,2,3,4,5])


// 'use strict';
// let printNumTwo;
// for (var i = 0; i < 3; i++) {
//   if (i === 2) {
//     printNumTwo = function() {
//       return i;
//     };
//   }
// }
// console.log(printNumTwo());
// // returns 2


// const user = {
//   johnDoe: { 
//     age: 34,
//     email: 'johnDoe@freeCodeCamp.com'
//   }
// };
// const { johnDoe: { age, email }} = user;
// console.log(age)


// const result = {
//   success: ["max-length", "no-amd", "prefer-arrow-functions"],
//   failure: ["no-var", "var-on-top", "linebreak"],
//   skipped: ["id-blacklist", "no-dup-keys"]
// };
// arr = [1,2,3,4,5,]

// const att = arr.map(el =>  {
//   return el
// })
// console.log(att)

// class SpaceShuttle {
//   constructor(targetPlanet) {
//     this.targetPlanet = targetPlanet;
//   }
// }
// const zeus = new SpaceShuttle('Jupiter');
// console.log(zeus)
// console.log(zeus.targetPlanet)
// /* Alter code below this line */
// class Vegetable {
//   constructor(name) {
//       this.name = name
//   }
// }
// /* Alter code above this line */

// const carrot = new Vegetable('carrot');
// console.log(carrot.name); // => should be 'carrot'
// console.log(carrot); // => should be 'carrot'

// let alphabet = "abcdefghijklmnopqrstuvwxyz";
// let len = alphabet.length;
// for (let i = 0; i <= len; i++) {
//   // loops one too many times at the end
//   console.log(alphabet[i]);
// }
// for (let j = 1; j < len; j++) {
//   // loops one too few times and misses the first character at index 0
//   console.log(alphabet[j]);
// }
// for (let k = 0; k < len; k++) {
//   // Goldilocks approves - this is just right
//   console.log(alphabet[k]);
// }

function factorialize(num) {
  let i = 1;
  if (num === 0) {
    return 1
  } else {
    return num * i ``
  }
}

console.log(factorialize(5));
