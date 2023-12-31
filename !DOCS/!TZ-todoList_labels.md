Todo List v1

+++ Написать Todo List на React
+++ без использования сторонних библиотек (hooks useState)
+++ с использованием классовых компонентов. (требование поменялось, с использование функциональных компонентов)

Acceptance Criteria:

+++ 1. При заполненном инпуте и нажатии кнопки Add создается новая запись в списке со значением инпута, после чего инпут очищается;
+++ 2. При пустом инпуте и нажатии кнопки Add выдается сообщение с просьбой заполнить поле;
+++ 3. Элемент списка должен содержать текст, дату (рандомную), кнопку выполнения и кнопку удаления;
+++ 4. По нажатии кнопки выполнения, элемент списка должен подсветиться выполненным;
+++ 5. По нажатии кнопки удаления, элемент списка должен быть удален из списка;
+++ 6. Добавить сортировку списка по тексту;
+++ 7. Добавить сортировку списка по дате;
+++ 8. Добавить фильтр списка по тексту;
+++ 9. Данные списка должны сохраняться в Local Storage (после перезагрузки страницы, все данные должны остаться на месте).

<!-- по структуре по ТЗ все соответсвует, но так как применяется подход модульного CSS глубина каталогов больше   -->

+++ Structure:
/src
/index.js
/App.jsx
/views
Header.jsx
Main.jsx
/components
ItemList.jsx
Item.jsx
Button.jsx
Input.jsx
/data
mock-data.js

======================
+++ App.jsx - содержит состояние и всю логику, рендерит все приложение

+++ Header.jsx - рендерит хэдэр и его элементы
+++ Main.jsx - рендерит тело и его элементы
+++ ItemList.jsx - рендерит список элементов

+++ props:
+++ itemList: Item[];
+++ onDoneClick: funcion;
+++ onDeleteClick: function;

+++ Item.jsx - рендерит элемент списка
+++ props:
+++ id: string;
+++ text: string;
+++ date: string;
+++ onDoneClick: funcion;
+++ onDeleteClick: function;

+++ Button.jsx - рендерит разные кнопки
+++ props:
+++ className: string;
+++ text: string;
+++ onClick: function;

+++ Input.jsx - рендерит разные инпуты
+++ props:
+++ className: string;
+++ placeholder: string;
+++ value: string;
+++ onChange: function;

+++ mock-data.js - фейковые данные

<!-- ^^^ ЗАМЕТКИ ^^^ -->

# other requirements

- редизайн
- обогощение функционалом (модальное окно info, модальное окно редактирования, модальное окно About )

# TASKS

https://drive.google.com/drive/folders/1rAPdXMHH2rljX6vU62BJ0bEyookGYHhQ

# LAYOUT

https://www.figma.com/file/iPFjNcsEUIAeEEqblSrKoX/react-todo?type=design&node-id=0%3A1&mode=design&t=K6TrcTsVw37vsJAr-1

# FOR SKILLS

React docs https://react.dev/learn
MERN start typescript https://habr.com/ru/articles/653981/

# TIME TRACKER

2 часа структура
4 часа верстка
4 часа прокинул контекст, проверил стейт
8 часов редизайн (создание макета и верстка)

♾ ... редизайн, документирование, рефакторинг, тестирование
