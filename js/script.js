// const parent = {
// 	name: "Stacey",
// 	surname: "Moore",
// 	age: 54,
// 	heritage: "Irish",
//   };
//   const child = {};

//   child.name = "Jason";
//   child.age = 27;
  
//   class Car {
//   constructor(brand, model, price){
// 	this.brand=brand;
// 	this.model=model;
// 	this.price=price;
//   }}

// const bmw = new Car('BMW', 535, 35000)

// console.log(bmw);

// function Person(first, last, age, gender, interests) {
// 	this.name = {
// 	  first : first,
// 	  last: last
// 	};
// 	this.age = age;
// 	this.gender = gender;
// 	this.interests = interests;
// 	this.bio = function() {
// 	  alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
// 	};
// 	this.greeting = function() {
// 	  alert('Hi! I\'m ' + this.name.first + '.');
// 	};
// };
  
// let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);

// console.log(person1.bio());

// class User {
// 	constructor({ name, email }) {
// 	  this.name = name;
// 	  this.email = email;
// 	}
// 	getEmail() {
// 	  return this.email;
// 	}
// 	changeEmail(newEmail) {
// 	  this.email = newEmail;
// 	}
//   }

// class Car {
// 	constructor({ brand, model, price }) {
// 		this.brand = brand;
// 		this.model = model;
// 		this.price = price;
// 	}
// 	  getPrice() {
// 			return this.price;
// 		}
		
// 	  changePrice(newPrice) {
// 			this.price = newPrice;
// 	  }
// 	}

// class Storage {
// 	constructor(items) {
// 		this.items = items
// 	}
  
// 	getItems() {
// 		return this.items;
// 	}
// 	addItem(newItem) {
// 		this.items.push(newItem);
// 	}
// 	removeItem(itemToRemove) {
// 		this.items.pop(itemToRemove)
// 	};
// }
  
//   const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
//   console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
//   storage.addItem("Droid");
//   console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
//   storage.removeItem("Prolonger");
//   console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]


// class Car {
// 	constructor({ brand, model, price }) {
// 		this.#brand = brand;
// 		this.model = model;
// 		this.price = price;
// 	}
  
// 	getBrand() {
// 		return this.#brand
// 	}
  
// 	changeBrand(newBrand) {
// 		this.#brand = newBrand
// 	}
// }


class Car {
	static #MAX_PRICE = 50000;
	constructor({ price }) {
		this.price = price;
	}
	static checkPrice(price) {
	  if (Car.price > Car.#MAX_PRICE) {
	   return "Error! Price exceeds the maximum"
	  } else {return "Success! Price is within acceptable limits"}
	}
  }
  
  const audi = new Car({ price: 36000 });
  const bmw = new Car({ price: 64000 });
  
  console.log(Car.checkPrice(audi.price)); 
  console.log(Car.checkPrice(bmw.price));


// class Car {
// 	#price;
// 	static MAX_PRICE = 50000;
  
// 	constructor({ price }) {
// 	  this.#price = price;
// 	}
  
// 	get price() {
// 	  return this.#price;
// 	}
  
// 	set price(newPrice) {
// 	  if (this.#price <= newPrice) {
// 	 return this.#price = newPrice;
// 	  }
// 	}
//   }
  
//   const audi = new Car({ price: 35000 });
//   console.log(audi.price); 
  
//   audi.price = 49000;
//   console.log(audi.price); 
  
//   audi.price = 51000;
//   console.log(audi.price); 

// class User {
// 	#email;
  
// 	constructor({ name, email }) {
// 	  this.name = name;
// 	  this.#email = email;
// 	}
// 	// get email() {
// 	//   return this.#email;
// 	// }
// 	// set email(newEmail) {
// 	//   this.#email = newEmail;
// 	// }
//   }

//   const mango = new User({ name: "Манго", email: "mango@mail.com" });
//   console.log(mango.email);
//   mango.email = "mango@supermail.com";
//   console.log(mango.email);


// class Storage {
//   #items
// 	constructor(items) {
// 	  this.#items = items;
// 	}
  
// 	getItems() {
// 	  return this.#items;
// 	}
  
// 	addItem(newItem) {
// 	  this.#items.push(newItem);
// 	}
  
// 	removeItem(itemToRemove) {
// 	  this.#items = this.#items.filter(item => item !== itemToRemove);
// 	}
//   }
//   const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
//   console.log(storage.getItems()); 
//   storage.addItem("Droid");
//   console.log(storage.getItems()); 
//   storage.removeItem("Prolonger");
//   console.log(storage.getItems());


// class StringBuilder {
// 	constructor (initialValue){
// 	  this.value = initialValue;
// 	};
// 	getValue() {
// 	  return this.value;
// 	};
// 	padEnd(str) {
// 	  this.value = this.value + str
// 	};
//   padStart(str) {
// 	this.value = str + this.value
//   };
// 	padBoth(str) {
// 	 this.value = str + this.value + str
// 	}
//   }
	

//   class StringBuilder {
// 	constructor (initialValue){
// 	  this.value = initialValue;
// 	};
// 	getValue() {
// 	  return this.value;
// 	};
// 	padEnd(str) {
// 	  this.value = this.value.split(' ').push(str).join(' ')
// 	};
//   padStart(str) {
// 	this.value = this.value.split(' ').swift(str).join(' ')
//   };
// 	padBoth(str) {
// 	 this.value =  this.value.split(' ').swift(str).push(str).join(' ')
// 	}
//   }
  
  

//   const builder = new StringBuilder(".");
//   console.log(builder.getValue()); // "."
//   builder.padStart("^");
//   console.log(builder.getValue()); // "^."
//   builder.padEnd("^");
//   console.log(builder.getValue()); // "^.^"
//   builder.padBoth("=");
//   console.log(builder.getValue()); // "=^.^="
  


// const historyService = {
// 	orders: [
// 	  { email: "jacob@hotmail.com", dish: "Burrito" },
// 	  { email: "solomon@topmail.net", dish: "Burger" },
// 	  { email: "artemis@coldmail.net", dish: "Pizza" },
// 	  { email: "solomon@topmail.net", dish: "Apple pie" },
// 	  { email: "jacob@hotmail.com", dish: "Taco" },
// 	],
// 	// Change code below this line
// 	getOrdersLog() {
// 	  return this.orders
// 		.map(order => `email: ${order.email} dish: ${order.dish}`)
// 		.join(" - ");
// 	},
// 	getEmails() {
// 	  const emails = this.orders.map(order => order.email);
// 	  const uniqueEmails = new Set(emails);
// 	  return [...uniqueEmails];
// 	},
// 	getOrdersByEmail(email) {
// 	  return this.orders.filter(order => order.email === email);
// 	},
// 	// Change code above this line
//   };
  
//   console.log(historyService.getOrdersByEmail("solomon@topmail.net"));
