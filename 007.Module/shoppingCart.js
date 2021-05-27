const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} of ${product} add to your cart`);
};

const totalPrice = 280;
const totalQuantity = 18;

export { totalPrice, totalQuantity as qt };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} of ${product} add to your cart`);
}
