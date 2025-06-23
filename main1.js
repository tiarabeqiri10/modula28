function showMeassage (){

    alert("hello this is a message from a function");

}
showMeassage();

function sum(num1 , num2){
    return num1 + num2;
}
console.log(sum (25,5));

function toCelsius (f){
    return  (5/9)*(f-32);
}
console.log("54 f eshte e barabart me " + toCelsius(54));

var result = toCelsius(54);
console.log("54 f eshte e barabart me " + reuslt + " celsius");