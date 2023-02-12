console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// empty array basket
var basket = [];
const maxItems = 5;

// function addItem
function addItem(item){
    basket.push(item);
    return true;
}

// testing the addItem function by using arguments
console.log(`Adding coffee  ${addItem("coffee")}`);
console.log(`Adding milk ${addItem("milk")}`);
console.log(`Adding chocolate ${addItem("chocolate")}`);

// printing on console
console.log('Added list array is',basket);

// function listItems
function listItems(){
    for (let i = 0; i < basket.length; i++){
        console.log(basket[i]);
    }
}
// listing the looped items
console.log('The list is:');
listItems();

// new function empty
function empty (){
    basket =[];
}

// clear the list array
console.log('The empty array list is:');
empty();

// Stretch Goals


// function isFull() 
function isFull(){
    return basket.length >= maxItems;
}
//Testing the isFull function
console.log(basket.length);
console.log(`Basket is full (expect false):`, isFull() );

// Update addItem function
function addItem(item){
    if(!isFull() ){
        basket.push(item);
        return true;
    }
    else{
        return false;
    }
}
// testing the addItem
console.log(basket);
console.log(addItem("latte")); // true
console.log(basket);
console.log(addItem("banana")); // true
console.log(basket);
console.log(addItem("syrup")); // true
console.log(basket);
console.log(isFull()); // false
console.log(addItem("coffee")); // true
console.log(basket);
console.log(addItem("scones")); // true
console.log(basket);
console.log(isFull()); // true
console.log(addItem("milk")); // false
console.log(basket); 

// Array built in function
function removeItem(item){
    let index = basket.indexOf(item);
    if (index === -1){
        return null;
    }
    let removeItem = basket.splice(index, 1);
    return removeItem[0];
}
//Implementing IndexOf, and splice()
console.log(basket);
let id = 2;// by use of index(known)
const removedItem = basket.splice(id, 1);
console.log(basket);

// unknown index
let id1 = basket.indexOf('banana');
let removedItem2 = basket.splice(id1, 1);
console.log(basket);

    

