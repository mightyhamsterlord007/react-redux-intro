import React, { Component } from 'react';

const Item = (props) => {
  return (
    <div>
      <span>Title: {props.item.name}</span>
      <span>$ {props.item.price}</span>
    </div>
  );
};

export default Item;
