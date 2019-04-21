let money, time;

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
    savings: true
};

function chooseExpenses () {
    for (let i = 0; i < 2; i++) {
        let expensesWhat = 
        prompt('Введите обязательную статью расходов в этом месяце', ''),
            expensesHowMuch = +prompt('Во сколько обойдется?', '');
    
        if ( (typeof(expensesWhat)) === 'string' 
            && (typeof(expensesWhat)) != null 
            && (typeof(expensesHowMuch)) != null && expensesWhat != ''
            && expensesHowMuch != '' && expensesWhat.length < 50 ) {
            appData.expenses[expensesWhat] = expensesHowMuch;
            console.log('Done!');
        } else {
            expensesWhat = 
            prompt('Введите обязательную статью расходов в этом месяце', '');
            expensesHowMuch = +prompt('Во сколько обойдется?', '');
        }
    }
}

chooseExpenses();

function detectDayBudget () {
    appData.moneyPerDay = +((appData.moneyData / 30).toFixed()); // (1) для 1 зн

    alert('Ежедневный бюджет: ' + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel () {
    if (appData.moneyPerDay < 100) {
        console.log('You are gay!');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('You are regular guy!');
    } else if (appData.moneyPerDay > 2000) {
        console.log('Wow, you are such a handsome boi! Fuck me!');
    } else {
        console.log ('Die pls!');
    }
}

detectLevel();

function checkSavings () {
    if (appData.savings == true) {
        let save = +prompt('Какова сумма накоплений?', ''),
            percent = +prompt('Под какой процент?', '');

        appData.monthIncome = save / 100 / 12 * percent;
        
        alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
    }
}

checkSavings();

function chooseOptExpenses () {
    for (let i = 1; i < 4; i++) {
        let optExpensesWhat = prompt('Статья необязательных расходов?', '');
        while (optExpensesWhat == '' || optExpensesWhat == null 
            || typeof(optExpensesWhat) != 'string') {
            optExpensesWhat = prompt('Статья необязательных расходов?', '');
        }

        appData.optionalExpenses[i] = optExpensesWhat;
    }
}

chooseOptExpenses();

console.log(appData);