'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let sales = document.getElementById('sales');

let cookiePerHour = 0;

function getAmoutOfCookies(name, min, max, average, arr) {
  let countryName = document.createElement('h2');
  sales.appendChild(countryName);
  countryName.textContent = name;
  let customer = 0;
  let sum = 0;
  let salesList = document.createElement('ul');
  for (let i = 0; i < hours.length; i++) {
    customer = Math.ceil(Math.random() * (max - min + 1) ) + min;
    arr.push(customer);
    console.log(customer);
    sales.appendChild(salesList);
    cookiePerHour = Math.ceil(customer * average);
    sum = sum + cookiePerHour;
    let salesItem = document.createElement('li');
    salesItem.style.color = 'rgb(109 76 28)';
    salesList.appendChild(salesItem);
    salesItem.textContent = (`${ hours[i]} : ${cookiePerHour} cookies`);
  }
  let totalItems = document.createElement('li');
  totalItems.style.color = 'rgb(135 51 171)';
  totalItems.style.fontWeight = 'bold';
  salesList.appendChild(totalItems);
  totalItems.textContent = `Total : ${sum} cookies`;
}
let seattle = {
  name: 'Seattle',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookie: 6.3,
  cookiePerHour: [],
  amountOfCookies : function() {
    getAmoutOfCookies(this.name, this.minCustomer, this.maxCustomer, this.avgCookie, this.cookiePerHour);
  },
};
let tokyo = {
  name: 'Tokyo',
  minCustomer: 3,
  maxCustomer: 24,
  avgCookie: 1.2,
  cookiePerHour: [],
  amountOfCookies : function() {
    getAmoutOfCookies(this.name, this.minCustomer, this.maxCustomer, this.avgCookie, this.cookiePerHour);
  },
};

let dubai = {
  name: 'Dubai',
  minCustomer: 11,
  maxCustomer: 38,
  avgCookie: 3.7,
  cookiePerHour: [],
  amountOfCookies : function() {
    getAmoutOfCookies(this.name, this.minCustomer, this.maxCustomer, this.avgCookie, this.cookiePerHour);
  },
};

let paris = {
  name: 'Paris',
  minCustomer: 20,
  maxCustomer: 38,
  avgCookie: 2.3,
  cookiePerHour: [],
  amountOfCookies : function() {
    getAmoutOfCookies(this.name, this.minCustomer, this.maxCustomer, this.avgCookie, this.cookiePerHour);
  },
};

let lima = {
  name: 'Lima',
  minCustomer: 2,
  maxCustomer: 16,
  avgCookie: 4.6,
  cookiePerHour: [],
  amountOfCookies : function() {
    getAmoutOfCookies(this.name, this.minCustomer, this.maxCustomer, this.avgCookie, this.cookiePerHour);
  },
};


seattle.amountOfCookies();
tokyo.amountOfCookies();
dubai.amountOfCookies();
paris.amountOfCookies();
lima.amountOfCookies();

