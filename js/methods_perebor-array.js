
// ----------------- //

// UNIT - 2
// ----------------- //
// Створити новий масив де всі числа будуть піднесені до квадрата

/*const numbers = [1, 2, 3, 4, 5];
const newNumbers = numbers.map(number => number ** 2);
console.log(`Оригінальний масив чисел:`, numbers);
console.log(`Масив чисел у квадраті:`, newNumbers);
*/

//Ствоорити масив імен користувачів
// Cтворити масив де будуть тільки повнолітні користувачі
// Перевірити чи всі користувачі повнолітіні
// Перевірити чи хоча б один користувач повнолітній

/*const users = [
    { name: "Max", age: 18 },
    { name: "Poly", age: 22 },
    { name: "Alex", age: 17 },
    { name: "John", age: 33 },
];
//const nameArray = users.map(user => user.name);
const nameArray = users.map(({ name }) => name);
console.log(`Масив імен:`, nameArray);
const ageArray = users.filter(user => user.age > 18);
console.log(`Масив обєктів повнолітніх:`, ageArray);
const allAge = users.every(user => user.age > 18);
console.log(`чи всі користувачі повнолітні:`, allAge);
const oneAge = users.some(user => user.age > 18);
console.log(`чи хоча б один користувач повнолітній:`, oneAge);
*/


// Створти масив тільки парних чисел
/*const numbers = [11, 10, 22, 29, 31, 2, 4, 7, 8, 12];
const qqq = numbers.filter(number => number % 2 === 0);
//const qqq = numbers.filter(number => (!number % 2)); //
//тобто якщо діиться без остачі то це вивидьться 0 тобто fallse і тобі !fallse буде true  вивідять парні
console.log('Масив тільки парних чисел:', qqq);
*/


// Створити масив, де всі строки будуть більше 5 символів
const strings = ['car', 'alex', 'javascript', 'php', 'node.js', 'react', 'react-native']
const strArray = strings.filter(string => string.length >= 5);
console.log('Кожна строка більше 5 символів:', strArray);


//Є масив чисел і підмасивів
// Створити новий масив який буде містити тільки підмасиви
const blend = [1, 2, [3, 4], 5, [6, 7], 10, [1, 2, 3]];
// Array.isArray() перевіряє чи item є масивом і повертає thue/false
const arrArray = blend.filter(item => Array.isArray(item));
console.log('Виводимо тільки масиви, які були в масиві:', arrArray);



// Порахувати кільуість від'ємних чисел масиву
/*const numbers = [1, 2, -3, -4, 5, -10, -22, 6, 8];
//const count = numbers.filter(number => number < 0).length;
const count = numbers.reduce((total, number) => {
    if (number < 0) total += 1; 
    return  total;
 }, 0);
console.log("Кількість від'ємних чисел масиву:", count);//4
*/


// Порахувати суму чисел масиву за допомогою reduce()
/*const numbers = [11, 10, 22, 29, 31, 2, 4, 7, 8, 12];
const sumNum = numbers.reduce((total, number) => {
  return (total += number);
    
}, 0);
console.log("суму чисел масиву:", sumNum);
*/



// Створити масив імен лише повнолітніх користувачів
/*const users = [
  { name: "Max", age: 18 },
  { name: "Poly", age: 22 },
  { name: "Alex", age: 17 },
   { name: "John", age: 33 },
];
const nameArray = users.reduce((newArr, user) => {
   if (user.age > 18) {
       newArr.push(user.name);
   }
   return newArr;
}, []);
console.log("масив імен лише повнолітніх:", nameArray);
*/


/* не працює ????
const nameArrayObj = users.filter(user => user.age < 18).map(user => user.name);
console.log("масив імен лише повнолітніх:", nameArrayObj);   
        */

// Створити масив, який буде міститит тільки магів з Gryfindor
// Об'єднати масив wizards та об'єкт points

