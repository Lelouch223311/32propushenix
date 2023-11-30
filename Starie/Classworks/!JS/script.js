/*console.log('CONSOLE: Привет из Скрипта ! :3')
/*
[ = = = = = = = = = = = = = = = = = =  = = = = = = = = = = = = = = = = = =  = = = = = = = = = = = = = = = = = =  = = = = = = = = = = = = = = = = = =]
                                                                [ Шпаргалка Моя ]
                                                                Введение
Как вывести ключи из объекта: Ключевой Текст - Object Data //





[ = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = ]
let web = 3;
var web2 = 3;
const web3 = 4;
var web5 = 4;
// alert('text'+web3+web2+web+web5)
let web_colorForAlert = "#FF0000"

let web4 =  web+web2+web5;

console.log(web4)

let admin = ""
let namee = "Джон"
alert(admin=namee)
*/
// +===========================+++++++++++++++++++++++++++++++++++++====================================+++++++++++++++++++++++++++++++++++=========================================++++++++++++
/*
let age = prompt("Введите год своего рождения:")

let newAge = 2023 - age;

let namee = "Ваш Возраст:";
let namee1 = ' ERROR'
let namee2 = 'Вы указали Год:'
if(newAge == 22,23,24,25,26){
    namee1 = ' Годa'
}
if(newAge == 21) {
    namee1 = ' Год'
}
if(newAge == 6,7,8,9,10,11,12,13,14,15,16,17,18,19,20 && newAge != 21,22,23,24,25,26,27){
    namee1 = ' Лет'
}
alert(`${namee} ` + newAge + namee1)
console.log(age,newAge,namee1)

prompt("Введите год своего рождения:")
*/
// var itog1 = "Итог:"
// +===========================+++++++++++++++++++++++++++++++++++++====================================+++++++++++++++++++++++++++++++++++=========================================++++++++++++
/*
let result;
let a = Number(prompt("Введите первую цифру", '100'));
let b = Number(prompt("Введите вторую цифру", '100'));
let c = prompt("Список Доступных Знаков:\n\+  -  *  / ", '+');

switch (c) {

    case "+":
        result = a+b;
        break;
    case '-':
        result = a-b;
        break;
    case '*':
        result = a*b;
        break;
    case '/':
        result = a/b;
        break;

};
let itog = 'Итог: '+result
let err1 = '[ERROR]: Произошла ошибка при вводе нужного Знака !\n\ code: Undefined symbol !'

switch (c) {

    case "+":
        result = a+b;
        alert(`${itog}`,result);
        break;
    case '-':
        result = a-b;
        alert(`${itog}`,result);
        break;
    case '*':
        result = a*b;
        alert(`${itog}`,result);
        break;
    case '/':
        result = a/b;
        alert(`${itog}`,result);
        break;
    default:
        alert(err1)
        console.log("[ERROR]: Замечена ошибка при выводе результата ! Код: Непонятный Символ(Шаг 2) !\n\ Обратитесь в ЛС к Разработчику с скрин-шотом из консоли !\n\ Контакты: \n\ VK - https://vk.com/devblog123")
        console.log('Использован Знак: ', c);
        break;

};
*/
// ===========================================================================================================
/*
let first = Number(prompt('Введите первое число: '))
let two = Number(prompt('Введите второе число: '))
if(first > two){
    console.log(first > two)
    console.log(first, 'Больше чем: ', two)
} */
/*
let first1 = Number(prompt('Введите первое число: ', '2'))
let two1 = Number(prompt('Введите второе число: ', '1'))
if(first1 >= two1){
    console.log(first1 >= two1)
    console.log(first1, 'Больше или Равно чем', two1)
} */
// ===========================================================================================================
/*
let welcomeMessage = 'Добро пожаловать,Администратор !'
let username = prompt('Введите своё Имя: ')
let userpass = prompt('Введите ваш пароль для доступа на сайт: ')

if(username != 'admin' && userpass != 'admin') {
    alert('Доступ запрещён !')
} else if(username == 'admin' && userpass == 'admin'); {
    alert(welcomeMessage)
}
// let result = (a + b < 4) ? 'Мало' : (a + b > 4) ? 'Много' : 'Подходит!'
console.log('Отправил бы данные на сервер,но сервера как и знаний - нету.')
*/
// =============================================================================================================================================== //


