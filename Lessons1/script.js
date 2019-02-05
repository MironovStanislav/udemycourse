'use strict';

let money = +prompt('Ваш бюджет на месяц?', ''),
time = prompt("Введите дату в формате YYYY-MM-DD"),
a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
a2 = prompt ("Во сколько обойдется?", ''),
a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
a4 = prompt ("Во сколько обойдется?", '');

let appData = { //Бюджет
    moneyData: money,
    timeData: time,
    imperativeExpesesData: {}, //объект с обязательными расходами
    optional: {},
    otherProfitData: [],
    savingsData: false
};

appData.imperativeExpesesData.a1 = a2;
appData.imperativeExpesesData.a3 = a4;
alert('Бюджет пользователя на 1 день: ' + (Math.round((appData.moneyData)/30)) + ' рублей'); //Без вычета обязательных расходов

console.log('Бюджет: ', appData.moneyData);
console.log('Дата: ', appData.timeData);
console.log('Расходы: ', appData.imperativeExpesesData);
console.log('Сбережения: ', appData.savingsData);


