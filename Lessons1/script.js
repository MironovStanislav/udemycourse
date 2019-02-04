'use strict';

let money = +prompt('Ваш бюджет на месяц?', ''),
time = prompt("Введите дату в формате YYYY-MM-DD"),
expenses = prompt("Введите обязательную статью расходов в этом месяце", ''),
summ = prompt ("Во сколько обойдется?", '');

let expensesData = { //Расходы
    imperativeExpesesData: expenses + ': ' + summ,
    ExpesesSumm: summ
};

let appData = { //Бюджет
    moneyData: money,
    timeData: time,
    imperativeExpesesData: expensesData.imperativeExpesesData, //объект с обязательными расходами
    optionalData: '',
    otherProfitData: [],
    savingsData: false
};

alert('Бюджет пользователя на 1 день: ' + (Math.round((appData.moneyData-expensesData.ExpesesSumm)/30)) + ' рублей');

console.log('Бюджет: ', appData.moneyData);
console.log('Дата: ', appData.timeData);
console.log('Расходы: ', appData.imperativeExpesesData);
console.log('Сбережения: ', appData.savingsData);


