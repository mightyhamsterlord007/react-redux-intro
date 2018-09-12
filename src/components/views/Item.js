import React, { Component } from 'react';

const Item = (props) => {
  return (
    <div>
      <span>Title: {props.item.name}</span>
      <br />
      <span>$ {props.item.price}</span>
      <br />
    </div>
  );
};

export default Item;
