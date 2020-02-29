import users from "./users.js";

// Задание 1
// Получить массив имен всех пользователей (поле name).

const getUserNames = users.map(function(user) {
  return user.name;
});

console.log(getUserNames);
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// Задание 2
// Получить массив объектов пользователей по цвету глаз (поле eyeColor).

const getUsersWithEyeColor = users.filter(function(user) {
  return user.eyeColor === "blue";
});

console.table(getUsersWithEyeColor); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// Задание 3
// Получить массив имен пользователей по полу (поле gender).

const getUsersWithGender = users.filter(function(user) {
  return user.gender === "male"
}).map(function(user) {
  return user.name;
});

console.log(getUsersWithGender); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// Задание 4
// Получить массив только неактивных пользователей (поле isActive).

const getInactiveUsers = users.filter(function(user) {
  return !user.isActive;
});

console.table(getInactiveUsers); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// Задание 5
// Получить пользоваля (не массив) по email (поле email, он уникальный).
const UserWithEmailFirst = "shereeanthony@kog.com";

const getUserWithEmailFirst = users.find(function(user) {
  return user.email === UserWithEmailFirst;
});

console.log(getUserWithEmailFirst); // {объект пользователя Sheree Anthony}

const UserWithEmailSecond = "elmahead@omatom.com";

const getUserWithEmailSecond = users.find(function(user) {
  return user.email === UserWithEmailSecond;
});

console.log(getUserWithEmailSecond); // {объект пользователя Elma Head}

// Задание 6
// Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).

const getUsersWithAgeFirst = users.filter(function(user) {
  return user.age > 20 && user.age < 30;
});
console.table(getUsersWithAgeFirst); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

const getUsersWithAgeSecond = users.filter(function(user) {
  return user.age > 30 && user.age < 40;
});

console.table(getUsersWithAgeSecond);
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// Задание 7
// Получить общую сумму баланса (поле balance) всех пользователей.

const calculateTotalBalance = users.reduce((amount, user) => {
  return amount + user.balance;
}, 0);

console.log(calculateTotalBalance); // 20916

// Задание 8
// Массив имен всех пользователей у которых есть друг с указанным именем.

const getUsersWithFriendFirst = users.filter(function(user) {
  return user.friends.includes("Briana Decker")
  }).map(function(user) {
    return user.name;
  });

console.log(getUsersWithFriendFirst);

// console.log(getUsersWithFriend); // [ 'Sharlene Bush', 'Sheree Anthony' ]
const getUsersWithFriendSecond = users.filter(function(user) {
  return user.friends.includes('Goldie Gentry')
  }).map(function(user) {
    return user.name;
  });

console.log(getUsersWithFriendSecond);

// console.log(getUsersWithFriend); // [ 'Elma Head', 'Sheree Anthony' ]

// Задание 9
// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

const getNamesSortedByFriendsCount = users.sort(function(prevUser, nextUser){
  return prevUser.friends.length - nextUser.friends.length;
}).map(function(user) {
  return user.name;
});

console.log(getNamesSortedByFriendsCount);
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// Задание 10
// Получить массив всех умений всех пользователей (поле skills),
//  при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = users.reduce(function(skills, user){
  skills.push(...user.skills);
return skills;
}, []).reduce(function(uniq, item) {
  return uniq.includes(item) ? uniq : [...uniq, item];
}).sort();


console.log(getSortedUniqueSkills);
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud