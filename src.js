const addTwoAndSeven= () =>{
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