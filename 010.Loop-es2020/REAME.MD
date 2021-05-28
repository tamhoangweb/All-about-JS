# Loop ES2020

```js
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
```

Giải thích:

[i, el] là destructuring của mảng [0, 'Bún bò huế']

menu.entries() là phương thức biến đổi từng phần tử của mảng, thành 1 mảng có 2 phần tử bao gồm chỉ số index, và giá trị của phần tử.

# 3 phương thức mới của đối tượng Object (keys, values, Entries)

Điểm chung: Chuyển các thành phần của object thành array

- Keys: Chuyển các keys của objec thành mảng các keys
- Values: Chuyển các values của object thành mảng các values.
- Entries: chuyển các cặp key-value của object thành mảng các cặp key-value.

Ứng dụng:

```js
const entries = Object.entries(restaurant.openingHours);

for (const [key, { open, close }] of entries) {
  console.log(`Vào thứ ${key}, tiệm mở cửa lúc ${open}, đóng cửa lúc ${close}`);
}
```

Giải thích:

- [key, { open, close }] là destructuring 1 phần tử của mảng entries.
- { open, close } là destructuring của 2 thuộc tính của object là phần tử thứ 2 của mảng entries.

# Enhanced object literal

1. Là cách viết ngắn gọn khi mà key và value của object tên giống nhau.

```js
const restaurant = {
  openingHours,
};
```

2. Là cách viết ngắn gọn bỏ từ khóa function trong khi viết phương thức của object

```js
const restaurant = {
  orderPiza(ing1, ing2, ing3) {
    return 1;
  },
};
```

3. Là có tính toán để tạo ra tên key của object

```js
const restaurant = {
  [`day-${2 + 3}`]: {
    open: 0,
    close: 24,
  },
};
```

# Optional chaining ?

Dùng khi không biêt các thứ phía trước dấu ? có tồn tại hay không. Nếu có thì thực hiện, nếu không có thì undefined chứ không báo lỗi.

## Dùng trong property của object

```js
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'Đóng cửa';
  console.log(`Vào thứ ${day}, nhà hàng sẽ mở cửa vào ${open} giờ `);
}
```

Nếu có tồn tại thuộc tính openingHours.mon của object restaurant (nullish ?? nghĩa là số 0 và chuỗi ' ' vẫn tính là có tồn tại)

## Dùng trong Method của object

```js
console.log(restaurant.orderPizza?.(0, 1) ?? 'Method không tồn tại);
```

## Dùng trong array

```js
console.log(users[0]?.name ?? ' Mảng rỗng ');
```

Nếu có phần tử thứ 0 của mảng users thì in ra màn hình giá trị name của phần tử đó, nếu ko có thì in ra mảng rỗng.

?? là nullish, nghĩa là so sánh hoặc nhưng vẫn thực hiện nếu nó là số 0 hoặc chuỗi rỗng. Chỉ không thực hiện, khi nó là null hoặc undefined.
