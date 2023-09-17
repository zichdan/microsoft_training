// for (let i = 0; i < 10; i++ ) {
//     console.log(i);
// }

// //Counting up to 10
// let i = 0;
// while (i < 10) {
//  console.log(i);
//  i++;
// }

// let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Neapolitan", "Mint Chip"];

// for (let i = 0; i < iceCreamFlavors.length; i++) {
//   console.log(iceCreamFlavors[i]);
// } // Ends when all flavors are printed

// let numbers = [1, 2, 3, 4, 5];
// numbers.forEach(number => console.log(number)); // 1 2 3 4 5

// numbers.forEach((number, index) => console.log(`Number ${number} ${index}`));

// let number = [1, 2, -1, 4, 5];
// for(let i = 0; i< number.length; i++) {
//   if (number[i] < 0) {
//     break;
//   }
//   console.log(numbers[i]);
// }


// //                      FINDING AN ITEM BY USING find()

// let iceCreamFlavor = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Neapolitan", "Mint Chip"];
// iceCreamFlavor.find(flavor => flavor === "Chocolate") // "Chocolate"


// //         FILTER ITEMS WITH A COMMON PROPERTY BY USING FILTER()  

// let iceCreamFlavors = [
//   { name: "Chocolate", type: "Chocolate" }, 
//   { name: "Strawberry", type: "fruit"}, 
//   { name: "Vanilla", type: "Vanilla"}, 
//   { name: "Pistachio", type: "Nuts"}, 
//   { name: "Neapolitan", type: "Chocolate"}, 
//   { name: "Mint Chip", type: "Chocolate"}
// ];

// let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Neapolitan", "Mint Chip"];
// let result = iceCreamFlavors.find(flavor => flavor === "Chocolate");

// console.log(result); // This will print "Chocolate" to the console

//               OR THIS METHOD

// let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Neapolitan", "Mint Chip"];
// console.log(iceCreamFlavors.find(flavor => flavor === "Chocolate")); // "Chocolate"


// let iceCreamFlavors = [
//     { name: "Chocolate", type: "Chocolate" }, 
//     { name: "Strawberry", type: "fruit"}, 
//     { name: "Vanilla", type: "Vanilla"}, 
//     { name: "Pistachio", type: "Nuts"}, 
//     { name: "Neapolitan", type: "Chocolate"}, 
//     { name: "Mint Chip", type: "Chocolate"}
//   ];

// console.log(iceCreamFlavors.filter(flavor => flavor.type === "Chocolate")) // [{ name: "Chocolate", type: "Chocolate" }, { name: "Neapolitan", type: "Chocolate"}, { name: "Mint Chip", type: "Chocolate"}]);  



// //        CHECK A CONDITION BY USING Some() 
// console.log(iceCreamFlavors.some(flavor => flavor.type === "Nuts")) // true);


// console.log(iceCreamFlavors.filter(flavor => flavor.type !== "Nuts")) // returns everything except for Pistachio.;


// //    PROJECTION MAP
// let iceCreamFlavors = [
//   { name: "Chocolate", type: "Chocolate" }, 
//   { name: "Strawberry", type: "fruit"}, 
//   { name: "Vanilla", type: "Vanilla"}, 
//   { name: "Pistachio", type: "Nuts"}, 
//   { name: "Neapolitan", type: "Chocolate"}, 
//   { name: "Mint Chip", type: "Chocolate"}
// ];
// iceCreamFlavors.map(flavor => {
//   flavor.price = 1;
//   console.log(flavor);
//   return flavor;

// }) // every item now has a new property price: 1


// //           AGGREGATION
// let sales = [{
// date : '2021-05-01',
// amount: 2
// },
// {
// date : '2021-05-01',
// amount: 1
// }
// // and so on...
// ]

// let sum = 0;
// for( let i =0; i< sales.length; i++) {
// sum += sales[i].amount; 
// }
// console.log(`Total Sales ${sum}`);
// console.log(sum);


// //        REDUCE
// console.log(sales.reduce((acc, curr) => acc + curr.amount, 0));
