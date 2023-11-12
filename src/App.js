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

  //#region CREATE ITEM
  const onAddClick = () => {
    console.log(inputTaskAddValue.trim().length);
    if (inputTaskAddValue && inputTaskAddValue.trim().length > 0) {
      //??? формирую дату создания
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, '0');
      const day = String(currentDate.getDate()).padStart(2, '0');
      const hours = String(currentDate.getHours()).padStart(2, '0');
      const minutes = String(currentDate.getMinutes()).padStart(2, '0');
      const seconds = String(currentDate.getSeconds()).padStart(2, '0');
      const dataCreate = `${day}.${month}.${year} / ${hours}:${minutes}:${seconds}`;
      //??? формирую id
      const id = itemList.length === 0 ? 1 : Math.max(...itemList.map(item => item.id)) + 1;

      //новый объект на обновление
      const newItem = {
        id: id,
        titleTask: inputTaskAddValue,
        date: dataCreate,
        status: 'new',
      };

      //???
      setItemList(prevItemList => [...prevItemList, newItem]);
    } else {
      alert('Поле ввода пустое или с пробелами, необходимо добавить содержимое!');
    }
    setInputTaskAddValue('');
  };
  //#endregion CREATE ITEM

  //#region READ ITEMS
  //??? инициализация
  React.useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem('itemList'));

    if (localStorageData && localStorageData.length > 0) {
      setItemList(localStorageData);
    } else {
      setItemList(prevItemList => (prevItemList.length === 0 ? mockData : prevItemList));
    }
  }, []);
  //#endregion READ ITEMS

  //#region UPDATE ITEM
  const updateItemById = (id, updatedItem) => {
    const newItem = itemList.map(item => {
      if (item.id === id) {
        //??? Если id совпадает, обновляем элемент
        return { ...item, ...updatedItem };
      }
      return item;
    });

    setItemList(newItem);
  };

  const onDoneClick = (id, updatedItem) => {
    updateItemById(id, updatedItem);
  };

  const onEditClick = (id, updatedItem) => {
    console.log('onEditClick', id, updatedItem);
    // updateItemById(id, updatedItem);
  };

  //??? обновление локалСтораж
  React.useEffect(() => {
    localStorage.setItem('itemList', JSON.stringify(itemList));
  }, [itemList]);
  //#endregion UPDATE ITEM

  //#region DELETE ITEM
  const onDeleteClick = idToRemove => {
    setItemList(prevItemList => prevItemList.filter(item => item.id !== idToRemove));
  };
  //#endregion DELETE ITEM

  //#region SORT
  const onSortByNameClick = () => {
    const sortedList = [...itemList].sort((a, b) => a.titleTask.localeCompare(b.titleTask));
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
    alert('onSortByStatusClick');
  };
  //#endregion SORT

  //#region FILTER
  const onFilterTextChange = () => {
    const filteredList = itemList.filter(item =>
      item.text.toLowerCase().includes(inputFilterValue.toLowerCase())
    );
    setItemList(filteredList);
  };
  //#endregion FILTER

  return (
    <>
      <AppContext.Provider
        value={{
          onAddClick,
          onDoneClick,
          onEditClick,
          onDeleteClick,
          setInputFilterValue,
          setInputTaskAddValue,
          onSortByNameClick,
          onSortByDateClick,
          onSortByStatusClick,
          onFilterTextChange,
        }}
      >
        <div className='wrapper'>
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
