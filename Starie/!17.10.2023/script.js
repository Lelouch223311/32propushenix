// let now = new Date(24 * 3600 * 1000);

// console.log(now)

// let data = new Date()

// console.log(`Дата: ${data.getDate()} \n\Месяц: ${data.getMonth()}`)
/*

let user = {
    name: "Vasaja",
    age: 33
}
console.log(`Объект:`, user)


let json = JSON.stringify(user)
console.log(json)


let obj = JSON.parse(json)
console.log(obj.age)

json = JSON.stringify(user)
console.log(json)
*/

/*
function checkThis(x,n){
    if(x == n){
        return n;
    } else{
        console.log(x)
        return x + checkThis(x + 1, n)
    }

}

console.log(checkThis(0,11))
*/
/*
let company = { // тот же самый объект, сжатый для краткости
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
    development: {
      sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
      internals: [{name: 'Jack', salary: 1300}]
    }
  };
  
  // Функция для подсчёта суммы зарплат
  function sumSalaries(department) {
    if (Array.isArray(department)) { // случай (1)
        // console.log(department)
      return department.reduce((prev, current) => prev + current.salary, 0); // сумма элементов массива
    } else { // случай (2)
      let sum = 0;
      for (let subdep of Object.values(department)) {
        console.log(subdep)
        sum += sumSalaries(subdep); // рекурсивно вызывается для подотделов, суммируя результаты
        console.log(sum)
      }
      return sum;
    }
  }
  
//   alert(sumSalaries(company)); // 6
console.log(sumSalaries(company))
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////












/*
// ============== [DZ]
function test(){
  document.body.style.backgroundColor = "black"
  document.body.style.backgroundColor = "red"
  document.body.style.backgroundColor = "black"
  document.body.style.backgroundColor = "red"
  document.body.style.backgroundColor = "gray"

}
setInterval(test, 2000)

*/
// test()
/*

let obj3 = {
  name: "Vasja",
  age: 44,

  // get info(){
  //   return `${this.name} ${this.age}`;
  // },
  set info(value){
    [this.name, this.age] = value.split(" ");
  }
}


obj3.info = "Petr 33";

console.log(obj3.age)



class Web33{
  constructor(name,age,city){
    this.name = name;
    this.age = age;
    this.city = city;
  }
  prinInfo(){
    console.log(this.name + this.age + this.city)
  }
}

let user1 = new Web33('Vasja',20,'Sochi')
console.log(user1)
*/


/*
class Car{
  constructor(marka,year,ccolor){
    this.marka = marka;
    this.year = year;
    this.ccolor = ccolor;
    this.engine = false;
  }
    prinInfo(){
      console.log(this.marka + this.year + this.ccolor)
    }
  }

let car1 = {
  marka: 'Toyota',
  year: 1980,
  ccolor: 'Black',
  MaxSpeed: '240 km/h'
}
let car2 = {
  marka: 'Nissan',
  year: 1999,
  ccolor: 'Black',
  MaxSpeed: '260 km/h'
}
let car3 = {
  marka: 'Mazda',
  ccolor: 'Orange',
  year: 1978,
  MaxSpeed: '230 km/h'
}

*/




// let marka = document.getElementById('marka')
// let model = document.getElementById('model')

// let car1 = document.querySelector('.outputCar')

// let arr = []

// function Save() {
//   arr.push({ marka: marka.value, model: model.value })
//   alert("Saved !")
//   // console.log(arr)
// }

// function showData() {

//   outputCar.innerHTML = ""

//   for (let i = 0; i < arr.length; i++) {


//     outputCar.innerHTML += arr[i].marka + "<br>"


//   }
// }



/*
class Car {
  constructor(marka, model, year, ccolor) {
    this.marka = marka;
    this.year = year;
    this.ccolor = ccolor;
    this.model = model;
    this.engine = false;
  }
  carFunc() {
    // console.log(this.marka + this.year + this.ccolor)
    console.log(`${this.model} Врум-Врум ?`)
  }
  printInfo() {
    console.log(`Марка: ${this.marka}\n\Модель: ${this.model}\n\Год Выпуска: ${this.year}\n\Цвет Авто: ${this.ccolor}`)
  }
}
let car1 = new Car('Toyota', 'Supra', 1980, 'Black')
let car2 = new Car('Nissan', 'Skyline', 1999, 'Blue')
*/
/*
car1.carFunc()
car1.printInfo()

car2.carFunc()
car2.printInfo()
*/
// Наследование:
/*
class People {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }
  get _surname(){
    return this._surname
  }
  speak() {
    console.log(`Меня зовут ${this.name}`)
  }
}


class Driver extends People { // наследуемся

  constructor(name,age,car) {
    super(name,age) // Что бы не писать все значения из constructor(...) + добавить своё поле // Полиморфизм - изменение формы класса
    this.car = car;
  }

  speak() { // переписываем метод
    super.speak() 
    console.log(`${this.car}`)
  }
  drive() {
    console.log(`Vrum Vrum!`)
  }
}

let driv1 = new Driver(`Alex(net)`, `Snow`, 23, 'Toyota')

driv1.speak()
driv1.drive()
*/
////////////////////////////////////////////////// AUTOMOBIL ///////////////////////////////////////////////////////////////////////////

let arr = []
let marka = document.getElementById('marka')
let model = document.getElementById('model')
let output = document.querySelector('.output')

function Save() {
  arr.push({ marka: marka.value, model: model.value })
  // alert("Saved !")
  console.log(`Saved !`)
  // console.log(arr)
}

function showInfo() {
  output.innerHTML = ''

  for (let i = 0; i < arr.length; i++) {
    output.innerHTML += "Выбранная Марка: " + arr[i].marka + "<br>"

    output.innerHTML += "Выбранная Модель: " + arr[i].model + "<hr>"
  }

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*

class Car{
  constructor(marka,model,year,maxspeed,engine){
    this.mark = mark;
    this.model = model;
    this.year = year;
    this.maxspeed = maxspeed;
    this.engine = engine;

  }
  printInfo(){
    console.log(this.mark + this.model + this.year)
  }

}
let car3 = ''
function createCar(){
  let mark = document.getElementById('markInput')
  let modell = document.getElementById("modelInput")
  let yearr = document.getElementById("yearInput")

  car3 = new Car(mark.value, modell.value, yearr.value)
  // console.log(car2)
}


let btn = document.querySelector('.engine')

/*
let marka = document.getElementById("markInput")
let model = document.getElementById("modelInput")
let year = document.getElementById("yearInput")
*/
/*
let speed = 0;
function speedUp(){
  if(speed != 290){
    speed += 10
    console.log(`Текущая скорость автомобиля: ${speed} km/h`)
    setInterval(speedUp, 1000)
  } else {
    clearInterval(speedUp)
    return false;
  }
  
  
}

function speedDown(){
  if(speed > 6 && speed != 290){
    speed -= 25
    console.log(`Текущая скорость автомобиля: ${speed} km/h`)
    setInterval(speedDown, 1000)
  } else {
    clearInterval(speedDown)
    // console.log('Ваши тормоза не справились :c ВОзможно вы бы остановились быстрее если бы сами не были Тормозом :v')
    
    return false;
  }
}
*/
