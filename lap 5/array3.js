let fruits = ["apple", "orange", "plum"];
console.log(fruits);
// thêm pt đầu
fruits.unshift("banana");
console.log (fruits);
// thên phần tử cuối
fruits.push("water melon");
console.log(fruits);
// thêm vị trí bất kì ( 1 là vị trí,0 là k đồng ý xóa,dragon fruit là thêm tên )
fruits.splice ( 1,0,"dragon fruit");
console.log(fruits);