const wizards = [
  {
    name: "Harry Potter",
    house: "Gryfindor",
  },
  {
    name: "Cedric Diggory",
    house: "Hufflepuff",
  },
  {
    name: "Tonks",
    house: "Hufflepuff",
  },
  {
    name: "Ronald Weasley",
    house: "Gryfindor",
  },
  {
    name: "Hermione Granger",
    house: "Gryfindor",
  },
];
/*const magivObj = wizards.filter(wizard => {
    if (wizard.house === 'Gryfindor')
    return wizard.name;
});
console.log("Масив обєктів того хто з Gryfindor:", magivObj);
const magivArray = magivObj.map(wizard => wizard.name);
console.log('Масив імен того хто Gryfindor:', magivArray);
*/
const magivArrayName = wizards.reduce((arrayName, wizard) => {
  if (wizard.house === 'Gryfindor')
    arrayName.push(wizard.name)
  return arrayName;
}, []);
console.log('Масив імен того хто Gryfindor:', magivArrayName);


/*const points = {
   "Harry Potter": 500,
   "Cedric Diggory": 750,
   "Ronald Weasley": 100,
   "Hermione Granger": 1270,
};
const wizardPoints = wizards.map(wizard => {
    if (points[wizard.name]) {
        wizard.points = points[wizard.name]; // створюємо ноову зміну у wizards 
    } else {
        wizard.points = 0;
    }
    return wizard;
});
console.log("Об'єднати масив wizards та об'єкт points:",wizardPoints);;
*/

const points = {
  HarryPotter: 500,
  CedricDiggory: 750,
  RonaldWeasley: 100,
  HermioneGranger: 1270,
};

const wizardPoints = wizards.map(wizard => {

  const key = wizard.name.split(' ').join(''); // 
  console.log("key:", key);


  if (points[key]) {
    wizard.points = points[key]; // створюємо ноову зміну у wizards 
  } else {
    wizard.points = 0;
  }
  return wizard;
});
console.log("Об'єднати масив wizards та об'єкт points:", wizardPoints);

//вийшов масив довжин назв планет
/*const planets = ["Earth", "Mars", "Venus", "Jupiter"];
const planetsLengths = planets.map(planet => planet.length);
*/


const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism"],
  },
];
////щоб у змінній genres вийшов масив усіх жанрів книг
const genres = books.flatMap(book => book.genres);
console.log(genres); //[ "adventure", "history", "fiction", "horror", "mysticism" ]

//bookWithTitle утворився об'єкт книги, назва якої (властивість title) збігається зі значенням змінної BOOK_TITLE.
//bookByAuthor утворився об'єкт книги, автор якої (властивість author) збігається зі значенням змінної AUTHOR
const BOOK_TITLE = 'Beside Still Waters';
const AUTHOR = 'Tanith Lee';
const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
const bookByAuthor = books.find(book => book.author === AUTHOR);
console.log(bookWithTitle);
console.log(bookByAuthor);

//sortedByAuthorName вийшов масив книг, відсортований за ім'ям автора в алфавітному порядку.
//sortedByReversedAuthorName вийшов масив книг, відсортований за ім'ям автора у зворотному алфавітному порядку.
// sortedByAscendingRating вийшов масив книг, відсортований за зростанням рейтингу.
// sortedByDescentingRating вийшов масив книг, відсортований за спаданням рейтингу.
const sortedByAuthorName = [...books].sort((a, b) => a.author.localeCompare(b.author));
console.log(sortedByAuthorName);
const sortedByReversedAuthorName = [...books].sort((firstAuthor, secondAuthor) => secondAuthor.author.localeCompare(firstAuthor.author));
const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);
const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);

//щоб у змінній names вийшов масив імен авторів в алфавітному порядку,
//рейтинг книг яких більший за значення змінної MIN_BOOK_RATING.
const MIN_BOOK_RATING = 8;
const namesAll = books
  .filter(user => user.rating > MIN_BOOK_RATING)
  .map(user => user.author)
  .sort((a, b) => a.localeCompare(b));
console.log('uthorAll', namesAll); //['Bernard Cornwell', 'Robert Sheckley', 'Tanith Lee']

//

