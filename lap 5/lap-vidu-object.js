class Student {
  constructor(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  get getId() {
    return this.id;
  }

  set setId(id) {
    this.id = id;
  }

  get getName() {
    return this.name;
  }

  set setName(name) {
    this.name = name;
  }

  get getAge() {
    return this.age;
  }

  set setAge(age) {
    this.age = age;
  }
}

let studentA = new Student(1, "Tý", 18);
let studentB = new Student(2, "Tèo", 19);
let studentC = new Student(2, "Tồ", 20);
let studentArr = new Array(studentA, studentB, studentC);

console.log(studentArr);
console.log("------------");

let biggerThan18Arr = new Array();
for (const key in studentArr) {
  if (studentArr[key].getAge > 18) {
    ``;
    biggerThan18Arr.push(studentArr[key]);
  }
}
console.log(biggerThan18Arr);
