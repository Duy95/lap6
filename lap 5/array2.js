let fruits1 = [ "apple","orange","plum"];
console.log(fruits1);

let fruits2 = new Array("apple", "orange", "plum");
console.log (fruits2);

fruits2[1]="pear";
console.log(fruits2);

let n = fruits2.length;
// thêm pt cuối mảng
fruits2[n]= "lemon";
console.log (fruits2);
// xóa pt cuối mảng
fruits2.pop([n]);
console.log(fruits2);

fruits2.splice(2, 1, "peach");
console.log(fruits2);



