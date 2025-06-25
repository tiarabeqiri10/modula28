

// var car = {
//     name: "Audi",
//     color: "Red",
//     year: 2021,
//     kilo: 0,
    
//     startEngine : function(){
//         alert("Vroooooomm!!!");
//     },
//     get getKilo(){
//         return this.kilo;
//     },
//     set setKilo (km){
//         this.kilo = km;
//     },
//     get getYear(){
//         return this.year;
//     },
//     set setYear (y){
//         this.year = y;
//     }
// };

// console.log(car.name);
// console.log(car.color);
// car.setKilo = 10000;
// console.log(car.kilo);
// car.setYear = 2021;
// console.log(car.year);
// car.startEngine();

var computer = new Object();
computer.name = "Lenovo";
computer.GPU = "4080";
computer.RAM = "16gb";
computer.CPU = "Intel core i7"

computer.type = function (){
    return this.name + " , " + this.CPU + " , " + this.RAM + " , " + this.GPU;
};

console.log(computer.GPU);
console.log(computer.type());

function Computer( name , CPU , RAM , GPU){
    this.name = name;
    this.CPU = CPU;
    this.RAM = RAM;
    this.GPU = GPU;
}
 
var computer1 = new Computer("MACBOOK PRO" , "4090" , "8GB" , "M1");
var computer2 = new Computer("MACBOOK AIR" , "4090" , "8GB" , "M1");

console.log(computer1.RAM)