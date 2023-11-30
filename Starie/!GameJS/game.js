

/*
let Warrior1 = {
    HP: 100,
    Gun: 'Desert Eagle .50',
    Atack: 50,
    Armor: 10,
    Ammo: 7,
}
let Warrior2 = {
    HP: 100,
    Gun: 'Colt Python',
    Atack: 30,
    Armor: 15,
    Ammo: 7,
}
*/

/*
let HP1 = 100;
let HP2 = 100;

let Gun1 = 'Desert Eagle .50'
let Gun2 = 'Colt Python'

let Atack1 = 50;
let Atack2 = 30;

let Armor1 = 10;
let Armor2 = 15;
*/
// let shotSucces = Math.floor(Math.random(413));


// let duel = 1;    
/*
function Duel(){

    let shotSucces = Math.floor(Math.random(413) * 3);

    if(shotSucces != 2 && duel == 1){
        alert('Warrior1 shooted in Warrior2 !'+shotSucces)
        console.log('[DUEL-LOG]: Боец номер 2 попал в Бойца номер 1 !')
        Warrior2.HP = 55;
        Warrior2.Armor = 1;
        console.log('[DUEL-LOG]: Нанесён Урон:\n\ HP: -45 | Armor: -9 |\n\Текущие Статистики Врага:\n\HP: ', Warrior2.HP,' | Armor: ',Warrior2.Armor,'|')
        duel++;
    } else{
        alert('Warrior2 shooted in Warrior1 !(Info in Console)'+shotSucces)
        console.log('[DUEL-LOG]: Боец номер 2 попал в Бойца номер 1 !')
        Warrior1.HP = 75;
        Warrior1.Armor = 1;
        console.log('[DUEL-LOG]: Нанесён Урон:\n\ HP: -25 | Armor: -9 |\n\Текущие Статистики Врага:\n\HP: ', Warrior1.HP,' | Armor: ',Warrior1.Armor,'|')
        duel++;
    }

    if(duel = 2 && shotSucces != 2){
        alert('Warrior1 shooted in Warrior2 !'+shotSucces)
        console.log('[DUEL-LOG]: Боец номер 1 попал в Бойца номер 2 !')
        Warrior2.HP = 5;
        Warrior2.Armor = 0;
        console.log('[DUEL-LOG]: Нанесён Урон:\n\ HP: -50 | Armor: -1 |\n\Текущие Статистики Врага:\n\HP: ', Warrior2.HP,' | Armor: ',Warrior2.Armor,'|')
        duel++;
    } else{
        alert('Warrior2 shooted in Warrior1 !(Info in Console)'+shotSucces)
        console.log('[DUEL-LOG]: Боец номер 2 попал в Бойца номер 1 !')
        Warrior1.HP = 46;
        Warrior1.Armor = 0;
        console.log('[DUEL-LOG]: Нанесён Урон:\n\ HP: -29 | Armor: -1 |\n\Текущие Статистики Врага:\n\HP: ', Warrior1.HP,' | Armor: ',Warrior1.Armor,'|')
        duel++;
    }

    if(duel = 3 && shotSucces != 2){
        alert('Warrior1 shooted in Warrior2 !'+shotSucces)
        console.log('[DUEL-LOG]: Боец номер 1 попал в Бойца номер 2 !')
        Warrior1.HP = 0;
        Warrior1.Armor = 0;
        console.log('[DUEL-LOG]: Нанесён Урон:\n\ HP: -5 | Armor: -0 |\n\Текущие Статистики Врага:\n\HP: ', Warrior2.HP,' | Armor: ',Warrior2.Armor,'|')
        console.log('[DUEL-LOG]: Враг Убит !\n\Боец номер 1 Победил Бойца Номер 2 !')
        alert('В Дуэли победителем Оказался Боец Номер 1 !')
        duel = 1;
    } else{
        alert('Warrior2 shooted in Warrior1 !(Info in Console)'+shotSucces)
        console.log('[DUEL-LOG]: Боец номер 2 попал в Бойца номер 1 !')
        Warrior2.HP = 0;
        Warrior2.Armor = 0;
        console.log('[DUEL-LOG]: Нанесён Урон:\n\ HP: -46 | Armor: -0 |\n\Текущие Статистики Врага:\n\HP: ', Warrior1.HP,' | Armor: ',Warrior1.Armor,'|')
        console.log('[DUEL-LOG]: Враг Убит !\n\Боец номер 2 Победил Бойца Номер 1 !')
        alert('В Дуэли победителем Оказался Боец Номер 2 !')
        console.log('Проведено Раундов: 3')
        duel = 1;
    }
}
*/
// Duel()

/*
for (let i = 0; i < 3; i++) { // выведет 0, затем 1, затем 2
  alert(i);
}
*/
/*

function Barraks(){
    this.warrior = name,
    this.hp = Hp,
    this.armour = Arm,
    this.gun = Gun,
    this.dmg = Damage,
    this.ammo = Ammo,
    this.defence = Def
}

// let var1 = new Barraks("Vasja",100,10,"Topor",30,0,5)
// let var2 = new Barraks("Andruxa",100,10,"Colt Python",90,3,10)
let var1 = new Barraks("Vasja","Sword",120,30,10)
let var2 = new Barraks("Adam","Colt Python",120,30,10)

function duel(var1,var2){
    while(var1.Hp > 0 && var2.Hp > 0){
        var1.Hp -= (var2.Damage - var1.Def)
        var2.Hp -= (var1.Damage - var2.Def)
        console.log(`Hp: ${var2.name}: ${var1.Hp}`)
        console.log(`Hp: ${var1.name}: ${var2.Hp}`)
    }
    if(var1.Hp <= 0 || var2.Hp <= 0){
        let result = var1.Hp <= 0 ? var1.name : var2.Hp <= 0 ? var2.name : var1.Hp
        console.log(result+` Проиграл !`)
    } else {
        console.log(`Ничья !`)
    }
}
*/


// const doc = document.querySelector(".topos")
// topos.innerHTML = "<p>Hello!</p>"
// console.log(doc)

let web = document.getElementById("web")
console.log(web)

