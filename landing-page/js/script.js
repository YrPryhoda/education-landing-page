'use strict';
//загрузка DOM дерева
window.addEventListener('DOMContentLoaded', function () {
//обьявление всех блоков статей,  блока навигации, массива кнопок навигации
let tab, info, tabContent, temp;

enterPrimaryData('.info-header-tab', '.info-header', '.info-tabcontent'); 

function enterPrimaryData (arrButtons, parrentBtnDiv, arrArticles) {
    temp = arrButtons.slice(1, arrButtons.length);
    tab = document.querySelectorAll(arrButtons);
    info = document.querySelector(parrentBtnDiv);
    tabContent = document.querySelectorAll(arrArticles);
}
console.log(temp);
// функция для скрытия всех статей
    function hideTabContent (a) {
        for (let i=a; i<tabContent.length; i++) { //цикл по всех элементах массива tabContent статей
            tabContent[i].classList.remove('show'); // по умолчанию его нет, добавляется при переключении
            tabContent[i].classList.add('hide'); // всем элементам кроме первого дали класс display:none
        }
    }
    hideTabContent(1); // всем элементам кроме первого дали класс display:none
    function showTabContent (b) { // условие если таб скрыт, показать
        if(tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }
    info.addEventListener('click', function(event) { 
        // событие при нажатии на любую кнопку навигации, открывать соответственную статью 
        let target = event.target; // положение мышки
        if(target && target.classList.contains(`${temp}`)) { //если мышка на блоке навигации и в часности на кнопке
          for (let i=0; i<tab.length; i++){ // цикл от 0 до конца статей
              if(target == tab[i]) { // если мышка на текущей кнопке, то показывать соответственную статью
                  hideTabContent(0);
                  showTabContent(i); // показываем соответственную статью
                  break; // прерываем, чтобы цикл не шел до конца
              }
          }  
        }
    });




}); //загрузка страницы