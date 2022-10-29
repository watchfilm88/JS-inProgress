const customer = {
	firstName: "Jacob",
	lastName: "Mercer",
	getFullName() {
	  return `${this.firstName} ${this.lastName}`;
	},
  };
  
  function makeMessage(callback) {
	// callback() это вызов метода getFullName без объекта
	console.log(`Обрабатываем заявку от ${callback()}.`);
  }
  
  makeMessage(customer.getFullName); // Будет ошибка при вызове функции


// const users=[
// 	{
// 	  name: "Moore Hensley",
// 	  email: "moorehensley@indexia.com",
// 	  eyeColor: "blue",
// 	  friends: ["Sharron Pace"],
// 	  isActive: false,
// 	  balance: 2811,
// 	  gender: "male"
// 	},
// 	{
// 	  name: "Sharlene Bush",
// 	  email: "sharlenebush@tubesys.com",
// 	  eyeColor: "blue",
// 	  friends: ["Briana Decker", "Sharron Pace"],
// 	  isActive: true,
// 	  balance: 3821,
// 	  gender: "female"
// 	},
// 	{
// 	  name: "Ross Vazquez",
// 	  email: "rossvazquez@xinware.com",
// 	  eyeColor: "green",
// 	  friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// 	  isActive: false,
// 	  balance: 3793,
// 	  gender: "male"
// 	},
// 	{
// 	  name: "Elma Head",
// 	  email: "elmahead@omatom.com",
// 	  eyeColor: "green",
// 	  friends: ["Goldie Gentry", "Aisha Tran"],
// 	  isActive: true,
// 	  balance: 2278,
// 	  gender: "female"
// 	},
// 	{
// 	  name: "Carey Barr",
// 	  email: "careybarr@nurali.com",
// 	  eyeColor: "blue",
// 	  friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
// 	  isActive: true,
// 	  balance: 3951,
// 	  gender: "male"
// 	},
// 	{
// 	  name: "Blackburn Dotson",
// 	  email: "blackburndotson@furnigeer.com",
// 	  eyeColor: "brown",
// 	  friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
// 	  isActive: false,
// 	  balance: 1498,
// 	  gender: "male"
// 	},
// 	{
// 	  name: "Sheree Anthony",
// 	  email: "shereeanthony@kog.com",
// 	  eyeColor: "brown",
// 	  friends: ["Goldie Gentry", "Briana Decker"],
// 	  isActive: true,
// 	  balance: 2764,
// 	  gender: "female"
// 	}
//   ]


//   const getTotalBalanceByGender = (users, gender) => {
// 	return [...users]
//    .filter(user=>user.gender===gender)
//    .reduce((totalBalance, user)=>{return totalBalance+user.balance},0)
//  };

//  console.log(getTotalBalanceByGender(users, "female"));

// assert.strictEqual(hero(10, 5), true);
//     assert.strictEqual(hero(7, 4), false);
//     assert.strictEqual(hero(4, 5), false);
//     assert.strictEqual(hero(100, 40), true);
//     assert.strictEqual(hero(1500, 751), false);
//     assert.strictEqual(hero(0, 1), false);

  // Ожидается
// console.log(
// 	calcBMI({
// 		weight: "88,3",
// 		height: "1.75",
// 	})
// );
// console.log(
// 	calcBMI({
// 		weight: "68,3",
// 		height: "1.65",
// 	})
// );
// console.log(
// 	calcBMI({
// 		weight: "118,3",
// 		height: "1.95",
// 	})
// );

// =>
// Example 2 - Деструктуризация
// Перепиши функцию так, чтобы она принимала один объект параметров,
// вместо набора независимых аргументов.

// printContactsInfo = (name, tel) => {
// 	const nameList = name.split(',');
// 	const telList = tel.split(',');
// 	for (let i = 0; i < nameList.length; i+=1) {
// 		console.log(`${nameList[i]}: ${telList}`);
		
// 	}

// }

// function printContactsInfo({ names, phones }) {
// 	const nameList = names.split(',');
// 	const phoneList = phones.split(',');
// 	for (let i = 0; i < nameList.length; i += 1) {
// 		console.log(`${nameList[i]}: ${phoneList[i]}`);
// 	}
// }

// Было
// printContactsInfo(
// 	"Jacob,William,Solomon,Artemis",
// 	"89001234567,89001112233,890055566377,890055566300"
// );

// Ожидается
// printContactsInfo({
// 	names: "Jacob,William,Solomon,Artemis",
// 	phones: "89001234567,89001112233,890055566377,890055566300",
// });

// =>
// Example 3 - Глубокая деструктуризация
// Перепиши функцию так, чтобы она принимала один объект параметров,
// вместо набора независимых аргументов.

// function getBotReport({ companyName, bots: { repair, defence } }) {
// 	return `${companyName} has ${repair + defence} bots in stock`;
// }

// // Было
// console.log(getBotReport("Cyberdyne Systems", 150, 50));

// Ожидается
// console.log(
// 	getBotReport({
// 		companyName: "Cyberdyne Systems",
// 		bots: {
// 			repair: 150,
// 			defence: 50,
// 		},
// 	})
// ); // "Cyberdyne Systems has 200 bots in stock"

// =>
// Example 4 - Деструктуризация
// Перепиши функцию так, чтобы она принимала объект параметров
// со свойствами companyName и stock
// и выводила репорт о количестве товаров на складе любой компании.

// function getStockReport({ companyName, stock }) {
// 	let sum = 0;

// 	for (const count of Object.values(stock)) {
// 		sum += count;
// 	}

// 	return `${companyName} has ${sum} items in stock`;
// }

// const info = {
// 	companyName: "Cyberdyne Systems",
// 	stock: {
// 		repairBots: 150,
// 		defenceBots: 50,
// 		hats: 200,
// 	},
// };

// console.log(getStockReport(info)); // "Cyberdyne Systems has 200 items in stock"

// console.log(
// 	getStockReport({
// 		companyName: "Belacci",
// 		stock: {
// 			shoes: 20,
// 			skirts: 10,
// 			hats: 5,
// 		},
// 	})
// ); // "Belacci has 35 item in stock"

// =>
// Example 5 - Операция spread
// Дополни функцию createContact(partialContact) так,
// чтобы она возвращала новый объект контакта
// с добавленными свойствами id и createdAt,
// а также list со значением "default" если в partialContact нет такого свойства.

// const o1 = {
// 	name: "Oleh",
// };

// console.log({
// 	...o1,
//     age: 25
// });

// function createContact(partialContact) {
// 	return {
// 		list: "default",
// 		...partialContact,
// 		id: generateId(),
// 		createdAt: Date.now(),
// 	};
// }

// console.log(
// 	createContact({
// 		name: "Mango",
// 		email: "mango@mail.com",
// 		list: "friends",
// 	})
// );
// console.log(
// 	createContact({
// 		name: "Poly",
// 		email: "poly@hotmail.com",
// 	})
// );

// function generateId() {
// 	return "_" + Math.random().toString(36).substr(2, 9);
// }

// =>
// Example 6 - Операция rest
// Напиши функцию transformUsername(user) так,
// чтобы она возвращала новый обьект со свойством fullName, вместо firstName и lastName.

// function transformUsername({ firstName, lastName, ...rest }) {
// 	return {
// 		...rest,
// 		fullName: `${firstName} ${lastName}`,
// 	};
// }

// console.log(
// 	transformUsername({
// 		id: 1,
// 		firstName: "Jacob",
// 		lastName: "Mercer",
// 		email: "j.mercer@mail.com",
// 		friendCount: 40,
// 	})
// );

// console.log(
// 	transformUsername({
// 		id: 2,
// 		firstName: "Adrian",
// 		lastName: "Cross",
// 		email: "a.cross@hotmail.com",
// 		friendCount: 20,
// 	})
// );

// console.log({
// 	c: 4,
// 	b: 2,
// 	a: 1,
// });

// function foo(product, user, ...ids) {
// 	const { name, price, mark, company } = product;
// 	const { name: userName, age } = user;

// 	console.log(name, mark, price);
// 	console.log(company.name, company.code);
// 	console.log(userName, age);
// 	console.log(ids);
// }

// const product = {
// 	name: "Pencil",
// 	price: 2000,
// 	mark: "AC/DC",
// 	company: {
// 		name: "HELLO",
// 		code: 123213,
// 	},
// };

// const user = {
// 	name: "Veronica",
// 	age: 18,
// };

// foo(product, user, "aowidhowugdwy", "awdwdw", "awdwdwddw");
