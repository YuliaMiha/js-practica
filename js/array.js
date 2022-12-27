//1. порахувати загальну суму покупок в корзіні
/*const cart = [54, 28, 105, 70, 92, 17, 120];
let total = 0;
for (const value of cart) {
   // console.log(value);
    total += value;
}
console.log(total);
*/

//2. написати скрипт який підраховує суму усіх чотних чисел
/*const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 80, 11]
let total = 0;
for (const number of numbers) {
    if (number % 2 === 0) {
        total += number;
    }
}
console.log(total);*/  //134


//2.1  написати скрипт який підраховує суму усіх чотних чисел від обратнго - continue;
/*let total = 0;
for (const number of numbers) {
    if (number % 2 !== 0) {
        console.log(`Числа ${number} не парні`);
        continue;
    }
    total += number;
    console.log(`Числа ${number} парні` );
}
console.log(total);*/

//3.  пошук логіна, якщо немає то вивести повідомлення: [логін] не найден, якщо є то: [логін] найден
//const logins = ['poly', 'qwwe', 'marad', 'allo'];
//const loginToFind = 'poly';

/* v-1
let message = '';
for (const login of logins) {
    if (login === loginToFind) {
        message = `${login}  найден`;
        break;
    }
     message = `${login} не найден`;
       console.log(message);
}*/

/* v-2
const result = logins.includes(loginToFind);
console.log(result);
*/

//4. скрипт який обєднує всі елементи масива в строку
/*const friends = ['Kiwi', 'Poly', 'Orange'];
let string = friends.join(' ');
console.log(string);
*/

//5. скрипт який замінює регістр кожного символа на протилежний
/*const string = 'JavaScript';
let leters = string.split(' ');
console.log(leters);
let revers = [];
for (const letter of letters) {
    if (letter === letter.toUpperCase()) {
        letter.push(revers);
        console.log(revers);
    } 
}*/

//6. slug-URL
//7. скрипт який рахує суму елементів двох масивів

/*18. function calculateTotal(number) {
 
let total = 0;
for (let i = 0; i <= number; i += 1){
    total += i;
    console.log(total);
    }
   // return total;
}
calculateTotal(7);
*/

/* перебрати елементи
const fruits = ['apple', 'plum', 'pear', 'orange'];
for (let i = 0; i < fruits.length; i +=1) { // Change this line
  const fruit = fruits[i]; // Change this line
  console.log(fruit);
} */

/* 20.
function calculateTotalPrice(order) {
  let total = 0;
  
for(let i = 0; i <= order.length; i+= 1){
  total += order[i];
}
  return total;
}
console.log(order[12, 85, 37, 4]);
*/
 // знайти найдовше слово у сторчці 
 /*
function findLongestWord(string) {
const words = string.split(' ');
  let longWord = words[0];
  for (const word of words) {
    if (longWord.length < word.length) {
      longWord = word;
    }
  }
  return longWord
}
findLongestWord("Google do a roll");
*/