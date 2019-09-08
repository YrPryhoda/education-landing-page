window.onload = function () {
let box = document.getElementById('box'),
btn = document.getElementsByTagName('button'),
circle = document.getElementsByClassName('circle'),
queries = document.querySelectorAll('.heart'),
firstQuery = document.querySelector('.heart'),
wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'green';
btn[1].style.borderRadius = '100%';
circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

for (let i = 0; i<queries.length; i++) {
queries[i].style.backgroundColor = 'blue';
}
queries.forEach (function(item, i, array) {
    // item - элемент, i - номер, array - массив
    item.style.border = '3px solid red';
}); 

let div = document.createElement('div'),
text = document.createTextNode('Тут создан текст');

div.classList.add('black');
//document.body.appendChild(div); //в конец
//wrapper.appendChild(div);
document.body.insertBefore(div, circle[0]); //2 аргумента, что и перед чем
document.body.removeChild(circle[1]);
wrapper.removeChild(queries[1]);
document.body.replaceChild(btn[1], circle[1]);
//div.innerHTML='<h1>text</h1>';
div.textContent='<h1>text</h1>';

};