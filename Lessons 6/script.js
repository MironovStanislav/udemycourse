'use strict';

let btnStart = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.querySelectorAll('.expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalexpensesBtn = document.getElementsByTagName('button')[1],
    calculateBtn = document.getElementsByTagName('button')[2],
    optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;

expensesBtn.disabled = true;
optionalexpensesBtn.disabled = true;
calculateBtn.disabled = true;

btnStart.addEventListener('click', function (e) {
    expensesBtn.disabled = false;
    optionalexpensesBtn.disabled = false;
    calculateBtn.disabled = false;

    time = prompt("Введите дату в формате YYYY-MM-DD");
    money = +prompt('Ваш бюджет на месяц?', '');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
    appData.moneyData = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.addEventListener('click', function () {
    let sum = 0;

    for(let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value, //prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = expensesItem[++i].value; //prompt ("Во сколько обойдется?", '');

        if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != null && a.length < 50 ) {
            console.log("done");
            appData.expenses[a] = b;
            sum += +b;
        } else {
            console.log ("error");
            i--;
        }
    }

    expensesValue.textContent = sum;
});

optionalexpensesBtn.addEventListener('click', function () {
    for(let i = 0; i < optionalexpensesItem .length; i++){
        let opt = optionalexpensesItem[i].value;
        appData.optionalExpesesData[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpesesData[i] + ' ';
    }
});

calculateBtn.addEventListener('click', function () {

    if(appData.moneyData != undefined) {

        appData.moneyPerDay =  Math.round((appData.moneyData - +expensesValue.textContent)/30);
        dayBudgetValue.textContent = appData.moneyPerDay;

        if(appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка";
        } else if(appData.moneyPerDay > 2000) {
            levelValue.textContent = "Высокий уровень достатка";
        } else {
            levelValue.textContent = "Произошла ошибка!";
        }
    } else {
        dayBudgetValue.textContent = "Произошла ошибка!";
    }
});

incomeItem.addEventListener('change', function () {
    let items = incomeItem.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function() {
    if(appData.savingsData == true) {
        appData.savingsData = false;
    } else {
        appData.savingsData = true;
    }
});

sumValue.addEventListener('input', function () {
   if(appData.savingsData == true){
   let  sum = +sumValue.value,
        percent = +percentValue.value;

    appData.monthIncome = sum/100/12*percent;
    appData.yearIncome = sum/100*percent;

    monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
   }
});

percentValue.addEventListener('input', function () {
    if(appData.savingsData == true){
        let  sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = { //Бюджет
    moneyData: money,
    timeData: time,
    expenses: {}, //объект с обязательными расходами
    optionalExpesesData: {},
    income: [],
    savingsData: false
};





