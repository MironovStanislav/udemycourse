'use strict';

let btnStart,
    budgetValue,
    daybudgetValue,
    levelValue,
    expensesValue,
    optionalexpensesValue,
    incomeValue,
    monthsavingsValue,
    yearsavingsValue,
    expensesItem,
    optionalBtn,
    calculateBtn,
    optionalexpensesItem;

btnStart = document.getElementById('start');
console.log(btnStart);

budgetValue = document.getElementsByClassName('budget-value')[0];
console.log(budgetValue);

daybudgetValue = document.getElementsByClassName('daybudget-value')[0];
console.log(daybudgetValue);

levelValue = document.getElementsByClassName('level-value')[0];
console.log(levelValue);

expensesValue = document.getElementsByClassName('expenses-value')[0];
console.log(expensesValue);

optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0];
console.log(optionalexpensesValue);

incomeValue = document.getElementsByClassName('income-value')[0];
console.log(incomeValue);

monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0];
console.log(monthsavingsValue);

yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0];
console.log(yearsavingsValue);

expensesItem = document.querySelectorAll('.expenses-item');
console.log(expensesItem);

optionalBtn = document.getElementsByTagName('button')[0];
console.log(optionalBtn);

calculateBtn = document.getElementsByTagName('button')[2];
console.log(calculateBtn);

optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item');
console.log(optionalexpensesItem);

let incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');
/*
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
    savingsData: true,
    chooseExpenses: function () {
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
        }
    },
    calculationBudget: function () {
        appData.moneyPerDay =  Math.round((appData.moneyData)/30);
        alert('Бюджет пользователя на 1 день: ' + appData.moneyPerDay + ' рублей');
    },
    detectLevel: function (x) {
        if(appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if(appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка!");
        }
    },
    checkSavings: function () {
        if(appData.savingsData == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");

            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for(let i = 1; i <= 3; i++){
            let a = prompt("Статья необязательных расходов?", '');
            appData.optionalExpesesData[i] = a;
        }
    },
    chooseIncome: function () {
        let items = prompt("Что принесёт дополнительный доход? (Перечислите через запятую)", "");

        while(typeof(items) != 'string' || items == '' || typeof(items) == null) {
            items = prompt("Что принесёт дополнительный доход? (Перечислите через запятую)", "");
        }

        appData.income = items.split(', ');
        appData.income.push(prompt("Может что-то ещё?"));
        appData.income.sort();

        appData.income.forEach(function (item, i, arr) {
            alert("Способы доп. заработка: " + (i+1) + " - " + item);
        });

    }
};

for(let key in appData) {
    console.log("Наша программа включает в себя данные: " + key);
}
*/



