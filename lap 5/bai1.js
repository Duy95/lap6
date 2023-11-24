function isPrime(a) {
  let flag = false;
  if (a < 2) {
    console.log("not Prime!");
  }
  if (a === 2) {
    flag = true;
  }
  if (a > 2) {
    for (let i = 2; i <= Math.sqrt(a); i++) {
      if (a % i == 0) {
        flag = false;
        break;
      } else {
        flag = true;
      }
    }
  }
  return flag;
}

function submit() {
  let number = document.getElementById("number").value;
  console.log(isPrime(number));
}
