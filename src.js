/*const addTwoAndSeven= () =>{
    return console.log(2+7);
}
const addThreeAndFour = ()=>{
    return console.log(3+4);
}
addThreeAndFour();
addTwoAndSeven();
function calculateSum(num1,num2){
    return console.log(num1+num2);
}
calculateSum(3,4);
function calculateDifference(num1,num2){
    return num1 -num2;
}
console.log(calculateDifference(22,5));
console.log(calculateDifference(12,1));
console.log(calculateDifference(17,9));
function calculateProduct(num1,num2){
    return num1 * num2;
}
console.log(calculateProduct(13,5));
function calculateQuotient(num1,num2){
    if (num2==0){
        return "Error: Division by zero";
    }else return num1 / num2;
}
console.log(calculateQuotient(7,11));
console.log(calculateQuotient(3,0));
function calculateSquare(num){
    return Math.pow(num,2);
}
console.log(calculateSquare(5));
function calculateSquareRoot(num){
    return Math.sqrt(num);
}
console.log(calculateSquareRoot(25));
console.log(calculateSquareRoot(100));
function booWho(value){
    return typeof value === "boolean";
}
console.log(booWho(true));
function maskEmail(email){

    const star= repeat("*",)
}
var btn = document.getElementById("btn1");
btn.onclick = function(){
    document.getElementById("box").style.color=("red");
}
var a = new Array("An","Binh","Chau");
for(var i=0;i<a.length;i++){   
}
function check_Number(number){
    if (number%2==0){
        window.alert(number+" la so chan");
    }else window.alert(number+" la so le");
}
check_Number(2);
function showMessage(message){
    message=message || "khong co tin nhan";
}
var links = document.getElementsByTagName("a");
for(var i =0;i<links.length;i++){
    links[i].onmouseover=function(){
        this.style.color='red';
    }
    links[i].onmouseout=function(){
        this.style.color="black";
    }
}
function maskEmail(email){
    const placeOf = email.slice(1,email.indexOf("@")-1);
    const starLength=placeOf.length;
    const star= "*";
    const starRepeat = star.repeat(starLength);
    const emailPass= email.replace(placeOf,starRepeat);
    return emailPass;
}
var email="user@domain.org";
console.log(maskEmail(email));
const minIncomeForDuplex = 60000;
const minCreditScoreForDuplex = 700;
const minIncomeForCondo = 45000;
const minCreditScoreForCondo = 680;
const minIncomeForCar = 30000;
const minCreditScoreForCar = 650;
function getLoanMessage(annualIncome,creditScore){
    if(annualIncome>=minIncomeForDuplex&&creditScore>=minCreditScoreForDuplex){
        return "You qualify for a duplex, condo, and car loan.";
    }
    else if(annualIncome>=minIncomeForCondo&&creditScore>=minCreditScoreForCondo){
        return "You qualify for a condo and car loan.";
    }
    else if(annualIncome>=minIncomeForCar&&creditScore>=minCreditScoreForCar){
        return "You qualify for a car loan.";
    }else return "You don't qualify for any loans.";
}
const duplexLoanMsg = getLoanMessage(85000,850);
const condoLoanMsg = getLoanMessage(65000,690);
const carLoanMsg = getLoanMessage(45000,660);
const noLoanMsg = getLoanMessage(25000,550);
function convertCtoF(number){
    var result;
    return result = number *(9/5)+32;
}
console.log(convertCtoF(-30));
let count = 0;
function cc(card){
    if(card >= 2 && card <= 6){
        count += 1;
    }else if(card >= 7 && card <= 9){
        // count remains unchanged
    }else if(card === 10 || card === "J" || card === "Q" || card === "K" || card === "A"){
        count -= 1;
    }
    
    if(count > 0){
        return count + " Bet";
    }else{
        return count + " Hold";
    }
}
console.log(cc(3));
console.log(cc(7));
console.log(cc("Q"));
console.log(cc(8));
console.log(cc("A"));
function truncateString(str,num){
    if(str.length>num){
        return str.slice(0,num) + "...";
    }
    return str;
}
function conFirmEnding(str1,str2){
    if(str1.lastIndexOf(str2)==str1.length-(str2.length)){
        return true;
    }else return false;
}
console.log(conFirmEnding("Bastina", "n"));
console.log("Grocery shopping list");
const shoppingList=[];
console.log("It will be nice to have some fruit to eat.");
shoppingList.push(" Apples");
function getShoppingListMsg(shoppingList){
    return `Current Shopping List: ${shoppingList}.`;
}
console.log(getShoppingListMsg(shoppingList));
shoppingList.push(" Grapes");
console.log(getShoppingListMsg(shoppingList));
console.log("It looks like we need to get some cooking oil.");
shoppingList.unshift("Vegetable Oil");
console.log(getShoppingListMsg(shoppingList));
shoppingList.push("Popcorn","Beef Jerky","Potato Chips");
console.log(getShoppingListMsg(shoppingList));
console.log("This looks like too much junk food.");
shoppingList.pop();
console.log(getShoppingListMsg(shoppingList));
console.log("It might be nice to get a dessert.");
shoppingList.unshift("Chocolate Cake");
console.log(getShoppingListMsg(shoppingList));
console.log("On second thought, maybe we should be more health conscious.");
shoppingList.shift();
shoppingList[0]="Canola Oil";
console.log(getShoppingListMsg(shoppingList));
const lunches =[];
function addLunchToEnd(lunches,lunchItem){
    lunches.push(lunchItem);
    console.log(`${lunchItem} added to the end of the lunch menu.`);
    return lunches;
}
function addLunchToStart(lunches,lunchItem){
    lunches.unshift(lunchItem);
    console.log(`${lunchItem} added to the start of the lunch menu.`);
    return lunches;
}
function removeLastLunch(lunches){
    if(lunches.length > 0){
        const lunchItem = lunches.pop();
        console.log(`${lunchItem} removed from the end of the lunch menu.`);
        return lunches;
    }else {
        console.log("No lunches to remove.");
        return "No lunches to remove.";
    }
}
function removeFirstLunch(lunches){
    if(lunches.length > 0){
        const lunchItem = lunches.shift();
        console.log(`${lunchItem} removed from the start of the lunch menu.`);
        return lunches;
    }else {
        console.log("No lunches to remove.");
        return "No lunches to remove.";
    }
}
console.log(removeFirstLunch(["Salad","Eggs","Cheese"]));
function getRandomLunch(lunches){
    if(lunches.length>0){
        const lunchItem = lunches[Math.floor(Math.random() * lunches.length)];
        console.log(`Randomly selected lunch: ${lunchItem}`);
        return lunchItem;
    } else {
        console.log("No lunches available.");
        return "No lunches available.";
    }
}
function showLunchMenu(lunches){
    if(lunches.length>0){
        console.log("Menu items: "+lunches.join(", "));
        return lunches;
    }else {
        return console.log("The menu is empty.");
    }
}*/
const recipes = [];

const recipe1 = {
  name: 'Spaghetti Carbonara',
  ingredients: ['spaghetti', 'Parmesan cheese', 'pancetta', 'black pepper'],
  cookingTime: 22,
  totalIngredients: null,
  difficultyLevel: '',
  ratings: [4, 5, 4, 5],
  averageRating: null,
};

const recipe2 = {
  name: 'Chicken Curry',
  ingredients: ['chicken breast', 'coconut milk', 'curry powder', 'onion', 'garlic'],
  cookingTime: 42,
  totalIngredients: null,
  difficultyLevel: '',
  ratings: [4, 5, 5, 5],
  averageRating: null,
};
const recipe1Name = recipe1.name;
const recipe2Name = recipe2.name;
const recipe1CookingTime = recipe1.cookingTime;
const recipe2CookingTime = recipe2.cookingTime;
console.log(recipe1Name);
console.log(recipe2Name);
console.log(recipe1CookingTime);
console.log(recipe2CookingTime);