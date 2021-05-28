# Destructuring Object

Object thì không cần đúng thứ tự của biến, vì gọi nó bằng key.

Array thì cần đặt biến đúng thứ tự, mới lấy được chính xác theo index của array

## 1. Destructuring và đặt tên biến dùng thay cho tên key của object

```js
const { name: restaurantName } = restaurant;
console.log(restaurantName);
```

## 2. Default value

Gán giá trị mặc định cho biến (dấu =)

Nếu object không tồn tại key có biến đó thì trả về giá trị mặc định.

```js
const { main = [], starterMenu: starter = [] } = restaurant;

console.log(main, starter);
```

## 3. Mutating variables

Dùng cặp dấu ngoặc tròn để destructuring

```js
let a = 2;
let b = 5;
const obj = { a: 6, b: 7, c: 8 };

({ a, b } = obj);
console.log(a, b);
```

## 4. Destructuring nested objects

```js
const { openingHours } = restaurant;

const {
  thu6: { open, close },
} = openingHours;
console.log(open, close);
```

## 5. Dùng destructuring cho tham số truyền vào hàm là 1 object
