var money,
    time,
    expensesWhat,
    expensesHowMuch,
    dailyMoney;

money = +prompt('Ваш бюджет на месяц?', '');
time = prompt('Введите дату в формате YYYY-MM-DD', '');
expensesWhat = prompt('Введите обязательную статью расходов в этом месяце', '');
expensesHowMuch = +prompt('Во сколько обойдется?', '');

let appData = {
    moneyData: money,
    timeData: time,
    expenses: {
        [expensesWhat]: expensesHowMuch
    },
    optionalExpenses: undefined,
    income: undefined,
    savings: false
};

dailyMoney = (money - expensesHowMuch) / 30;

alert('Бюджет на 1 день: ' + dailyMoney);