import { LOAD_ITEM, ADD_ITEM } from '../constants';

let initialState = {
  products: [
    { id: 1, price: 50, name: 'baby big foot doll' },
    { id: 2, price: 100, name: 'iMac pro' },
    { id: 3, price: 45, name: 'sandwich doll' },
    { id: 4, price: 50, name: 'Macbook pro touch screen' }
  ]
};

export default (state = initialState, action) => {

  let updated = Object.assign({}, state);

  switch (action.type) {
    case LOAD_ITEM:
      return updated;

    case ADD_ITEM:

      let products = Object.assign([], updated.products);    
      products.push(action.data);
      updated['products'] = products;
      return updated;

    default:

      return updated;
  }
};
