let name1 = {
    firstName: "tom",
    lastName: "cruise",
}
let printFullName = function (city, state) {
    console.log(this.firstName + " " + this.lastName + " from " + city + "," + state);
}
printFullName.call(name1, "bidar", "karnataka");
// console.log(printFullName);
let name2 = {
    firstName: "elon",
    lastName: "musk",
}
printFullName.call(name2, "bidar", "karnataka");

printFullName.apply(name2, ["bidar", "karnataka"]);

let printMyName = printFullName.bind(name2, "bidar", "karnataka");
console.log(printMyName);
printMyName(); 
