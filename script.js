let money,
    time;

money = +prompt('Ваш бюджет на месяц?', '');
time = prompt('Введите дату в формате YYYY-MM-DD', '');

let expensesWhat1 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    expensesHowMuch1 = +prompt('Во сколько обойдется?', ''),
    expensesWhat2 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    expensesHowMuch2 = +prompt('Во сколько обойдется?', '');

let appData = {
    moneyData: money,
    timeData: time,
    expenses: {
        [expensesWhat1]: expensesHowMuch1,
        [expensesWhat2]: expensesHowMuch2
    },
    optionalExpenses: {},
    income: [],
    savings: false
};

console.log(appData);
alert(appData.moneyData / 30);