const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];
const getUserNames = users => {
  // console.log(users.map(user => user.name));
  return users.map(user => user.name);
};
//щоб вона повертала масив користувачів, 
//вік яких(властивість age) потрапляє у проміжок від minAge до maxAge.
const getUsersWithAge = (users, minAge, maxAge) => {
  return users.filter(user => {
    return user.age > minAge && user.age < maxAge;
  });
};
//щоб вона повертала масив користувачів,
//у яких колір очей(властивість eyeColor) збігається зі значенням параметра color
const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => {
    return user.eyeColor === color;
  });
};
console.log(getUserNames);
//, щоб вона повертала масив користувачів, 
//у яких є один з ім'ям в параметрі friendName. 
//Масив друзів користувача зберігається у властивості friends.
const getUsersWithFriend = (users, friendName) => {
  return users.filter(user => {
    return user.friends.includes(friendName);
  });
};
console.log(getUsersWithFriend);
//повертала масив друзів всіх користувачів (властивість friends)
const getFriends = (users) => {
  return users.flatMap(user => user.friends).filter((user, index, array) => array.indexOf(user) === index)
};
// щоб вона повертала масив активних користувачів,
//значення властивості isActive яких - true
/*const activeFr = users.map(( user) => {
  if (user.isActive)
    console.log(user.name);
  return user.name;
});
console.log("active", activeFr);*/

const activeFr = users.filter(user => user.isActive);
console.log("active", activeFr);

// щоб вона повертала масив неактивних користувачів,
// значення властивості isActive яких - false
const falseFr = users.filter(user => !user.isActive);
console.log("no active", falseFr);

//повертала об'єкт користувача, пошта якого (властивість email) збігається зі значенням параметра email
//email - це "elmahead@omatom.com";
//const getUserWithEmail = users.find(user => user.email === email);
//console.log("getUserWithEmail", getUserWithEmail);

//чи всі користувачі зараз активні (властивість isActive) і повертала true або false
const isEveryUserActive = users.every(user => user.isActive);
console.log("isEveryUserActive", isEveryUserActive);

//наявність активних користувачів (властивість isActive) і повертала true або false.
const isAnyUserActive = users.some(user => user.isActive);
console.log("isAnyUserActive ", isAnyUserActive);

//щоб вона рахувала і повертала суму всіх коштів(властивість balance), 
//які зберігають користувачі з масиву users.
const calculateTotalBalance = users.reduce((total, user) => {
  return total += user.balance;
}, 0)
console.log(calculateTotalBalance);

// getTotalFriendCount(users) таким чином,
// щоб вона рахувала і повертала загальну кількість друзів(властивість friends)
// усіх користувачів з масиву users.
const getTotalFriendCount = users.reduce((total, user) => {

  return total += user.friends.length;
}, 0)
console.log("getTotalFriendCount", getTotalFriendCount);

//sortByAscendingBalance(users) таким чином, щоб вона повертала масив користувачів,
// відсортований за зростанням їх балансу(властивість balance)
const sortByAscendingBalance = [...users].sort((a, b) => a.balance - b.balance);

//sortByDescendingFriendCount(users) таким чином, щоб вона повертала масив користувачів, 
//відсортований за спаданням кількості їхніх друзів(властивість friends).
const sortByDescendingFriendCount = [...users].sort((a, b) => {
  return b.friends.length - a.friends.length;
});
console.log(sortByDescendingFriendCount);

// відсортований за їх ім'ям (властивість name) в алфавітному порядку.
const sortByName = [...users].sort((a, b) => {
  return a.name.localeCompare(b.name)
});
console.log(sortByName);
 
//------повертала масив імен користувачів, відсортований за зростанням кількості їхніх друзів(властивість friends).
//Значення параметра `users` не змінюється
const getNamesSortedByFriendCount = [...users].sort((userA, userB) => userA.friends.length - userB.friends.length).map(user => user.name);
console.log('etNamesSortedByFriendCount', getNamesSortedByFriendCount);

//----- повертала масив унікальних імен друзів (властивість friends), відсортований за алфавітом.
const getSortedFriends = users
  .flatMap(user => user.friends)
  .filter((user, index, array) => array
  .indexOf(user) === index).sort((a, b) => a.localeCompare(b));
console.log(getSortedFriends);

//#48 Доповни функцію getTotalBalanceByGender(users, gender) таким чином, 
//щоб вона повертала загальний баланс користувачів (властивість balance), 
//стать яких(властивість gender) збігається зі значенням параметра gender.  gender: "male" / gender: "female"
const getTotalBalanceByGender = (users, gender) => {
return users.filter(user => user.gender === gender)
  .reduce((totalBalance, user) => {
  return totalBalance += user.balance;
}, 0)
}; //12053


