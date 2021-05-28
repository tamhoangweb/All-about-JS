# Spread

Dải, mở gói, copy...

Dùng trong copy array, copy object (copy thành cái mới, thay đổi giá trị ko ảnh hưởng tới array và object cũ)

Mẹo nhớ: nằm bên phải phép gán =, hoặc dùng khi gọi hàm.

Ngược với ...rest: nằm bên trái phép gán = . Bởi vì rest là phần còn lại sau khi destructuring, hoặc dùng khi viết hàm.

## 1.

...array

## 2.

...string => nhận được từng ký tự riêng lẻ.

```js
const letters = [...'Tâm Hoàng', 'Web'];
```

Lưu ý: Trong template literal string, thì không thể dùng spread string được.

```js
console.log(
  `${...letters}`
)
```

=> Error: Uncaught SyntaxError: Unexpected token '...'

## 3. Dùng hàm promt tạo dữ liệu cho mảng, truyền từng phần tử của mảng vào function.

```js
const ings = [
  prompt(' Bạn muốn Pasta của bạn có thành phần đầu tiên nào? '),
  prompt('Thành phần thứ 2:'),
  prompt('Thành phần thứ 3: '),
];

restaurant.orderPasta(...ings);
```

## 4. Nullish ?? (ES2020)

là falsy bao gồm null và undefined

Loại trừ trường hợp số 0, và chuỗi rỗng.
