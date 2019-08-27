'use strict';
let soldier = {
    health: 400,
    armor: 200,
    size: 150,
};
let objectNew = {};
Object.assign(objectNew, soldier);
( soldier === objectNew) ? console.log(true) : console.log(false);

function check(param) {
    for (let key in param) {
                if (key == 'size') {
            return (param[key]);
        }  continue;
    }
}
let a = check(soldier);
if (a === undefined) {
console.log('функция работает'); } else { console.log(a);}

let schedule = {
    '6:00': 'nothing',
    '6:20': 'nothing',
    '7:20': 'nothing',
    '8:20': 'nothing',
    '8:30': 'get up'
};
function isEmpty (param) {
    for (let key in param) {
        if (param[key] == 'get up') {
        return false; } 
    }
}
let b = isEmpty(schedule);
console.log(b);

let salaries = {
John: 100,
Ann: 160,
Pete: 130,
};
let summ = 0;
for (let key in salaries) {
    summ += salaries[key];
    
}
console.log(summ);

let menu = {
    width: 200,
    height: 300,
    title: 'my menu'
};
function multiplyNumeric(param) {
    for (let key in param) {
        if (typeof(param[key]) == Number) {
            param[key] *= 2;
        } continue;
    }
}
console.log(menu);
multiplyNumeric(menu);
console.log(menu);
