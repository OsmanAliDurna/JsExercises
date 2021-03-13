func1();

var x = 5;
var y = 7;
y = x;

console.log(y);

var a = 10;
{
  var b = 3;
  let b2 = 5;
}

console.log(a);
console.log(b);
// console.log(b2);

function func1() {
  if (true) {
    var c = 55;
    let d = 4;
    console.log(c);
    console.log(d);
  }
  console.log(c);
//   console.log(d);
}