// let i = 0;
// while (i < 3){
//     console.log(i)
//     i++;
// }
// =============================================================================================================================================== //

/*
do{
    console.log(i)
    i++;
} while (i < 3){
    console.log('While: i < 3 !!')
}

// =============================================================================================================================================== //

for(let i = 0; i<3; i++){
    console.log(i, 'Done !')
}

for(let веб = 0; веб; веб++){
    console.log(веб, 'Done !')
}
*/
// =============================================================================================================================================== //

/////// CRASHAET !
// for (;;){
//     console.log('Hello')
// }
/////// CRASHAET !
// =============================================================================================================================================== //

/*
let sum = 0;
while(true){
   let value = +prompt('Add Number: ')
   if(!value) break;

   sum += value
}
console.log('Сумма: ' + sum)
*/
// =============================================================================================================================================== //

/*
for (let i = 0; i < 10; i++){
    // Если true,пропустить оставшуюся часть тела
    if(i == 5) continue;

    console.log(i)
}
// =============================================================================================================================================== //


for (let i = 0; i < 3; i++) {
    console.log('i: ' + i)

    for (let j = 0; j < 3; j++) {
        console.log('j: ' + j)
    }
}
*/
// =============================================================================================================================================== //

/*
outer: for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {

        let input = prompt(`Значение на координатах (${i},${j})`, '');

        // если пустая строка или Отмена, то выйти из обоих циклов
        if (!input) break outer; // (*)

        // сделать что-нибудь со значениями...
    }
}

alert('Готово!');
*/
// =============================================================================================================================================== //
/*
let n = 10;

nextCifra: for (let i = 2; i <= n; i++) {

  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextCifra;
  }

  console.log(i);
}
*/
// =============================================================================================================================================== //
/*
let t1 = '';
let t2 = +prompt('Укажите свой возраст: ', '20');

if (t2 < 18){
    alert('Школьник !')
} else {
    alert('Студент !')
}

*/
// =============================================================================================================================================== //
/*
let score = 0;
while(score < 10){
    let nummm = Math.floor(Math.random(100)*100)
    console.log(score+nummm); 
    score++;
}
*/

