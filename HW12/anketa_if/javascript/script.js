let last_name = prompt('Введите вашу Фамилию')

let first_name = prompt('Введите ваше Имя')

let middle_name = prompt('Введите ваше Отчество')

let years = prompt('Сколько вам полных лет')

let sex = confirm('Ваш пол - мужской?')

if(sex){
    sex = 'мужской'
}else{
    sex = 'женский'
}

if (years<55){
    pension = 'нет'
} else{
    pension = 'да'
}

let done = confirm(
    `   
        Проверьте введенную информацию: \n
        Ваше ФИО: ${last_name}  ${first_name}  ${middle_name}
        Ваш возраст в годах:  ${Number(years)}
        Ваш возраст в днях:  ${Number(years)*365}
        Через 5 лет вам будет:  ${Number(years)+5}
        Ваш пол: ${sex}
        Вы на песнии:  ${pension} ?
    `
)

while (done == false) {

    last_name= prompt('Введите вашу Фамилию')

    first_name = prompt('Введите ваше Имя')

    middle_name = prompt('Введите ваше Отчество')

    years = prompt('Сколько вам полных лет')

    sex = confirm('Ваш пол - мужской?')

    if(sex){
        sex = 'мужской'
    }else{
        sex = 'женский'
    }
    
    if (years<55){
        pension = 'нет'
    } else{
        pension = 'да'
    }
    
    done = confirm(
        `   
            Еще раз проверьте введенную информацию: \n
            Ваше ФИО: ${last_name}  ${first_name}  ${middle_name}
            Ваш возраст в годах:  ${Number(years)}
            Ваш возраст в днях:  ${Number(years)*365}
            Через 5 лет вам будет:  ${Number(years)+5}
            Ваш пол: ${sex}
            Вы на песнии:  ${pension} ?
        `
    )
}

alert('Спасибо за регистрацию')

