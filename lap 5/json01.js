let car01 = {
    id:1,
    name: "Audi",
    color:"black",
    capacity:4
};
Let JSONstrcar01 = JSON.stringify(car01);
console.log( "Car 01 information is:" + car01); //KHÓ NHÌN THẤY
console.log("Car 01 information is:" + JSON.stringify(car01)); //DỄ NHÌN THẤY
console.log("------------");

let JSONstrcar01 = JSON.parse(JSONstrcar01);
console.log("Car 01 information is:" );
console.log(objcar01); 
