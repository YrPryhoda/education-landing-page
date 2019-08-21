'use strict';
let money = + prompt("Ваш бюджет на месяц?", "15000");
let time = prompt("Введите дату в формате YYYY-MM-DD?", "2019-08-21");

let appData = {
    money,
    timeData: time,
    expenses: {

    },
    optionalExpenses: {
    },
    income: [],
    saving: false,
};
function ask() {
    return prompt("Введите обязательную статью расходов в этом месяце?", "");
}
function answer () {
    return prompt('Во сколько обойдется?','1200');
}
let i=0;
/* while (i<2) {
  let quastion = ask(),
  answr  = answer();
  appData.expenses[quastion] = answr;  
} */
for( i=0; i<2; i++) {
  let quastion = ask(),
  answr  = answer();
if(  (typeof(quastion)=== 'string') &&
     (typeof(quastion) != null) &&
     (typeof(answr)=== 'string') &&
     (typeof(answr) != null) &&
     (quastion != '') &&
     (answr != '') &&
     (answr.length < 50) )      { 
  console.log ('yess');
  appData.expenses[quastion] = answr;  
    } else {}
}
let costs=0;
for (let key in appData.expenses) {
  costs +=  +appData.expenses[key];
}

appData.moneyPerDay = ( Number(appData.money) - costs ) / 30;

console.log(costs);
console.log(appData);
console.log(appData.moneyPerDay);
switch (true) {
  case appData.moneyPerDay < 100:
      alert(`Ваш бюджет на день: ${appData.moneyPerDay}. Это очень скромно`);
      break;
  case appData.moneyPerDay < 300:
      alert(`Ваш бюджет на день: ${appData.moneyPerDay}. Это неплохо`);
      break;
  case appData.moneyPerDay > 300:
      alert(`Ваш бюджет на день: ${appData.moneyPerDay}. Да ты мажор`);
      break;
  case appData.moneyPerDay == 0:
  default:
    alert('Что то пошло не так');
    break;
    }