/*
let result;
let a = Number(prompt("Введите первую цифру", '100'));
let b = Number(prompt("Введите вторую цифру", '100'));
let c = prompt("Список Доступных Знаков:\n\+  -  *  / ", '+');

switch (c) {

    case "+":
        result = a+b;
        break;
    case '-':
        result = a-b;
        break;
    case '*':
        result = a*b;
        break;
    case '/':
        result = a/b;
        break;

};

let itog = 'Итог: '+result
let err1 = '[ERROR]: Произошла ошибка при вводе нужного Знака !\n\ code: Undefined symbol !'

switch (c) {

    case "+":
        result = a+b;
        alert(`${itog}`,result);
        break;
    case '-':
        result = a-b;
        alert(`${itog}`,result);
        break;
    case '*':
        result = a*b;
        alert(`${itog}`,result);
        break;
    case '/':
        result = a/b;
        alert(`${itog}`,result);
        break;
    default:
        alert(err1)
        console.log("[ERROR]: Замечена ошибка при выводе результата ! Код: Непонятный Символ(Шаг 2) !\n\ Обратитесь в ЛС к Разработчику с скрин-шотом из консоли !\n\ Контакты: \n\ VK - https://vk.com/devblog123")
        console.log('Использован Знак: ', c);
        break;

};*/
/*
function showMessage(){
    alert('Всем Привет !')
}
showMessage();

//----------
*/
/*
checkAge();
let name = 'Petja'

function show(nameShow, ageShow = undex()) {
    console.log(ageShow, nameShow)
}
show(name)

function undex() {
    return 32;
}
function checkAge() {

    let access = confirm('А Родители  Разрешили ?\n\Ок __ Да\n\Отмена __ Нет.')
    if (access) {
        alert('Добро Пожаловать !')
    } else {
        alert('Доступ Запрещён !')
        // return confirm('А Родители Разрешили ?)');
        return 'Всё !';
    }

}
*/
/*
let age = +prompt('Введите свой возраст: ', '18');

function ageCalc(ageTwo){
    if(ageTwo < 18)
    {
        console.log('Вы Школьник !('+ageTwo+' а Это уже из Функции)')
    } else if(ageTwo > 30 || ageTwo >= 19) {
        console.log('Вы Явно не Школьник ! :c ('+ageTwo+' а Это уже из Функции)')
    }
}
ageCalc(age)

console.log('Ваш возраст из глобальной переменной: '+age)
*/
/*
let age = +prompt('Age ?', '19')

function myFunc(x){
    if(x < 18) return 'Школьник'
    else return 'Студент'
}

// let ageX = myFunc(age)

console.log(myFunc(age))
*/
/*
let a = +prompt('1(2,5 || 3, -1 ||): ', '2')
let b = +prompt('2(2,5 || 3, -1 ||): ', '5')

function min(a, b) {
    if (a < b) {
        return console.log('min(2, 5) == 2')
    } else if (a > 3 || b < -1) {
        return console.log('min(3, -1) == -1')
    } else if (a == 1 && b == 1){
        return console.log('min(1, 1) == 1')
    }
}
min(a, b)

*/
/*
let x = +prompt('Число номер 1: ', '1')
let n = +prompt('Число Номер 2: ', '2')
function pow(x,n){
    return console.log(x**n)
}

pow(x,n)
*/
/*
let global = 3;
let global1 = 4;


function Func(global, global1){
    // function body

    return global + global1
}

let result = Func(global, global1)
console.log('Итог: ' + result + '\n\Цифры: ', global,'+',global1)
*/
/*
function sayHi(){
    alert('Hello')
}
alert(sayHi)
console.log(sayHi)
*/
/*
function ask(question, yes, no){
    if (confirm(question)) yes()
    else no();
}

function showOk(yes){
    alert('Вы Подтвердили Действие !')
}
function showCancel(no){
    alert('Вы отменили действие !')
}
ask("Вы согласны ?", showOk, showCancel)
*/
/*
let age = +prompt('Введите свой возраст', 18)

function error(){
    console.log('ERROR !')
}

if (age < 18){
    function welcome(){
        alert('Привет !')
    }
} else {
    function welcome(){
        alert('Здравствуйте !')
    }
}
welcome()
*/
/*
let a = +prompt('Введите число номер 1: ', '5')
let b = +prompt('Введите число номер 2: ', '5')
let c = prompt('Введите нужный Знак: ', '+')
let result;

function summa(a,b) {
    return a + b
}

function calculated(a,b,summa){
    console.log(summa(a,b))
}
calculated(5,5,summa)
*/
/*
function calc(){
    if(c == '+'){
        alert(a+b)
    } else if(c == '-'){
        alert(a-b)
    }
}
calc()
*/

// ========================================= [ HTML-Link Generator ] ==================================================

/*
let url = prompt('Введите ссылку: ', 'https://vk.com/')


function generateLink(url){

    url = 'https://vk.com/lolkek'
    console.log('Вот ваша сгенерированная ссылка: ', url)

}
generateLink()
*/




// ========================================= [ HTML-Link Generator // END // ] =====================================================================

/*
let a = +prompt('Введите число номер 1: ', '5')
let c = +prompt('Введите число номер 2: ', '5')


function sum(){

    return console.log('Результат: ',result = a + c,' ! (Использовалась функция: Sum )')
}
// sum()


function mult(){

    return console.log('Результат: ',result = a + c,' ! (Использовалась функция: Mult )')
}
//mult()



function calculate(sum,mult){

    if(a > c ){
      sum()
    } else {
      mult()
    }

}
calculate(sum,mult)

*/

// ====================================================== [ HomeWork ] ==============================================================

