import React from 'react';
import Item from '../Item/Item';

function ItemList(props) {
  return (
    <>
      <div>
        <Item id='111' text='do homework' date='1986.05.15' onDoneClick={props.onDoneClick} />
        <Item id='222' text='read a book' date='1986.05.15' />
        <Item id='333' text='fix laptop' date='1986.05.15' />
        <Item id='444' text='buy some milk' date='1986.05.15' />
      </div>
    </>
  );
}

export default ItemList;
