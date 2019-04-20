let money,
    time;

money = +prompt('Ваш бюджет на месяц?', '');
time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    moneyData: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let expensesWhat = prompt('Введите обязательную статью расходов в этом месяце', ''),
        expensesHowMuch = +prompt('Во сколько обойдется?', '');

    if ( (typeof(expensesWhat)) === 'string' && (typeof(expensesWhat)) != null 
        && (typeof(expensesHowMuch)) != null && expensesWhat != ''
        && expensesHowMuch != '' && expensesWhat.length < 50 ) {
        appData.expenses[expensesWhat] = expensesHowMuch;
        console.log('Done!');
    } else {
        expensesWhat = prompt('Введите обязательную статью расходов в этом месяце', '');
        expensesHowMuch = +prompt('Во сколько обойдется?', '');
    }
}

appData.moneyPerDay = appData.moneyData / 30;

alert('Ежедневный бюджет: ' + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log('You are gay!');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('You are regular guy!');
} else if (appData.moneyPerDay > 2000) {
    console.log('Wow, you are such a handsome boi! Fuck me!');
} else {
    console.log ('Die pls!');
}