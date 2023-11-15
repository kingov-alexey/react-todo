import React from 'react';
import Header from './views/Header/Header';
import Main from './views/Main/Main';
import Filter from './views/Filter/Filter';
import Footer from './views/Footer/Footer';
import { mockData } from './data/mock-data';

export const AppContext = React.createContext(null);

function App() {
  const [itemList, setItemList] = React.useState([]);
  const [inputTaskAddValue, setInputTaskAddValue] = React.useState('');
  const [inputFilterValue, setInputFilterValue] = React.useState('');
  const [inputEditValue, setInputEditValue] = React.useState('');
  const [modalEditIsOpen, setModalEditIsOpen] = React.useState(false);
  const [modalAlertIsOpen, setModalAlertIsOpen] = React.useState(false);

  //#region CREATE ITEM
  const onAddClick = () => {
    if (inputTaskAddValue && inputTaskAddValue.trim().length > 0) {
      // формирую дату и время
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, "0");
      const day = String(currentDate.getDate()).padStart(2, "0");
      const hours = String(currentDate.getHours()).padStart(2, "0");
      const minutes = String(currentDate.getMinutes()).padStart(2, "0");
      const seconds = String(currentDate.getSeconds()).padStart(2, "0");
      const dataCreate = `${day}.${month}.${year} / ${hours}:${minutes}:${seconds}`;

      // формирую уникальный идентификатор
      const id =
        itemList.length === 0
          ? 0
          : Math.max(...itemList.map((item) => item.id)) + 1;

      // формирую новый объект
      const newItem = {
        id: id,
        titleTask: inputTaskAddValue,
        date: dataCreate,
        status: "new",
      };

      // добавляю новый объект в массив объектов состояния itemList
      setItemList((prevItemList) => [...prevItemList, newItem]);
    } else {
      openModalAlert();
    }
    setInputTaskAddValue("");
  };
  //#endregion CREATE ITEM

  //#region READ ITEMS
  // инициализация, чтение элементов при первом запуске с помощью useEffect
  React.useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("itemList"));

    if (localStorageData && localStorageData.length > 0) {
      setItemList(localStorageData);
    } else {
      setItemList((prevItemList) =>
        prevItemList.length === 0 ? mockData : prevItemList
      );
    }
  }, []);
  //#endregion READ ITEMS

  //#region UPDATE ITEM
  const updateItemById = (id, newItem) => {
    const newItemList = itemList.map((item) =>
      item.id === id ? { ...item, ...newItem } : item
    );

    setItemList(newItemList);
  };

  const onDoneClick = (id, newItem) => {
    updateItemById(id, newItem);
  };

  const onEditClick = (id, newItem) => {
    updateItemById(id, newItem);
  };

  //??? обновление локалСтораж
  React.useEffect(() => {
    localStorage.setItem('itemList', JSON.stringify(itemList));
  }, [itemList]);
  //#endregion UPDATE ITEM

  //#region DELETE ITEM
  const onDeleteClick = (idToRemove) => {
    setItemList((prevItemList) =>
      prevItemList.filter((item) => item.id !== idToRemove)
    );
  };
  //#endregion DELETE ITEM

  //#region SORT
  const onSortByNameClick = () => {
    const sortedList = [...itemList].sort((a, b) =>
      a.titleTask.localeCompare(b.titleTask)
    );
    setItemList(sortedList);
  };

  const onSortByDateClick = () => {
    const sortedList = [...itemList].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateA - dateB;
    });
    setItemList(sortedList);
  };

  const onSortByStatusClick = () => {
    alert("onSortByStatusClick");
  };
  //#endregion SORT

  //#region FILTER
  const onFilterTextChange = () => {
    const filteredList = itemList.filter((item) =>
      item.text.toLowerCase().includes(inputFilterValue.toLowerCase())
    );
    setItemList(filteredList);
  };
  //#endregion FILTER

    //#region Modals
    const openModalEdit = () => {
      setModalEditIsOpen(true);
    };
  
    const closeModalEdit = () => {
      setModalEditIsOpen(false);
    };
  
    const openModalAlert = () => {
      setModalAlertIsOpen(true);
    };
  
    const closeModalAlert = () => {
      setModalAlertIsOpen(false);
    };
    //#endregion Modals



  return (
    <>
      <AppContext.Provider
        value={{
          inputEditValue, 
          setInputEditValue,
          modalEditIsOpen,
          closeModalEdit,
          openModalEdit,
          modalAlertIsOpen,
          closeModalAlert,
          openModalAlert,
          inputTaskAddValue,
          setInputTaskAddValue,
          onAddClick,
          onDoneClick,
          onEditClick,
          onDeleteClick,
          setInputFilterValue,
          onSortByNameClick,
          onSortByDateClick,
          onSortByStatusClick,
          onFilterTextChange,
        }}
      >
        <div className="wrapper">
          <Header />
          <Filter />
          <Main
            onDoneClick={onDoneClick}
            onEditClick={onEditClick}
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
