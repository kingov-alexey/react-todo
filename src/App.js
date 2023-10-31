import React from "react";
import Header from "./views/Header/Header";
import Main from "./views/Main/Main";

export const AppContext = React.createContext(null);

function App() {
  const [itemList, setItemList] = React.useState([
    { id: "111", titleTask: "do homework", date: "1990.18.05" },
    { id: "222", titleTask: "read a book", date: "1996.16.06" },
    { id: "333", titleTask: "fix laptop", date: "1990.18.05" },
    { id: "444", titleTask: "buy some milk", date: "1996.16.06" },
  ]);

  const onAddClick = () => {
    // 1. При заполненном инпуте и нажатии кнопки Add создается новая запись
    // в списке со значением инпута, после чего инпут очищается;
    // 2. При пустом инпуте и нажатии кнопки Add
    // выдается сообщение с просьбой заполнить поле;
    // 9. Данные списка должны сохраняться в Local Storage
    //(после перезагрузки страницы, все данные должны остаться на месте).
    alert("was click onAddClick function in app.js");

    // тест добавления элемента
    // Создайте новый элемент, который вы хотите добавить
    const newItem = {
      id: "555",
      titleTask: "clean the house",
      date: "1990.18.05",
    };

    // Используйте setItemList для обновления состояния, добавив новый элемент к текущему списку
    setItemList((prevItemList) => [...prevItemList, newItem]);
  };
  const onEditClick = () => {
    alert("was click onEditClick function in app.js");
  };

  const onDoneClick = () => {
    alert("was click onDoneClick function in app.js");
    // 4. По нажатии кнопки выполнения,
    // элемент списка должен подсветиться выполненным;
  };

  const onDeleteClick = () => {
    alert("was click onDeleteClick function in app.js");
    // 5. По нажатии кнопки удаления,
    // элемент списка должен быть удален из списка;
  };

  const onSortByNameClick = () => {
    alert("was click onSortByNameClick function in app.js");
    // 6. Добавить сортировку списка по тексту;
  };

  const onSortByDateClick = () => {
    // 7. Добавить сортировку списка по дате;
    alert("was click onSortByDateClick function in app.js");
  };

  const onFilterTextChange = () => {
    // 8. Добавить фильтр списка по тексту;
  };

  return (
    <>
      <AppContext.Provider
        value={{
          itemList,
          onAddClick,
          onEditClick,
          onDoneClick,
          onDeleteClick,
          onSortByNameClick,
          onSortByDateClick,
          onFilterTextChange,
        }}
      >
        <div className="wrapper">
          <Header />
          <Main />
        </div>
      </AppContext.Provider>
    </>
  );
}

export default App;
