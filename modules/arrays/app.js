for (let i = 0; i < 10; i++ ) {
    console.log(i);
}

//Counting up to 10
let i = 0;
while (i < 10) {
 console.log(i);
 i++;
}

let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Neapolitan", "Mint Chip"];

for (let i = 0; i < iceCreamFlavors.length; i++) {
  console.log(iceCreamFlavors[i]);
} // Ends when all flavors are printed

let numbers = [1, 2, 3, 4, 5];
numbers.forEach(number => console.log(number)); // 1 2 3 4 5

numbers.forEach((number, index) => console.log(`Number ${number} ${index}`));

let number = [1, 2, -1, 4, 5];
for(let i = 0; i< number.length; i++) {
  if (number[i] < 0) {
    break;
  }
  console.log(numbers[i]);
}