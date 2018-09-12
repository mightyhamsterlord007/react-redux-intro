import { LOAD_ITEM, ADD_ITEM, DELETE_ITEM } from '../constants';
export const loadItem = (item) => {
  return {
    type: LOAD_ITEM,
    data: item
  };
};

export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    data: item
  };
};

export const deleteItem = (item) => {
  return {
    type: DELETE_ITEM,
    data: item
  };
};