// Link-Generator:

/*
let result;
let url = prompt('Введите ссылку: ', 'https://google.com/')
let oldurl = 'Default of let oldurl !!'

// function generateLink(){
    
//    return url = 'https://google.com/listen-to-you-heart/page#1/'

// }
function generateLink(){
    
   oldurl = url;
   return url = 'https://google.com/listen-to-you-heart/page#1/'

}

function callback(generateLink){

    return console.log('Ваша Новая Ссылка: ', url),console.log('Ваша Старая Ссылка: ', oldurl)
    
}
callback(generateLink())

let sayHi = () => alert("Hello!");

sayHi();
*/

// =============================================================================
/*
// Calculator:
let a1 = +prompt('Введите число номер 1: ', '5')
let b1 = +prompt('Введите число номер 2: ', '5')
let result;

function calculate(){

    return result = a1 + b1;
}
function callback1(calculate){

    return console.log('Результат(+): ', result)
}
callback1(calculate())
*/

// ====================================================== [ HomeWork ] ==============================================================

//12. Определение сезона года: Напишите функцию, которая принимает месяц (в виде 
// числа или строки) и возвращает сезон года (весна, лето, осень, зима).
// ============================== [ DZ-1 ] ======================================================= //
/*
let month = +prompt('Введите Номер Месяца: ', '12')
let monthresult;

function Month(){
    return Month1(monthresult)
}

function Month1(monthresult){
    if(month >= 1 && month >! 4){
        alert('TEXT')
    } else{
        alert('ELSE')
    }
}
Month()
*/

// ============================= [ END ] =========================================

/*

function sayMyName(nameX){
    nameX = prompt('Say My Name !', 'Лелуш')
    passQ = +prompt('Say My Password !!', '123')

    if(nameX == 'Лелуш' || nameX == 'Lelouch' && passQ == '123'){
        alert('You goddamn right ! My name is '+nameX+'\n\ And my Password is '+passQ)   
        
    } else {
        alert('You not have acces potomushto ti ne to imya/password vvel...')
        window.location.href = './ban.html'
        return 0;
    }
}
sayMyName()
*/
/*

// let user = new Object();
let nameX = "FIO"

const user = {
    [nameX]: "Lelouch",
    age: 20,
    key: "value",
    'likes birds': true,
};
console.log('Ваше Имя: ', user.name,'\n\Ваш Возраст: ', user.age)

user.isAdmin = true;

delete user.isAdmin;
// console.log(user.isAdmin, 'LOG: user.isAdmin has been Deleted !')
// console.log(user["likes birds"])

user["likes birds"] = 'likes birds FALSE';
console.log(user["likes birds"])


let x = "likes birds"

user[x] = 8+' | x = likes birds. user[x] = 8 |';

console.log(user["likes birds"])


let bag = {
    fruct: "",
    coll: 0,
    price: 0,
}
// bag.fruct = prompt('Frukt vvedi?', 'banana')
// bag.coll = +prompt('Кол-во?', '10')
// bag.price = +prompt('Цена ?', '67')


calc(bag.fruct, bag.coll, bag.price)

function calc(a,b,c){
    let sum = b*c
    console.log(a + ":" + sum)

}

console.log("key" in user)


for(let i in user){
    console.log(i)
}
*/


// ================================================================= [ Classwork ] =======================================================================


/*
let obj1 = {}
obj1.name = 'John'
console.log(obj1.name, 'сказал что он всё знает !')

obj1.name = "Alice"
console.log(obj1.name, "в ответ сказала что он ничего не знает !")

delete obj1.name;
console.log('В итоге все имена были удалены ! :C \n\Пруф: ', obj1.name)
console.log('age' in obj1, ' in obj1 = false')

//
let person = {
    name: 'Jorik',
    age: '33',
    city: 'Sochi',
    address: {
        street: 'ads',
        zipcode: '123',
    }
}
let array1 = []
array1 = Object.keys(person)

console.log('Street: ', person.address.street)

delete person.address
console.log('delete person.address: ', person.address)
console.log('proto' in person,'proto false !!!')


// const obj = personCopy = {
//     name: 'Jorik',
//     age: '33',
//     city: 'Moskwa'
// }
let personTwo = {
    name: "Vasja",
    age: 31,
    country: "Russia",
}
let arr = []

arr = Object.keys(person,personTwo) // 8
console.log(arr)
// let pers = person = personCopy = {
//     person,
//     personCopy
// }

const personCopy = {person,personTwo}
console.log(personCopy, 'PersonCopy !')
*/

