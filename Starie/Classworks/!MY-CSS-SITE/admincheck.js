

let userName = prompt('Для входа в личный кабинет введите своё ник-нейм: ', 'Lelouch')
let userPass = prompt('Введите свой пароль от аккаунта '+userName, '222')
let one = 0;


const signIn = {
    name: userName,
    pass: userPass,
    checkAdmin: function(){        
        if(signIn.pass != 222){
            for(one > 0; one++;){
            }
            alert('Вы не прошли проверку ! Прошу вас покинуть сайт ! ('+one+'/3) !')
            window.location.href = './last-chance.html'    

        } else{
            alert('Вы прошли проверку ! Добро Пожаловать,Администратор !')
            window.location.href = './kabinetConfirmAdmin.html'
        }
    }
}

signIn.checkAdmin()