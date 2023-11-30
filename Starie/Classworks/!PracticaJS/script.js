
/*
window.addEventListener("load", (event) => {
  let name = document.getElementById('name')
let age = document.getElementById('age')
let city = document.getElementById('city')
let phone = document.getElementById('phone')
    
let output = document.querySelector(".tablo")      
})
*/
/*
let arr = []
let name = document.getElementById('name')
let age = document.getElementById('age')
let city = document.getElementById('city')
let phone = document.getElementById('phone')

let output = document.querySelector(".tablo")


function Save() {
    arr.push({ name: name.value, age: age.value, city: city.value, phone: phone.value })
    alert("Saved !")
    // console.log(arr)
}


function showUserName() {

    output.innerHTML = ""

    for (let i = 0; i < arr.length; i++) {


        output.innerHTML += arr[i].name + "<br>"


    }
}
function showUserAge() {
    output.innerHTML = ""

    for (let i = 0; i < arr.length; i++) {


        output.innerHTML += arr[i].age + "<br>"


    }
}
function showUserCity() {
    output.innerHTML = ""

    for (let i = 0; i < arr.length; i++) {

        output.innerHTML += arr[i].city + "<br>"
    }
}
function showUserPhone() {
    output.innerHTML = ""

    for (let i = 0; i < arr.length; i++) {

        output.innerHTML += arr[i].phone + "<br>"
    }
}


//
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 99]

function elements() {
    console.log(arr1.length)

    const max = arr1.sort((a, b) => b - a)[0];
    console.log(max)
}

///
let arrstr = ['str1','str2-2-2','str3-3-3-3']
function filterMassiv(){
    const max = arrstr.sort((a,b) => arrstr.length)
    console.log(max)
}


let arrf = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
function checkElem() {
    // for(in arrf){
    //     console.log(key)
    // }
    let checkInfo = prompt('Введите значение от 0 до 9', '5')
    if (checkInfo in arrf == true) {
        console.log(`Значение найдено !\n\Было введено значение: ${checkInfo}\n\Длина Массива: ${arrf.length}`)
    } else {
        console.log(`Значение не было найдено !\n\Было введено значение: ${checkInfo} \n\ ${console.clear}`)
    }
}


let arr2 = [1, 2, 3, 4]
let arr3 = [, 5, 6, 7, 8, 9]
function TwoInOne() {
    console.log(`Есть 2 Массива: arr2(${arr2}) | arr3(${arr3})`)
    let arrTIO = arr2 + arr3;
    console.log(`Теперь Я их объединю: ${arrTIO}`)
}


function deleteMassiv1() {
    // ne znayu kak - Task 6 - Удаление дубликатов из массива
}

let sortMass = [1,2,3,4,5,6,7,8,9]
function sortMassiv(){
    for(let i = 0; i < sortMass.length; i++){

    }
}


let arrUmno = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function umnoJenia() {
    let check = prompt('Введите число для умножения', '5')
    for (let i = 0; i < arrUmno.length; i++) {
        let result = arrUmno[i] * check
        console.log(`Введённое вами число умножилось с числами: ${i} Итог: ${result}\n\Введённое вами Число: ${check} `)

    }
}

let task10 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function taskTen() {
    task10.reverse()
    console.log(task10)
}
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

 