/*

// Car Constructor System with Object JS
let carBrand = prompt('Введите название нужного Бренда: ', 'Nissan')
let carModel = prompt('Введите модель авто: ', 'R35 GT-R')

const car = {
    brand: carBrand,
    model: carModel,
    startEngine: 'Engine Started !',
    car1: {
        brand: 'Toyota',
        model: 'Supra',
    }
}
console.log('============[Car Constructor ]=============')
console.log('Брэнд: ', car.brand, '\n\Модель: ', car.model)
console.log('============[ Car1 | Готовый Варьянт ]====================')
console.log(car.car1, car.startEngine)
console.log('============[Car Constructor  END]=============')


// book-system | Система с Книгами
let bookTitle = prompt('Введите название книги: ', 'JS за 3 минуты (c) William Obmanitus ')
let bookAuthor = prompt('Введите Имя и Фамилию Автора: ', '| NetuTakih')

const book = {
    setTitle: bookTitle,
    setAuthor: bookAuthor,
    bookInfo: bookTitle + bookAuthor
}
const bookShelf = {
    addBook: book.bookInfo
}
// bookShelf.addBook = bookInfo
console.log('\n\n\Добавленные Книги: ', bookShelf.addBook)

console.log('=================[ Bank System ]========================')

let dep = prompt('Введите сумму депозита: ', '100.000$')
let putcash = prompt('Введите суму withdraw: ', '50.000$')

const bankAccount = {
    deposit: dep,
    withdraw: putcash
}
console.log('Deposit: ', bankAccount.deposit, ' | Withdraw:', bankAccount.withdraw)

console.log('=================[ Bank System END]========================')
*/
/*
const student = {
    addGrade: function(x){
        let ball = +prompt('Введите свою оценку: ', '5')
        myBall = ball
    },
    getAverageGrade: function(x){
        if(x < 5){
            ball = 3
            console.log('Средняя оценка: ', ball, '???')
        }
    }
}
console.log(student.addGrade(4), 'Средний Балл: ', student.getAverageGrade(3))
*/

//timer | таймер
/*
let timerSec = +prompt('Введите время на которое установить таймер(Секунды): ', '10')

const timer = {
    time: timerSec,
    start: function(time,proshlo,zero){
        if(timer.time >= 1){
        console.log('Запущен таймер...', timer.time)
        for(timer.time >= 1; timer.time--;){
            console.log('Таймер осталось: ', timer.time)
        }        
        }
    }
}
timer.start(timer.time)
console.log('Таймер закончил свою работу !')

*/

// ================================================================= [ Classwork END] =======================================================================


// ================================================================= [ Classwork NEW Start] =======================================================================

