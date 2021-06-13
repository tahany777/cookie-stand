'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let sales = document.getElementById('sales');
function generateRandomCustomer(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let customer = Math.floor(Math.random() * (max - min + 1) + (min));
  return customer;
}
function getAmoutOfCookies(customer, average) {
  let sum = 0;
  let cookiePerHour = 0;
  let salesList = document.createElement('ul');
  sales.appendChild(salesList);
  for (let i = 0; i < hours.length; i++) {
    cookiePerHour = Math.floor(customer * average);
    sum = sum + cookiePerHour;
    let salesItem = document.createElement('li');
    salesList.appendChild(salesItem);
    salesItem.textContent = (`${hours[i]} : ${cookiePerHour} cookies`);
  }
  let totalItems = document.createElement('li');
  salesList.appendChild(totalItems);
  totalItems.textContent = (`Total : ${sum} cookies`);
}


let seattle = {
  name: 'Seattle',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookie: 6.3,
  getRandomCustomer: generateRandomCustomer(this.minCustomer, this.maxCustomer),
  amountOfCookies: getAmoutOfCookies(this.getRandomCustomer, this.AvgCookie),
};

let tokyo = {
  name: 'Tokyo',
  minCustomer: 3,
  maxCustomer: 24,
  AvgCookie: 1.2,
  loop: function () {
    for(let i = 0; i < hours.length; i++) {
      let getRandomCustomer = generateRandomCustomer(this.minCustomer, this.maxCustomer);
      getAmoutOfCookies(getRandomCustomer, this.AvgCookie);
    }
  },
};

let dubai = {
  name: 'Dubai',
  minCustomer: 11,
  maxCustomer: 38,
  AvgCookie: 3.7,
  getRandomCustomer: generateRandomCustomer(this.minCustomer, this.maxCustomer),
  amountOfCookies: getAmoutOfCookies(this.getRandomCustomer, this.AvgCookie),
};

let paris = {
  name: 'Paris',
  minCustomer: 20,
  maxCustomer: 38,
  AvgCookie: 2.3,
  getRandomCustomer: generateRandomCustomer(this.minCustomer, this.maxCustomer),
  amountOfCookies: getAmoutOfCookies(this.getRandomCustomer, this.AvgCookie),
};

let lima = {
  name: 'Lima',
  minCustomer: 2,
  maxCustomer: 16,
  AvgCookie: 4.6,
  getRandomCustomer: generateRandomCustomer(this.minCustomer, this.maxCustomer),
  amountOfCookies: getAmoutOfCookies(this.getRandomCustomer, this.AvgCookie),
};

seattle();
tokyo();
dubai();
paris();
lima();


