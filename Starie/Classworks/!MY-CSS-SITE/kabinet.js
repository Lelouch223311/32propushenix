

let userName = prompt('Для входа в личный кабинет введите своё ник-нейм: ', 'Lelouch')
let userPass = prompt('Введите свой пароль от аккаунта '+userName, '222')
/*
function checkAkk(){
    if(userName != 'Lelouch' && userPass != '222'){
        alert('Такого Аккаунта не существует ! Вы будете переадресованы на страницу регистрации !')
        window.location.href = ('./index.html')
    } else{
        alert('Добро Пожаловать в Личный Кабинет, '+userName+' !')
    }
}
checkAkk()
console.log('LOG:\n\Логин Аккаунта: '+userName+'\n\Пароль Аккаунта: '+userPass)
*/



const signIn = {
    name: userName,
    pass: userPass,
    checkAkk: function(){        
        // if(signIn.name = 'Lelouch'){
        //     window.location.href = './index.html'
        // }
        if(signIn.name != 'Lelouch'){
            alert('Добро Пожаловать, '+signIn.name+' !');
            window.location.href = './kabinetConfirm.html'
        } else {
            alert('Добро Пожаловать,пройдите проверку на бота !!');
            window.location.href = './adminCheck.html'
        }

    }
}

signIn.checkAkk()
