// import * as ShoppingCart from './shoppingCart.js';
// console.log('import module');

// // gọi hàm addToCart đã được import
// ShoppingCart.addToCart('bread', 6);

// // console.log(price);
// console.log(ShoppingCart.qt);

import add, { addToCart, totalPrice, cart } from './shoppingCart.js';
add('bread', 3);
addToCart('cups', 8);

console.log(cart);
