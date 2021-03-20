console.log("Session 6 - Loops");

let i = 0;
let sum = 0;

while (i < 6) sum += i++;

console.log(`The total is : ${sum}`);

console.log("**********************\n");

let bests = ["Clarusway", "Google", "Amazon", "Tesla"];

let len = bests.length;

for (let i = 0; i < len; i++) {
  console.log(`${i + 1} : ${bests[i]}`);
}

console.log("**********************\n");

let text = "Clarusway";

for (let i = 0, j = 10; i < j; i++, j--) {
  console.log(text[i]);
}

console.log("**********************\n");

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`${i} x ${j} = ${i * j}\n`);
  }
  console.log("**********************\n");
}

let text2 = "Clarusway";

for (let i = text2.length - 1; i >= 0; i--) {
  console.log(text2[i]);
}

console.log("**********************\n");

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sums = 0;

for (let i = 0; i < numbers.length; i++) {
  numbers[i] % 2 ? 0 : (sums += numbers[i]);
}
console.log(sums);

console.log("**********************\n");

let factorial = 5;
let numb = factorial;

for (let i = factorial - 1; i > 0; i--) {
  factorial *= i;
}

console.log(`${numb} 'ın faktöriyeli = ${factorial}`);

console.log("**********************\n");

let factNumber = " ";

while (!Number.isInteger(factNumber)) {
  factNumber = Number(prompt("Enter a number! : "));
}

console.log("**********************\n");

for (let index = 1; index <= 100; index++) {
  if (index % 15 === 0) console.log(`number = ${index} : FizzBuzz\n`);
  else if (index % 3 === 0) console.log(`number = ${index} : Fizz\n`);
  else if (index % 5 === 0) console.log(`number = ${index} : Buzz\n`);
}

console.log("**********************\n");

for (let i = 1; i <= 100; i++)
  !(i % 15)
    ? console.log(`number = ${i} : FizzBuzz\n`)
    : !(i % 5)
    ? console.log(`number = ${i} : Buzz\n`)
    : !(i % 3)
    ? console.log(`number = ${i} : Fizz\n`)
    : 0;

console.log("**********************\n");

for (let i = 1; i <= 100; i++)
  console.log(
    `number = ${i} ${(!(i % 3) && "Fizz") || ""}${(!(i % 5) && "Buzz") || ""}`
  );

console.log("**********************\n");
