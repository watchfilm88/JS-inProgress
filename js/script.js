// function Clock({ template }) {
  
//     let timer;
  
//     function render() {
//       let date = new Date();
  
//       let hours = date.getHours();
//       if (hours < 10) hours = '0' + hours;
  
//       let mins = date.getMinutes();
//       if (mins < 10) mins = '0' + mins;
  
//       let secs = date.getSeconds();
//       if (secs < 10) secs = '0' + secs;
  
//       let output = template
//         .replace('h', hours)
//         .replace('m', mins)
//         .replace('s', secs);
  
//       console.log(output);
//     }
  
//     this.stop = function() {
//       clearInterval(timer);
//     };
  
//     this.start = function() {
//       render();
//       timer = setInterval(render, 1000);
//     };
  
//   }
  
//   let clock = new Clock({template: 'h:m:s'});
//   clock.start();


// const Car = function(model, type, year) {
// 	this.model = model;
// 	this.type = type;
// 	this.year = year;
// }

// const honda = new Car('crv', 'privatCar', 2020)

// console.log(honda);

// function addOverNum(arg1, ...args) {
// 	let total = 0;
  
//    for (let i = 0; i > arg1; i+=1) {
// 	 total += args;
// 	}
  
// 	return total;
//   }
//  console.log( addOverNum(10, 12, 4, 11, 48, 10, 8));

function findMatches(args1, ...args) {
	const matches = []; 
  for (let el of args) {
	 if (args1.includes(el)) {
	matches.push(el)
  }
  }
	return matches;
  }
  
  console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));