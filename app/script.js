let money, time;

let startButton = document.querySelector('#start');
    
let budgetValue = document.querySelector('.budget-value'),
    dayBudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthsavingsValue = document.querySelector('.monthsavings-value'),
    yearsavingsValue = document.querySelector('.yearsavings-value');

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
    chooseSumValue = document.querySelector('.choose-sum'),
    choosePercentValue = document.querySelector('.choose-percent');

function start () {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}

start();

let appData = {
    moneyData: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let expensesWhat = 
            prompt('Введите обязательную статью расходов в этом месяце', ''),
                expensesHowMuch = +prompt('Во сколько обойдется?', '');
        
            if ( (typeof(expensesWhat)) === 'string' 
                || (typeof(expensesWhat)) != null 
                || (typeof(expensesHowMuch)) != null || expensesWhat != ''
                || expensesHowMuch != '' || expensesWhat.length < 50 ) {
                appData.expenses[expensesWhat] = expensesHowMuch;
                console.log('Done!');
            } else {
                expensesWhat = 
                prompt('Введите обязательную статью расходов в этом месяце', '');
                expensesHowMuch = +prompt('Во сколько обойдется?', '');
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = +((appData.moneyData / 30).toFixed()); // (1) для 1 знака

        alert('Ежедневный бюджет: ' + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log('You are gay!');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('You are regular guy!');
        } else if (appData.moneyPerDay > 2000) {
            console.log('Wow, you are such a handsome boi! Fuck me!');
        } else {
            console.log ('Die pls!');
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?', ''),
                percent = +prompt('Под какой процент?', '');
    
            appData.monthIncome = save / 100 / 12 * percent;
            
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i < 4; i++) {
            let optExpensesWhat = prompt('Статья необязательных расходов?', '');
            while (optExpensesWhat == '' || typeof(optExpensesWhat) == null 
                || typeof(optExpensesWhat) != 'string') {
                optExpensesWhat = prompt('Статья необязательных расходов?', '');
            }
    
            appData.optionalExpenses[i] = optExpensesWhat;
        }
    },
    chooseIncome: function() {
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        if (typeof(items) === 'string' || items != '' || typeof(items) != null) {
            appData.income = items.split(', ');
            appData.income.push(prompt('Может что-то еще?', ''));
            appData.income.sort();
            appData.income.forEach (function (item, i) {
                console.log('Способы доп. заработка: ' + (i + 1) + ' - ' + item);
            });
        }
    }
};

for (let key in appData) {
    console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
}