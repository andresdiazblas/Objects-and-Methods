
// Survey response
const customer = {
    firstName: 'jake',
    lastName: 'smith',
    email: 'jaekSmih!aol.com',
    phone: null,
    zipCode: '631',
    favoriteFlavors: '32',
    cupSize: 'medium',
    favoriteStore: 'Target',
    firstVisit: 'false',
}
// Print out survey response
console.log('Survey Response', customer);

// console.log('Some of the survey data is incorrect, let me edit it');

// Changing values 
customer.email = 'Jak3Smith1992@email.com';
customer.phone = '319-555-1234';
customer.zipCode = '63132';
customer.favoriteFlavors = 'Coffee, Strawberry and Matcha';
console.log('Survey review', customer);

// Removal of items on the data
// console.log('Zip Code and Favorite Store data is not needed');
delete customer.zipCode;
delete customer.favoriteStore;
console.log('Removal of Zip Code and Favorite Store', customer);

// Adding objects and values with dot notation
customer.toppings = 'Chocolate Sprinkles, Wafer Straws and Gummy Bears';
customer.futureFlavors = 'Mango';
customer.todaysPurchaseCost = '5.32$';
console.log('New objects and values added', customer);

// Create an Array that print the keys in the survey
let customerArray = [customer]
for(let i=0; i<customerArray.length; i++){
    console.log('Finalizing the survey', customerArray [i] );
}
