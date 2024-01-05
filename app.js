const date = new Date();
const space = ' ';
function clickForDate() {
  document.getElementById('onClick').innerHTML = date;
}

document.getElementById('displayDate').innerHTML = date;

const car = {
  type: 'fiat',
  model: '500',
  color: 'white',
  owner: 'Tim',
};

// Objects

document.getElementById('para1').innerHTML = 'The type of car is' + space + car.type;

document.getElementById('para2').innerHTML = 'the model is' + space + car.model;
document.getElementById('para3').innerHTML = 'the color is' + space + car.color;
document.getElementById('para4').innerHTML = 'the owner is' + space + car.owner;

// Functions

// Convert Fahrenheit to Celsius
function toCalsius() {
  return (5 / 9) * (f - 77);
}

let value = toCelsius(77);
document.getElementById('temp').innerHTML = value;
