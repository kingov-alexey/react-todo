import React from 'react';
import Header from './views/Header/Header';
import Main from './views/Main/Main';
import Filter from './views/Filter/Filter';
import Footer from './views/Footer/Footer';
import { mockData } from './data/mock-data';

export const AppContext = React.createContext(null);

function App() {
  const [itemList, setItemList] = React.useState([]);
  const [filteredItemList, setFilteredItemList] = React.useState(itemList);
  const [inputTaskAddValue, setInputTaskAddValue] = React.useState('');
  const [inputFilterValue, setInputFilterValue] = React.useState('');
  const [inputEditValue, setInputEditValue] = React.useState('');

  const [modalInfoIsOpen, setModalInfoIsOpen] = React.useState(false);
  const [modalAboutAppIsOpen, setModalAboutAppIsOpen] = React.useState(false);
  const [modalEditIsOpen, setModalEditIsOpen] = React.useState(false);

  const [sortDirection, setSortDirection] = React.useState('asc'); // 'asc' или 'desc'

  //#region CREATE ITEM
  const onAddClick = () => {
    if (inputTaskAddValue && inputTaskAddValue.trim().length > 0) {
      // формирую дату и время
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, '0');
      const day = String(currentDate.getDate()).padStart(2, '0');
      const hours = String(currentDate.getHours()).padStart(2, '0');
      const minutes = String(currentDate.getMinutes()).padStart(2, '0');
      const seconds = String(currentDate.getSeconds()).padStart(2, '0');
      const dataCreate = `${day}.${month}.${year} / ${hours}:${minutes}:${seconds}`;

      // формирую уникальный идентификатор
      const id = itemList.length === 0 ? 0 : Math.max(...itemList.map(item => item.id)) + 1;

      // формирую новый объект
      const newItem = {
        id: id,
        titleTask: inputTaskAddValue,
        date: dataCreate,
        status: 'new',
      };

      // добавляю новый объект в массив объектов состояния itemList
      setItemList(prevItemList => [...prevItemList, newItem]);
    } else {
      openModalInfo();
    }
    setInputTaskAddValue('');
  };
  //#endregion CREATE ITEM

  //#region READ ITEMS
  // инициализация, чтение элементов при первом запуске с помощью useEffect
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
  const updateItemById = (id, newItem) => {
    const newItemList = itemList.map(item => (item.id === id ? { ...item, ...newItem } : item));

    setItemList(newItemList);
  };

  const onDoneClick = (id, newItem) => {
    updateItemById(id, newItem);
  };

  const onEditClick = (id, newItem) => {
    updateItemById(id, newItem);
  };

  React.useEffect(() => {
    localStorage.setItem('itemList', JSON.stringify(itemList));
  }, [itemList]);
  //#endregion UPDATE ITEM

  //#region DELETE ITEM
  const onDeleteClick = id => {
    // const isDelete = window.confirm('Are you sure you want to delete this item?');
    // if (isDelete) {
    //   setItemList(prevItemList => prevItemList.filter(item => item.id !== id));
    // }
    setItemList(prevItemList => prevItemList.filter(item => item.id !== id));
  };
  //#endregion DELETE ITEM

  //#region SORT
  const onSortByNameClick = () => {
    const sortedItemList = [...itemList].sort((a, b) => {
      if (sortDirection === 'asc') {
        return a.titleTask.localeCompare(b.titleTask);
      } else {
        return b.titleTask.localeCompare(a.titleTask);
      }
    });

    setItemList(sortedItemList);
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
  };

  const onSortByDateClick = () => {
    const sortedItemList = [...itemList].sort((a, b) => {
      const dateA = convertToDateObject(a.date);
      const dateB = convertToDateObject(b.date);

      if (sortDirection === 'asc') {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });

    setItemList(sortedItemList);
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
  };

  const convertToDateObject = dateString => {
    const [datePart, timePart] = dateString.split(' / ');
    const [day, month, year] = datePart.split('.');
    const [hour, minute, second] = timePart.split(':');
    return new Date(year, month - 1, day, hour, minute, second);
  };

  const onSortByStatusClick = () => {
    const sortedItemList = [...itemList].sort((a, b) => {
      if (sortDirection === 'asc') {
        return a.status.localeCompare(b.status);
      } else {
        return b.status.localeCompare(a.status);
      }
    });

    setItemList(sortedItemList);
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
  };
  //#endregion SORT

  //#region FILTER
  const onFilterTextChange = () => {
    const filteredList = itemList.filter(item =>
      item.titleTask.toLowerCase().includes(inputFilterValue.toLowerCase())
    );
    setFilteredItemList(filteredList);
  };

  React.useEffect(()=>{
    onFilterTextChange();
  },[inputFilterValue, itemList]);
  //#endregion FILTER

  //#region Modals
  const openModalEdit = () => {
    console.log('openModalEdit');
    setModalEditIsOpen(true);
  };

  const closeModalEdit = () => {
    setModalEditIsOpen(false);
  };
  const openModalAboutApp = () => {
    setModalAboutAppIsOpen(true);
  };

  const closeModalAboutApp = () => {
    setModalAboutAppIsOpen(false);
  };

  const openModalInfo = () => {
    setModalInfoIsOpen(true);
  };

  const closeModalInfo = () => {
    setModalInfoIsOpen(false);
  };
  //#endregion Modals

  return (
    <>
      <AppContext.Provider
        value={{
          onSortByNameClick,
          openModalAboutApp,
          modalAboutAppIsOpen,
          closeModalAboutApp,
          inputEditValue,
          setInputEditValue,
          modalEditIsOpen,
          closeModalEdit,
          openModalEdit,
          modalInfoIsOpen,
          closeModalInfo,
          openModalInfo,
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
          inputFilterValue
        }}
      >
        <div className='wrapper'>
          <Header />
          <Filter />
          <Main
            onDoneClick={onDoneClick}
            onEditClick={onEditClick}
            onDeleteClick={onDeleteClick}
            itemList={inputFilterValue ? filteredItemList : itemList }
          />
          <Footer />
        </div>
      </AppContext.Provider>
    </>
  );
}

export default App;
