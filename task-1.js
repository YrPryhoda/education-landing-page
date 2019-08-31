"use strict";
let money, time;

function start() {
  money = +prompt("Ваш бюджет на месяц?", "15000");
  time = prompt("Введите дату в формате YYYY-MM-DD?", "2019-08-21");

  while (isNaN(money) || money == null || money == '') {
    // isNan відает true, если в переменной не число
    money = +prompt("Ваш бюджет на месяц?", "15000");
  }
}
start();

let appData = {
  money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  saving: true,
  chooseAnswer: function () {
    let i = 0;
    for (i = 0; i < 2; i++) {
      let quastion = ask(),
        answr = answer();
      if ((typeof (quastion) === 'string') && (typeof (quastion) != null) &&
        (typeof (answr) === 'string') && (typeof (answr) != null) &&
        (quastion != '') && (answr != '') && (answr.length < 50)) {
        console.log('yess');
        this.expenses[quastion] = answr;
      } else {
        i = i - 1;
      }
    } //for
  }, // function
  dayBudget: function (param) {
    let costs = 0;
    for (let key in this.expenses) {
      costs += +this.expenses[key];
    }
    this.moneyPerDay = ((Number(param) - costs) / 30).toFixed(2);
    return this.moneyPerDay;
  },
  detectLevel: function (param) {
    switch (true) {
      case param < 200:
        alert(`Ваш бюджет на день: ${param}. Это очень скромно`);
        break;
      case param < 400:
        alert(`Ваш бюджет на день: ${param}. Это неплохо`);
        break;
      case param > 400:
        alert(`Ваш бюджет на день: ${param}. Да ты мажор`);
        break;
      case param == 0:
      default:
        alert('Что то пошло не так');
        break;
    }
  },
  mathSavings: function () {
    if (this.saving) {
      let summ = +prompt("Какая сумма депозита?", '2000'),
        percent = +prompt('Под какой процент?', "3");

      this.monthMoneyIncome = summ / 100 / 12 * percent;
      alert(`Ваш ежимесячный доход от депозита равен ${this.monthMoneyIncome}`);
    }
  },
  getOptExpences: function () {
    for (let i = 1; i < 4; i++) {
      let exp = prompt("Необязательная статья расходов?", "");
      let ansExp = prompt("Сколько ?", "540");
      this.optionalExpenses[i] = ansExp;
    }
  },
  chooseIncome: function() {
  let items = prompt('Что принесет дополнительный доход? через запятую', 'аренда, поднаем');
  this.income = items.split(', '); //строка в массив
  let psh;
  while (!isNaN(psh) || psh == null || psh == '') {
  psh = prompt('Может что то еще?', '');
  }
  console.log(psh);
  this.income.push(psh);
  this.income.sort();
  let str = 'Дополнительный метод заработка ';
  this.income.forEach ((item, i, arr) => str +=  `${i+1}: ${item}; ` );
  alert (str);
}
};
let message = 'Наша программа включает следующие данные: \n';
for ( let key in appData) {
  (message += `${key} \n` );
}
console.log(message);
/* appData.chooseAnswer();
appData.dayBudget(appData.money);
appData.detectLevel(appData.moneyPerDay);
appData.mathSavings();
appData.getOptExpences() ;
appData.chooseIncome() ; */
<<<<<<< HEAD

function ask() {
  return prompt("Введите обязательную статью расходов в этом месяце?", "");
}

function answer() {
  return prompt('Во сколько обойдется?', '1200');
}


console.log( "Ёжик" > "яблоко" );
=======

function ask() {
  return prompt("Введите обязательную статью расходов в этом месяце?", "");
}

function answer() {
  return prompt('Во сколько обойдется?', '1200');
}
>>>>>>> master
