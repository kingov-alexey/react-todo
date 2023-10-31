import Header from './views/Header/Header';
import Main from './views/Main/Main';
import { useContext, useState, useEffect } from 'react';

function App() {
  // App.jsx - содержит состояние и всю логику, рендерит все приложение

  // Header.jsx - рендерит хэдэр и его элементы
  // Main.jsx - рендерит тело и его элементы
  // ItemList.jsx - рендерит список элементов

  // props:
  // itemList: Item[];
  const [itemList, setItemList] = useState([]);
  // onDoneClick: funcion;
  const onDoneClick = () => {
    alert('onDoneClick');
    // 4. По нажатии кнопки выполнения,
    // элемент списка должен подсветиться выполненным;
  };

  // onDeleteClick: function;
  const onDeleteClick = () => {
    alert('onDeleteClick');
    // 5. По нажатии кнопки удаления,
    // элемент списка должен быть удален из списка;
  };

  // 1. При заполненном инпуте и нажатии кнопки Add создается новая запись в списке со значением инпута, после чего инпут очищается;
  // 2. При пустом инпуте и нажатии кнопки Add выдается сообщение с просьбой заполнить поле;

  // 3. Элемент списка должен содержать
  // текст, дату (рандомную), кнопку выполнения и кнопку удаления;
  // КНОПКУ РЕДАКТИРОВАНИЯ

  // 6. Добавить сортировку списка по тексту;
  // 7. Добавить сортировку списка по дате;
  // 8. Добавить фильтр списка по тексту;

  // 9. Данные списка должны сохраняться в Local Storage (после перезагрузки страницы, все данные должны остаться на месте).

  return (
    <>
      <div className='wrapper'>
        <Header />
        <Main onDoneClick={onDoneClick} />
      </div>
    </>
  );
}

export default App;
