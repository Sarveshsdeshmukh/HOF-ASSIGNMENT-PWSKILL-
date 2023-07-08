// 3. Build a feature for Store's Inventory.
// Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript
// program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should
// use the map higher-order function to create a new object with the converted prices in Rupees.

let listofItems = {
    "item1": 12,
    "item6": 11,
    "item5": 3, //USD Price
    "item2": 2,
    "item4": 1,
}

const exchangeRate = 80;


const convertedItems = listofItems.map((item, key) => {
  return {
    key,
     priceInRupee: item * exchangeRate,
  };
});

console.log(convertedItems);


