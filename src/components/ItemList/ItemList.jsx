import React from "react";
import Item from "../Item/Item";
import { AppContext } from "../../App";

function ItemList() {
  const { itemList } = React.useContext(AppContext);

  return (
    <>
      <div>
        {/* <Item id='ID' text="Title task" date="date" /> */}
        {itemList.map((el) => {
          return (
            <Item key={el.id} id={el.id} text={el.titleTask} date={el.date} />
          );
        })}
      </div>
    </>
  );
}

export default ItemList;
