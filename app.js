'use strict';
let form = document.getElementById('form');
let tableEl = document.getElementById('table');

let cars = [];

function Car(cName, carModel ,price) {
    this.cName = cName;
    this.carModel = carModel;
    this.price = price;
    cars.push(this);
}

function addCar(event) {
    event.preventDefault();
    let cName = event.target.cName.valus;
    let carModel = event.target.carModel.valus;
    let newCar =  new Car (cName, carModel,price);
    newCar.render();
    saveToLocalStorage();
}

form.addEventListener('submit', addCar);


let tableHeader = ['Order Imge', 'Order Details'];

function tableHd() {
    let trEl = document.createElement('tr');
    trEl.appendChild(trEl);
    for (let i = 0; i < tableHeader.length; i++) {
        let thHd = document.createElement('th')
        trEl.appendChild(thHd);
        thHd.textContent = tableHeader[i];
    }
    
}
tableHeader()
Car.prototype.render = function () {
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);

    let tdEl2 = document.createElement('td');
    let img = document.createElement('img');
    img.setAttribute( "style","width:200px", "hight:200px");
    img.setAttribute('src',this.carModel);
    tdEl2.appendChild(img);
    // tdEl2.appendChild(tdEl2);

    let tdEl1 =document.createElement('td');
    tdEl1.textContent = `Custamer Name ${this.cName}Car Model ${this.carModel} Car Price ${this.price}`;

}
function saveToLocalStorage() {
    let data = JSON.stringify(cars);
    localStorage.setItem('key', data);
    console.log(cars);
}
function readFromLocalStorage() {
    let stringObj = localStorage.getItem('key');
    let normalObj = JSON.parse(stringObj);
    if (normalObj) {

        for (let i = 0; i < normalObj.length; i++) {
             new Car (normalObj[i].cName, normalObj[i].carModel,normalObj[i].parse);
            cars[i].render();
        }
    }
}
readFromLocalStorage();


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}


