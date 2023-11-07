import React from "react";
import Header from "./views/Header/Header";
import Main from "./views/Main/Main";
import Filter from "./views/Filter/Filter";
import Footer from "./views/Footer/Footer";
import { mockData } from "./data/mock-data";

export const AppContext = React.createContext(null);

function App() {
  const [itemList, setItemList] = React.useState([]);
  const [inputTaskAddValue, setInputTaskAddValue] = React.useState("");
  const [inputFilterValue, setInputFilterValue] = React.useState("");

  React.useEffect(() => {
    if (itemList.length === 0) {
      setItemList(mockData);
    }

    //ЗДЕСЬ В ТУПУЮ НАЧИНАЮ ЛОМИТЬСЯ НА ЛОКАЛСТОРОДЖ И ЕСЛИ ТАМ ЧЧТОТО ЕСТЬ
    //ТО ПОЛНОСТЬЮ ПЕРЕЗАПИСЫВАЮ itemList
  }, []);

  //CREATE ITEM
  const onAddClick = () => {
    if (inputTaskAddValue) {
      //формирую дату время
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, "0");
      const day = String(currentDate.getDate()).padStart(2, "0");
      const hours = String(currentDate.getHours()).padStart(2, "0");
      const minutes = String(currentDate.getMinutes()).padStart(2, "0");
      const formattedDate = `${day}.${month}.${year} ${hours}:${minutes}`;

      //формирую id
      const id =
        itemList.length === 0
          ? 1 // Если массив пустой, начнем с 1
          : Math.max(...itemList.map((item) => item.id)) + 1;

      const newItem = {
        id: id,
        titleTask: inputTaskAddValue,
        date: formattedDate,
        status: "new",
      };

      setItemList((prevItemList) => [...prevItemList, newItem]);

      setInputTaskAddValue("");
    } else {
      // 2. При пустом инпуте и нажатии кнопки Add
      // выдается сообщение с просьбой заполнить поле;
      alert(
        "Ваше текстовое поле пустое, перед добавлением его необходимо заполнить!"
      );
    }

    // 9. Данные списка должны сохраняться в Local Storage
    //(после перезагрузки страницы, все данные должны остаться на месте).

    console.log("inputTaskAddValue", inputTaskAddValue);
  };

  //UPDATE ITEM
  const updateItemById = (id, updatedItem) => {
    const updatedItems = itemList.map((item) => {
      if (item.id === id) {
        // Если id совпадает, обновляем элемент
        return { ...item, ...updatedItem };
      }
      return item;
    });

    setItemList(updatedItems);
  };

  const onEditClick = () => {
    alert("was click onEditClick function in app.js");
  };

  const onDoneClick = (id, newItem) => {
    updateItemById(id, newItem);
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
    alert("was change onSortByDateClick function in app.js");
  };

  return (
    <>
      <AppContext.Provider
        value={{
          inputFilterValue,
          setInputFilterValue,
          inputTaskAddValue,
          setInputTaskAddValue,
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
          <Filter />
          <Main
            onDoneClick={onDoneClick}
            onDeleteClick={onDeleteClick}
            itemList={itemList}
          />
          <Footer />
        </div>
      </AppContext.Provider>
    </>
  );
}

export default App;