/*
const obj = {

}
obj.name = 'John'
console.log(obj.name)

obj.name = 'Alice'
console.log(obj.name)

delete obj.name;
console.log(obj.name)

console.log('age' in obj)
// 1 Part End
// Part 2 - Person
const person = {
    name: 'Petja',
    age: 20,
    city: 'Sochi',
    address: {
        street: 'Street',
        zipcode: 'ZipCode'
    }
}
let arry = []
arry = Object.keys(person)
console.log(arry)

let array = Object.values(person)
console.log(array)

const personCopy = {person}

const pers = {person,personCopy}

for(let key in person){
    console.log(key + " : " + person[key])
}

console.log(person.address.street)

delete person.address

console.log('proto' in person, 'proto false')


// Car Constructor System with Object JS
let carBrand = prompt('Введите название нужного Бренда: ', 'Nissan')
let carModel = prompt('Введите модель авто: ', 'R35 GT-R')

const car = {
    brand: carBrand,
    model: carModel,
    car1: {
        brand: 'Toyota',
        model: 'Supra',
    },
    startEngine: function(){
        console.log('Engine Started !')
    }
}
console.log('============[Car Constructor ]=============')
console.log('Брэнд: ', car.brand, '\n\Модель: ', car.model)
console.log('============[ Car1 | Готовый Варьянт ]====================')
console.log(car.car1,car.startEngine())
console.log('============[Car Constructor  END]=============')

// book-system | Система с Книгами
let bookTitle = prompt('Введите название книги: ', 'JS за 3 минуты (c) William Obmanitus ')
let bookAuthor = prompt('Введите Имя и Фамилию Автора: ', '| NetuTakih')

const book = {
    setTitle: bookTitle,
    setAuthor: bookAuthor,
    bookInfo: bookTitle + bookAuthor
}
const bookShelf = {
    addBook: book.bookInfo
}
// bookShelf.addBook = bookInfo
console.log('\n\Добавленные Книги: ', bookShelf.addBook)

console.log('=================[ Bank System ]========================')

let dep = prompt('Введите сумму депозита: ', '100.000$')
let putcash = prompt('Введите суму withdraw: ', '50.000$')

const bankAccount = {
    deposit: dep,
    withdraw: putcash
}
console.log('Deposit: ', bankAccount.deposit, ' | Withdraw:', bankAccount.withdraw)

console.log('=================[ Bank System END]========================')


//timer | таймер

let timerSec = +prompt('Введите время на которое установить таймер(Секунды): ', '10')

const timer = {
    time: timerSec,
    start: function(time,proshlo,zero){
        if(timer.time >= 1){
        console.log('Запущен таймер...', timer.time)
        for(timer.time >= 1; timer.time--;){
            console.log('Таймер осталось: ', timer.time)
        }        
        }
    }
}
timer.start(timer.time)
console.log('Таймер закончил свою работу !')

//student
const student = {
    ball: 0,
    addGrade: function(x){
        this.ball = x
    }
}

let aaa = +prompt("Оценка?")
console.log('Ваша Оценка: '+student.addGrade(aaa))
*/


/*
const Person = {
    name: 'John',
    age: 30,
    address: {
        city: 'Sochi',
        street: 'Gogol Street 47'
    },
    set: function(name){
        this.name = name // this.name -> Из Локальной вытаскивает перемённую name и делёт её типа "глобальной"
    } 
}

Person.set('Vasya')


function personInfo() {
    console.log('Информация о Объекте Person:')

    let arg = Object.values(Person)
    arg.forEach(key => console.log(key))

}
// personInfo()

function objChange() {
    let test = prompt('Введите новое название для "name"', 'NewName123')
    Person.name = test
    console.log(Person.name)
}

// objChange()
const personCopy = { ...Person, name: 'Jeka', age: 30 }
// Teach#1 
/*

=============== [3 Способа вывести данные из объекта | Object Data] =================

№1 Массивы:
let arr = []
arr = Object.Values(Person) => Персон = название объекта
console.log(arr) => Вывод в консоль

№2 forEach:
let arg = Object.values(Person)
arg.forEach(key => console.log(key)) => Вывод в консоль

№3 Цикл:
for(let key in Person){
    console.log(Person[key])
}

======================================================================================
*/
/*
for (let key in Person) {
    if (typeof Person[key] === 'object') {
        for (let i in Person[key]) {
            console.log(`${i} : ${Person[key][i]}`)
        }
    } else {
        console.log(`${key} : ${Person[key]}`)
    }
}

const obj = {
    name: "Oleg",
    sayHi: function(){
        let ar = () => console.log(this.name)
        ar();
    }
}
// obj.sayHi();
*/

