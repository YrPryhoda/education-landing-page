'use strict';
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
  expenses: { },
  optionalExpenses: {},
  income: [],
  saving: true,
};

function ask(){return prompt("Введите обязательную статью расходов в этом месяце?", ""); }
function answer() { return prompt('Во сколько обойдется?', '1200'); }

function chooseAnswer() {
  let i = 0;
  for (i = 0; i < 2; i++) {
    let quastion = ask(),
      answr = answer();
    if ((typeof (quastion) === 'string') &&
      (typeof (quastion) != null) &&
      (typeof (answr) === 'string') &&
      (typeof (answr) != null) &&
      (quastion != '') &&
      (answr != '') &&
      (answr.length < 50)) {
      console.log('yess');
      appData.expenses[quastion] = answr;
    } else {}
  }
}
chooseAnswer(); 

function dayBudget (param) {
let costs = 0;
for (let key in appData.expenses) {
  costs += +appData.expenses[key];
}
appData.moneyPerDay = ((Number(param) - costs) / 30).toFixed(2);
return appData.moneyPerDay;
}
dayBudget(appData.money);
function detectLevel (param) {
switch (true) {
  case  param < 200:
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
}
detectLevel(appData.moneyPerDay);

function mathSavings () {
  if(appData.saving) {
    let summ = + prompt( "Какая сумма депозита?", '2000'),
    percent = + prompt('Под какой процент?', "3");

    appData.monthMoneyIncome = summ / 100 / 12 * percent ;
    alert(`Ваш ежимесячный доход от депозита равен ${appData.monthMoneyIncome}`); 
  }
}
mathSavings () ;

function getOptExpences () {
  for (let i=1; i<4; i++) {
    let exp = prompt ("Неодязательная статься расходов?", "");
    let ansExp = prompt ("Сколько ?", "540");
    appData.optionalExpenses[i] = ansExp;

  }
}
getOptExpences() ;