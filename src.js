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
console.log(cc("A"));*/
function truncateString(str,num){
    if(str.length>num){
        return str.slice(0,num) + "...";
    }
    return str;
}