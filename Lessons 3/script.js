'use strict';

let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}

start();

let appData = { //Бюджет
    moneyData: money,
    timeData: time,
    expenses: {}, //объект с обязательными расходами
    optionalExpesesData: {},
    income: [],
    savingsData: true
};


function chooseExpenses() {
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
}

chooseExpenses();

function calculationBudget() {
    appData.moneyPerDay =  Math.round((appData.moneyData)/30);
    alert('Бюджет пользователя на 1 день: ' + appData.moneyPerDay + ' рублей'); //Без вычета обязательных расходов
}
calculationBudget();

function detectLevel(x) {
    if(appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if(appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка!");
    }
}

detectLevel(appData.moneyPerDay);

function checkSavings() {
    if(appData.savingsData == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}

checkSavings();

function chooseOptExpenses() {
    for(let i = 1; i <= 3; i++){
        let a = prompt("Статья необязательных расходов?", '');
        appData.optionalExpesesData[i] = a;
    }
}

chooseOptExpenses();

console.log('Бюджет: ', appData.moneyData);
console.log('Дата: ', appData.timeData);
console.log('Расходы: ', appData.expenses);
console.log('Сбережения: ', appData.savingsData);


