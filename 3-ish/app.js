const num = prompt("raqam kiriting")

function GetNumbers(num) {
    if ( num > 0 ) {
          return num * -1
      }
      else {
          return num
      }
}

let result = GetNumbers(num);
console.log(result);
