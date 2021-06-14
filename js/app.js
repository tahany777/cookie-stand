'use strict';

let hours = ['', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let sales = document.getElementById('sales');
function SalmonCookie(name, min, max, average, total) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.average = average;
  this.arr = [];
  this.arr2 = [];
  this.total = total;
  this.counter = [];
}
SalmonCookie.prototype.getRandomCustomer = function () {
  let customer = Math.random() * (this.max - this.min) + this.min;
  return customer;
};
SalmonCookie.prototype.getCookiePerHour = function () {
  for(let i = 0; i < hours.length; i++) {
    let cookie = Math.ceil(this.getPerHour[i] * this.average);
    this.counter.push(cookie);
    this.total += cookie;
    console.log(this.total);
  }
};
SalmonCookie.prototype.getFirstHeader = function() {
  let tableRowHeader = document.createElement('tr');
  sales.appendChild(tableRowHeader);
  for(let i = 0; i < hours.length + 1; i++) {
    let firstRowData = document.createElement('th');
    tableRowHeader.appendChild(firstRowData);
    firstRowData.textContent = hours[i];
    if( i === hours.length) {
      firstRowData.textContent = 'Daily Location Total';
    }
  }
};
SalmonCookie.prototype.render = function () {
  let cookie;
  let tableData = document.createElement('tr');
  sales.appendChild(tableData);
  for(let i = 0; i < hours.length + 1; i++){
    let namecels;
    let customer;
    cookie = Math.ceil(this.getRandomCustomer(this.min, this.max));
    namecels = document.createElement('td');
    tableData.appendChild(namecels);
    if(i === 0) {
      namecels.textContent = this.name;
    } else if (i === hours.length) {
      customer = Math.ceil(cookie * this.average);
      namecels.textContent = customer;
      console.log(customer);
    } else {
      namecels.textContent = cookie;
    }
  }
};

SalmonCookie.prototype.getPerHour = function() {
  let lastRow = document.createElement('tr');
  sales.appendChild(lastRow);
  let lastCell = document.createElement('th');
  lastRow.appendChild(lastCell);
  lastCell.textContent = 'Total';
  for(let i = 0; i < hours.length; i++) {
    let cell = document.createElement('th');
    lastRow.appendChild(cell);
    cell.textContent = this.getCookiePerHour();
  }
};
let seattle = new SalmonCookie('Seattle', 23, 65, 6.3);
seattle.getFirstHeader();
seattle.render();

let tokyo = new SalmonCookie('Tokyo', 3, 24, 1.2);
tokyo.render();

let dubai = new SalmonCookie('Dubai', 11, 38, 3.7);
dubai.render();

let paris = new SalmonCookie('Paris', 20, 38, 2.3);
paris.render();

let lima = new SalmonCookie('Lima', 2, 16, 4.6);
lima.render();


