
let selectedColors = ['red', 'blue']
selectedColors.forEach(function(e, i) {
    console.log('eeeeee' + e + i)
})
console.log(selectedColors.length    )
selectedColors.forEach((e,i) => {
    console.log(1+e+i)
    })

var fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);

function myFunction(item, index) {
        console.log('dsdasd', item + index);
    }
//   document.getElementById("demo").innerHTML += index + ":" + item + "<br>";


function greet(name, lastName) { // name is parameter of greet function
    console.log('hello world ' + name + ' ' + lastName)
}

greet('john', 'dasdsad') // john is argument of greet function

