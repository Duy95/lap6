class student {
  constructor(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
  get getid() {
    return this.id;
  }
  set setid(id) {
    return this.id;
  }
  get getname() {
    return this.name;
  }
  set setname(name) {
    return this.name;
  }
  get getage() {
    return this.age;
  }
  set setage(age) {
    return this.age;
  }
}

let studentA = new student(1,"tý",18);
let studentB = new student(2, "tèo", 19);
let studentC = new Student(2, "Tồ", 20);

console.log (object.keys(studentA));
console.log("----------");
 

console.log(object.value(studentA));
console.log("----------");
 
// xóa thuộc tính
console.log(object.entries(studentA));
console.log("----------");
 


 