/*

function Person(name,age){
    this.name = name,
    this.age = age
};

let student = new Person("Oleg",28)
console.log(student)

console.log(student.age)
console.log(student.name)

let teacher = new Person("Alex",33) // => Функция Конструктор. Заменяет стандартное создание объектов.

console.log(teacher.name)

function People(name,age){
    this.name = name
    this.age = age
}

let driver = new People("Igor", 45)
console.log(driver.name)




let billion = 1e9; // => 1 miilion (e = кол-во нулей)000.000.000(e = 9)

let let13 = "Hello \"World\" !" // => Обратный Слеш

*/
/*
let str = 'Hello World !'
console.log(str.at(-1))
for (let i of str){
    // console.log(i) => Сделать вывод всего текста по 1 буквы из str
}


console.log('Interface'[1].toUpperCase()+' from Interface')
*/

/*
let str = "Ослик Иа-Иа посмотрел на виадук"

console.log(str.indexOf("Иа")) // => Если у нас в str содержится " Иа " то в консоли выведет на каком место он нашёл Иа
// let searchStr = "Иа"

function searchStr(search){

   if(str.indexOf(searchStr) >= 0) console.log('Найдено')
   else console.log('Не найдено !')
}

searchStr("На")
*/
/*
let str = `У лукоморья дуб зелёный;
Златая цепь на дубе том:
И днём и ночью кот учёный
Всё ходит по цепи кругом;
Идёт направо — песнь заводит,
Налево — сказку говорит.`
let target = 'На'
let pos = -1
// while((pos = str.indexOf(target, pos + 1)) != -1){
//     console.log(pos)
// }
function searchPos(str,target){

    while((pos = str.indexOf(target, pos + 1)) != -1){

    console.log(`Найдено Тут: ${pos}`)
    // pos = foundPos ++;
    }
}

searchPos(str,"На")
*/

// ========================= [ Массивы ] ========================
/*
// 2 способа объявления массивов:
let arr = new Array()

let arr2 = ["Яблоко","Апельсин","Слива"]
console.log(arr2[1])

arr2[1] = 'Груша' // => Поменять значение
console.log(arr2[1])

arr2[3] = 'Лимон'
console.log(arr2[3]) // New in Arr = Limon arr2.lenght => вывести длину массива

console.log(arr2)

arr2[4] = {name: 'Igor'} // => Добавить Объект в Массив
console.log(arr2)

arr3 = [()=>2+2,54,'Oleg']
console.log(arr3)

let a = arr3[0]
console.log(a()) 

console.log(arr2.at(-2))

arr2.push(67) // => добавить новый Элемент в Конце
console.log(arr2)

arr2.pop() // => Удаляет последний Элемент в Массиве
console.log(arr2)

arr2.shift() // => Удаляет первый Элемент в Начале
console.log(arr2)

arr2.unshift('Яблоко') // => Добавляет элемент в начало массива


let num2 = arr2.pop() // => Убрать все элементы кроме объектов ?!
console.log(num2)
console.log(arr2)

arr2.push("Апельсин","Груша")
arr2.unshift("Ананас","Limon")
console.log(arr2)
*/

/*
// Нестандартный ключ объекты, map = text, cislo
let obj = {
    name: 'Vasja',
    age: 30
}

let map = new Map()
map.set('banan', 23).set('orange', 2).set('meat', 4).set(obj, 43)

let obj2 = Object.fromEntries(map)
console.log(obj2)
*/
// console.log(obj2)


/*
// Массив без повторений: 
let arr = [32,76,82,32,22,76]
// Достать свойства и положить куда то: ...
function myFunc(arr){
    // 2 Способа:
    // return [... new Set(arr)]
    arrBuff = new Set(arr)
    return arrBuff;
}

let arr1 = myFunc(arr)
console.log(arr1)
*/


//=============================== [ End Massiv ] =================



// ================================================================= [ Classwork NEW END] =======================================================================
////////////
var colorArray = ["#FF0000", "#FFFF00", "#0000FF"]; // "#0DC2FF", "#007DE8", "#0E5DFF", "#0C28EB", "#1600FF", "#00FF00"
var i = 0;

function changeColor(){
    document.body.style.background = colorArray[i];
    i++;
    if( i >= colorArray.length) {
        i = 0;
    }
}

/////////