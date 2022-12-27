 const person = {
   name: "Max",
   login: "max1122",
   age: 25,
   password: "qwerty123",
   statistic: { friends: 23, views: 252 },
};

// Вивести у консоль name, age, password двома способами
/*console.log(person.name);
console.log(person.age);
console.log(person.password);
console.log(person['name']);
console.log(person['age']);
console.log(person['password']);*/

// Змінити password на 'qwe444qwe'
/*person.password = 'qwe444qwe';
console.log(` New password: ${person.password}`);*/

// Змінити friends на 30
/*person.statistic.friends = 30;
console.log(` Another age in friends: ${person.statistic.friends}`);*/

// Додати властивість email
/*person['email'] = 'email@gmail.com';
person.email = 'qwerty@gmail.com';
console.log(` Add email in object: ${person['email']}`);*/

// Додати властивість trusted в масив tags:  apartment.tags.push('trusted');

// Вивести у консоль масив всіх ключів об'єкта
/*const arrayKeys = Object.keys(person);
console.log('Array all keys:', arrayKeys);*/

// Вивести у консоль всі ключі об'єкта по черзі
/*for (const key of Object.keys(person)){
    console.log(key);
}*/

// Вивести у консоль масив всіх властивостей об'єкта
/*const arrayValues = Object.values(person);
console.log('Array all values:', arrayValues);*/

// Вивести у консоль всі властивості об'єкта по черзі
/*for (const key of Object.keys(person)) {
    console.log(person[key]);
}*/

// Вивести у консоль масив всіх значень об'єкта у форматі - [['ключ','значення'],['ключ','значення'],['ключ','значення']]
/*const arrayPerson = Object.entries(person);
console.log(arrayPerson);*/

// Видалити властивість statistic
/*console.log('Старий обєкт', person);
delete person.statistic;
console.log('Новий обєкт без ключа statistic', person);*/

//email і password, імена яких зберігаються у змінних emailInputName і passwordInputName.
//Значенням властивості email повинен бути рядок "henry.carter@aptmail.com",
// а значенням властивості password - рядок "jqueryismyjam"
/*const emailInputName = "email";
const passwordInputName = "password";
const credentials = {
[emailInputName]: "henry.carter@aptmail.com",
  [passwordInputName]: "jqueryismyjam",
};*/

/*============================================================================================*/
// Написати метод об'єкта, який поверне всіх користувачів
// Написати метод об'єкта, який поверне середню кількість лайків усіх користувачів
// Написати метод об'єкта, який буде знаходити юзера за його ім'ям
// Написати метод об'єкта, який буде змінювати пароль користувача
// Написати метод об'єкта, який буде створювати нового користувача
/*const users = {
    usersArr: [
       { username: "max2244", likes: 56, password: "qwert123" },
       { username: "alex562", likes: 44, password: "adqbe512" },
       { username: "julia858", likes: 90, password: "211sdg3" },
   ],
    getAllUsers() {
      //return this.usersArr;
      console.log(this.usersArr);
  },
    // Написати метод об'єкта, який поверне середню кількість лайків усіх користувачів
     getAverageLikes() {
    let totalLikes = 0;
   for (const user of this.usersArr) {
      totalLikes += user.likes;
    }
    const averageLikes = (totalLikes / this.usersArr.length).toFixed();
     return averageLikes;
  },
     // Написати метод об'єкта, який буде знаходити юзера за його ім'ям
     getUser(username) {
   for (const user of this.usersArr) {
     if (user.username === username) {
        return user;
       }
     }
    return null;
  },
     // Написати метод об'єкта, який буде змінювати пароль користувача
     changePassword(username, newPassword) {
    for (const user of this.usersArr) {
      if (user.username === username) {
         user.password = newPassword;
         return;
       }
     }
     console.log("user not find");
     return null;
  },
     // Написати метод об'єкта, який буде створювати нового користувача
      addUser(username, password) {
    const newUser = {
      username,
       password,
       likes: 0,
     };
    this.usersArr.push(newUser);
  },
}*/
//users.getAllUsers();
// const allUsers = users.getAllUsers();
// console.log(allUsers);

// const averageLikes = users.getAverageLikes();
// console.log(averageLikes);

// const user = users.getUser("julia858");
// console.log(user);

// const max = users.getUser("max2244");
// console.log(max);

// users.changePassword("max2244", "qw13r31wd2");

// const newMax = users.getUser("max2244");
// console.log(newMax);

// console.log(users.getAllUsers());

// users.addUser("Ivanq323523", "qsfeg2e32532");

// console.log(users.getAllUsers());


/*==========================================================================================*/
//Напиши функцію calculateTotalPrice(productName),
//яка приймає один параметр productName - назва товару.
//Функція повинна повернути загальну вартість(ціна * кількість)
//товару з таким ім'ям з масиву products.

/*const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];
function calculateTotalPrice(productName) {
  let total = 0;
for(const product of products){
  console.log(product);
    if (product.name === productName) {
      total = product.price * product.quantity;
      console.log(total);
    }
  }
  return total;
}
calculateTotalPrice("Radar");
*/
/*==================================================================*/

/* 
const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];
const hexColors = [];
const rgbColors = [];
for (const { hex, rgb }  of colors) {
  hexColors.push(hex);
  rgbColors.push(rgb);
}
console.log(hexColors);*/

/*================*/

/*function makeTask(data) {
const { completed = false,  category = "General", priority = "Normal" } = data;
  
  const newObj = { completed, ...data };
 console.log(newObj);
};
makeTask({});
makeTask({ category: "Finance", text: "Take interest" });
*/

/*=============*/

/*function findMatches(array, ...args) {
  const matches = []; 
for( const arg of args){
  array.include(arg);
}
  return matches;
}
*/
/*================*/
 
const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  /*
  getPotions() {
    //return this.potions;
    console.log(this.potions);
  },
  */

 /*
  addPotion(newPotion) {
     for (const potion of this.potions) {
      if (potion.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    this.potions.push(newPotion);
  },
  */
  
 
  /*
    removePotion(potionName) { 
      for (let i = 0; i < this.potions.length; i += 1){
        if (this.potions[i].name === potionName) {
          let result = this.potions.splice(i, 1);
         console.log(result);
          return result;  
      }
    }
    console.log('not found');
    return `Potion ${potionName} is not in inventory!`;
  },
  */
  
  updatePotionName(oldName, newName) { 
   for (const potion of this.potions) {
     if (potion.name === oldName) {
       potion.name = newName;
     }
    }
    console.log(this.potions)
   return `Potion ${oldName} is not in inventory!`;

  },
  
};

//atTheOldToad.getPotions();
//atTheOldToad.addPotion({ name: "Dragon breath", price: 700 });
//atTheOldToad.removePotion("Dragon breath"); //[ { name: 'Speed potion', price: 460 }, { name: 'Stone skin', price: 520 } ]
//atTheOldToad.removePotion("Speed potion");

//atTheOldToad.updatePotionName("Dragon breath", "Polymorth"); //[{ name: 'Speed potion', price: 460 }, { name: 'Polymorth', price: 780 }, { name: 'Stone skin', price: 520 } ]
//atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion")