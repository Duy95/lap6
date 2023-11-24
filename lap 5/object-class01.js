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

console.log (studentA.getname);
console.log(studentB.getname);
 
// thêm thuộc tính
studentA.level = "A"
console.log (studentA);

// xóa thuộc tính
delete studentA.level;
console.log(studentA);

// get all properties value of studentB 
for (const key in studentB) {
    console.log (key);
        
    }
    console.log ("----------");

    // get all properties value of studentB 
for (const key in studentB) {
    console.log (studentB[key]);

}
 console.log("----------");
    // get all properties value of studentB 
for (const key in studentB) {
    console.log (`${key}: ${studentB[key]}`);

}
 console.log("----------");

 