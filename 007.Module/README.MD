# MODULE

- File import: scripts.js
- File export: shoppingCart.js

## 1. Trường hợp 1:

```js
import './shoppingCart.js';
```

- Nếu bên file shoppingCart.js có lệnh console.log sẽ thực hiện lệnh này.

## 2.Trường hợp 2:

```js
import { addToCart } from './shoppingCart.js';
```

Lưu ý:

- Bên file export phải có từ khóa export
- từ khóa export phải nằm ngoài cùng

```js
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} of ${product} add to your cart`);
};
```

- Trường hợp import biến không có được export thì sẽ báo lỗi

```js
Uncaught SyntaxError: The requested module './shoppingCart.js' does not provide an export named 'a'
```

## 3.Trường hợp 3: export nhiều thứ 1 lúc

```js
export { totalPrice, totalQuantity as qt };
```

```js
import { addToCart, totalPrice as price, qt } from './shoppingCart.js';
```

- Có thể đặt tên khác để sử dụng ở file import bằng từ khóa "as"
- Đặt khi import cũng được, đặt khi export cũng được

## 4. Trường hợp 4: import hết tất cả

```js
import * as ShoppingCart from './shoppingCart.js';
```

Khi sử dụng:

```js
// gọi hàm addToCart đã được import
ShoppingCart.addToCart('bread', 6);

console.log(ShoppingCart.qt);
```

## 5. Trường hợp 5: export default

Bên file export không cần đặt tên cho thứ cần export

Bên file import đặt 1 tên tùy ý cho thứ cần import

```js
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} of ${product} add to your cart`);
}
```

```js
import add from './shoppingCart.js';
add('bread', 3);
```

Code sẽ chạy ở file shoppingCart, và thực hiện hàm add là hàm được export default.

## 6. Trường hợp 6: vừa import cái export default, vừa import các thứ được export khác

```js
import add, { addToCart, totalPrice, qt } from './shoppingCart.js';
```

## 7. Trường hợp 7: import 1 file js từ thư viện lodash-es

File: cloneDeep.js

```js
export default cloneDeep;
```

File: scripts.js (là file sử dụng cloneDeep)

```js
import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
const stateDeepClone = cloneDeep(state);
```
