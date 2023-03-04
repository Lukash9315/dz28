alert("----------Перше завдання----------")
alert("Відповідіть дивіться в консолі")

console.log("----------Перше завдання----------")

console.log("1. Функціональний вираз const add = function(a, b) {return a + b;}")
console.log("2. Функціональне вираження через стрілку const add = (a, b) => {  return a + b;}")
console.log("3. Функціональне вираження через стрілку без фігурних дужок та return (для коротких функцій) const add = (a, b) => a + b;")
console.log("4. Функція через конструктор const add = new Function('a', 'b', 'return a + b');")
console.log("5. Функція-об'єкт з використанням ключового слова function function add(a, b) {  return a + b;}")
console.log("6. Функція-об'єкт з використанням ключового слова function та імені function addNumbers(a, b) {  return a + b;}")
console.log("7. Функція через стрілку без параметрів const greeting = () => {console.log('Hello!');}")


alert("----------Друге завдання----------")
alert("Відповідіть дивіться в консолі")
console.log("----------Друге завдання----------")
console.log("Масив заданий в функцію (1, 2, 5, 3, 4, 67, 8)")
// alert("Друге завдання");
function countArgs() {
  
  console.log(arguments.length);
  // alert(`Кількість аргументів ${arguments.length}`);
}

countArgs(1, 2, 5, 3, 4, 67, 8)




alert("----------Третє завдання----------")
alert("Відповідіть дивіться в консолі")
console.log("----------Третє завдання----------")

function compareArgs(a, b) {
  if (a < b) {
    c = -1;
  } else if (a > b) {
    c = 1;
  } else {
    c = 0;
  }
  console.log(c);
  console.log(`Відповідь на третє завдання: ${c}. Якщо масив мав вигляд (${a}, ${b}) `);
  // alert(`Відповідь на третє завдання: ${c}. Якщо масив мав вигляд (${a}, ${b}) `);
  return c;
}
let a = prompt("Введіть значенння першого числа")
let b = prompt("Введіть значення другого числа")
compareArgs(a, b)



alert("----------Четверте завдання----------")
alert("Відповідіть дивіться в консолі")
console.log("----------Четверте завдання----------")
function  factorial (n){
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
let n = prompt("Введіть число, факторіал якого хочете знайти")
console.log(factorial(n));




console.log("----------П'яте завдання----------")
alert("----------П'яте завдання----------")
alert("Відповідіть дивіться в консолі")

function setNumbers (A, B, C){
  return (`${A}${B}${C}`)
  }
console.log(setNumbers(7, 9 ,6))




console.log("----------Шосте завдання----------")
alert("----------Шосте завдання----------")
alert("Відповідіть дивіться в консолі")
function rectarea (length, width = length){
  return length * width;
}
let length = prompt("Введіть довжину:");
let width = prompt("Введіть ширину:");

if (length && width) {
  length = Number(length);
  width = Number(width);
  console.log(rectarea(length, width));
  console.log(`Площа прямокутника зі сторонами ${length} и ${width} = ${rectarea(length, width)}`);
} else if (length) {
  length = Number(length);
  console.log(rectarea(length))
  console.log(`У вас вийшов квадрат зі стороною ${length} = ${rectarea(length, length)}`);
} else {
  alert("Введіть хоть щось")
}
