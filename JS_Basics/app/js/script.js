'use strict';

let money, time;

let startButton = document.querySelector('#start');
    
let budgetValue = document.querySelector('.budget-value'),
    dayBudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthSavingsValue = document.querySelector('.monthsavings-value'),
    yearSavingsValue = document.querySelector('.yearsavings-value');

let expensesItem = document.querySelectorAll('.expenses-item'),
    btnExpenses = document.getElementsByTagName('button')[0],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    btnOptionalExpenses = document.getElementsByTagName('button')[1],
    btnCountBudget = document.getElementsByTagName('button')[2];

let yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent');

btnExpenses.style.backgroundImage = 'linear-gradient(336deg,#858585,#858585),linear-gradient(#fff,#fff)';
btnOptionalExpenses.style.backgroundImage = 'linear-gradient(336deg,#858585,#858585),linear-gradient(#fff,#fff)';
btnCountBudget.style.backgroundImage = 'linear-gradient(336deg,#858585,#858585),linear-gradient(#fff,#fff)';
btnExpenses.disabled = true;
btnOptionalExpenses.disabled = true;
btnCountBudget.disabled = true;

startButton.addEventListener('click', function() {
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    money = +prompt('Ваш бюджет на месяц?', '');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }

    appData.budgetData = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();

    
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1; //january - 0, december - 11
    dayValue.value = new Date(Date.parse(time)).getDate();

    btnExpenses.style.backgroundImage = 'linear-gradient(336deg,#ffbd75,#ff964b),linear-gradient(#fff,#fff)';
    btnOptionalExpenses.style.backgroundImage = 'linear-gradient(336deg,#ffbd75,#ff964b),linear-gradient(#fff,#fff)';
    btnCountBudget.style.backgroundImage = 'linear-gradient(336deg,#ffbd75,#ff964b),linear-gradient(#fff,#fff)';
    btnExpenses.disabled = false;
    btnOptionalExpenses.disabled = false;
    btnCountBudget.disabled = false;
});

btnExpenses.addEventListener('click', function() {
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let expensesWhat = expensesItem[i].value,
            expensesHowMuch = expensesItem[++i].value;
    
        if ( (typeof(expensesWhat)) === 'string' || (typeof(expensesWhat)) != null || (typeof(expensesHowMuch)) != null || expensesWhat != '' || expensesHowMuch != '' || expensesWhat.length < 50 ) {
            appData.expenses[expensesWhat] = expensesHowMuch;
            sum += +expensesHowMuch;
            console.log('Done!');
        } else {
            i = i - 1;
        }
    }

    expensesValue.textContent = sum;
    return expensesValue;
});

btnOptionalExpenses.addEventListener('click', function() {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let optExpensesWhat = optionalExpensesItem[i].value;
        if (optExpensesWhat != '' || typeof(optExpensesWhat) != null || typeof(optExpensesWhat) === 'string') {
            appData.optionalExpenses[i] = optExpensesWhat;
            optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
        } else {
            i = i - 1;
        } 
    }
});

btnCountBudget.addEventListener('click', function() {

    if (appData.budgetData != undefined) {
        dayBudgetValue.style.color = '#61a654';
        levelValue.style.color = '#61a654';
        appData.moneyPerDay = +(((appData.budgetData - +(expensesValue.textContent)) / 30).toFixed());
        dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = 'Минимальный уровень достатка';
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = 'Средний уровень достатка';
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = 'Высокий уровень достатка';
        } else {
            levelValue.textContent = 'Ошибка!';
        }
    } else {
        dayBudgetValue.style.color = 'red';
        dayBudgetValue.textContent = ('Ошибка');
        levelValue.style.color = 'red';
        levelValue.textContent = ('Ошибка');
    }
});

incomeItem.addEventListener ('input', function() {
    let items = incomeItem.value;
    if (typeof(items) === 'string' || items != '' || typeof(items) != null) {
        appData.income = items.split(', ');
        incomeValue.textContent = appData.income;
    }
});

checkSavings.addEventListener ('click', function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener ('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener ('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budgetData: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let key in appData) {
    console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
}