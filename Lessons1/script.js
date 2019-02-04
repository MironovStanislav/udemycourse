'use strict';

var money = +prompt('Ваш бюджет на месяц?', '');
var time = prompt("Введите дату в формате YYYY-MM-DD");

var expenses = prompt("Введите обязательную статью расходов в этом месяце", '');
var summ = prompt ("Во сколько обойдется?", '');

var expensesData = {
    imperativeExpesesData: expenses + ': ' + summ,
    ExpesesSumm: summ
};

var appData = {
    moneyData: money,
    timeData: time,
    imperativeExpesesData: expensesData.imperativeExpesesData, //объект с обязательными расходами
    optionalData: '',
    otherProfitData:'',
    savingsData: false
};

alert('Бюджет пользователя на 1 день: ' + (Math.round((appData.moneyData-expensesData.ExpesesSumm)/30)) + ' рублей');

console.log('Бюджет: ', appData.moneyData);
console.log('Дата: ', appData.timeData);
console.log('Расходы: ', appData.imperativeExpesesData);
console.log('Сбережения: ', appData.savingsData);