//allGenres був масив всіх жанрів книг (властивість genres) з масиву books,
// а у змінній uniqueGenres - масив унікальних жанрів, без повторень.
/*const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction", "mysticism"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism", "adventure"],
  },
];
const allGenres = books.flatMap(book => book.genres);
const uniqueGenres = allGenres.filter((book, index, array) => {
    return array.indexOf(book) === index;   
});
console.log(allGenres);
console.log(uniqueGenres);
*/


const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];

const eachElementInFirstIsEven = firstArray.every(num => num % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every(num => !num % 2);
console.log("eachElementInFirstIsEven", eachElementInFirstIsEven);
console.log("eachElementInFirstIsOdd", eachElementInFirstIsOdd);

const eachElementInSecondIsEven = secondArray.every(num => num % 2 === 0);
const eachElementInSecondIsOdd = secondArray.every(num => num % 2);
console.log("eachElementInSecondIsOdd", eachElementInSecondIsOdd);

const eachElementInThirdIsEven = thirdArray.every(num => num % 2 === 0);
const eachElementInThirdIsOdd = thirdArray.every(num => !num % 2);



// у змінній totalPlayTime вийшло загальний ігровий час з масиву playtimes.
/*const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
const totalPlayTime = playtimes.reduce((totalPlayTime, value) => {
  return totalPlayTime += value;
}, 0);
const averagePlayTime = totalPlayTime / playtimes.length;
*/


//розрахувати середній час, проведений в одній грі для кожного гравця, 
//і отримати загальну суму цих значень часу.
// Розрахувати час для кожного з гравців можна, розділивши його час(властивість playtime) на кількість ігор(властивість gamesPlayed).
const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];
// Change code below this line

const totalAveragePlaytimePerGame = players.reduce((totalTime, player) => {

  const total = player.playtime / player.gamesPlayed;
  return totalTime += total;

}, 0);
console.log("totalAveragePlaytimePerGame", totalAveragePlaytimePerGame);



// ascendingReleaseDates вийшла копія масиву releaseDates, відсортована за зростанням,
// а у змінній alphabeticalAuthors - копія масиву імен авторів authors, відсортована за алфавітом.
/*const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
];
const ascendingReleaseDates = [...releaseDates].sort();
console.log('ascendingReleaseDates', ascendingReleaseDates);
const alphabeticalAuthors = [...authors].sort();
console.log('alphabeticalAuthors', alphabeticalAuthors);
*/


//щоб у змінній ascendingReleaseDates вийшла копія масиву releaseDates, відсортована за зростанням,
//а у змінній descendingReleaseDates - копія, відсортована за спаданням.
/*const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const ascendingReleaseDates = [...releaseDates].sort((a,b)=> a-b);
const descendingReleaseDates = [...releaseDates].sort((a,b)=> b-a);
*/

//у змінній authorsInAlphabetOrder вийшла копія масиву authors, відсортована за алфавітом,
// а у змінній authorsInReversedOrder - копія, відсортована у зворотному алфавітному порядку.
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
  "Howard Lovecraft",
];
const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

//
const students = [
  { name: "Mango", score: 83, courses: ["mathematics", "physics"] },
  { name: "Poly", score: 59, courses: ["science", "mathematics"] },
  { name: "Ajax", score: 37, courses: ["physics", "biology"] },
  { name: "Kiwi", score: 94, courses: ["literature", "science"] },
];

const sortedByAscendingScore = [...students].sort((a, b) => a.score - b.score);
const names = sortedByAscendingScore.map(student => student.name);
console.log("sortedByAscendingScore", sortedByAscendingScore);
console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]

const uniqueSortedCourses = students
  .flatMap(student => student.courses) //['mathematics', 'physics', 'science', 'mathematics', 'physics', 'biology', 'literature', 'science']
  .filter((course, index, array) => array.indexOf(course) === index) // масив обєктів без повторень предметів
  .sort((a, b) => a.localeCompare(b)); // ["biology", "science", "literature", "mathematics", "physics"]
console.log(uniqueSortedCourses); 

///