'use strict';

let money = +prompt('Ваш бюджет на месяц?', ''),
time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = { //Бюджет
    moneyData: money,
    timeData: time,
    expenses: {}, //объект с обязательными расходами
    optionalExpesesData: {},
    income: [],
    savingsData: false
};


for(let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt ("Во сколько обойдется?", '');

    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != null && a.length < 50 ) {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        console.log ("error");
        i--;
    }
};

//Цикл While
/*let i = 0;

while (i < 2) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt ("Во сколько обойдется?", '');

    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != null && a.length < 50 ) {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        console.log ("error");
        i--;
    }

    i++;
}*/

//Цикл do while
/*let i = 0;
do {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt ("Во сколько обойдется?", '');

    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != null && a.length < 50 ) {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        console.log ("error");
        i--;
    }

    i++;
}
while(i < 2);*/

appData.moneyPerDay =  Math.round((appData.moneyData)/30);

alert('Бюджет пользователя на 1 день: ' + appData.moneyPerDay + ' рублей'); //Без вычета обязательных расходов

if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if(appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка!");
}

console.log('Бюджет: ', appData.moneyData);
console.log('Дата: ', appData.timeData);
console.log('Расходы: ', appData.expenses);
console.log('Сбережения: ', appData.savingsData);


