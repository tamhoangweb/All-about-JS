# Kiểu dữ liệu mới: Sets và Maps

## Sets: gần giống kiểu Array

1.Cách khởi tạo

```js
const orderSets = new Set(['Bánh mì', 'Trứng ốp la', 'Cơm sườn', 'Cơm sườn']);
```

2.Tác dụng:

- Lưu được nhiêu phần tử và đảm bảo không trùng nhau.
- Có sẵn các phương thức: thêm, xóa, xóa hết, tìm, kích thước
- giống mảng nhưng nó không có đánh index cho phần tử như mảng.

```js
/* Thêm Phở bò vào orderSets */
orderSets.add('Phở bò');

/* trả về true nếu có Phở bò trong orderSets */
orderSets.has('Phở bò');

/* Xóa Phở bò ra khỏi orderSets, trả về true nếu xóa OK */
orderSets.delete('Phở bò');

/* Đếm số phần tử bên trong orderSets */
orderSets.size;

/* xóa hết món ăn trong orderSets */
orderSets.clear();
```

3.Lặp qua (loop) Sets

- Dùng for of

```js
for (const order of orderSets) {
  console.log(order);
}
```

4.Ứng dụng: Biến đổi 1 array có các giá trị bị duplicate thành 1 sets chỉ lấy các giá trị đơn nhất, không trùng (lọc trùng lặp)

```js
const staff = [
  'thu ngân',
  'đầu bếp',
  'quản lý',
  'phục vụ',
  'thu ngân',
  'đầu bếp',
];

const staffUnique = new Set(staff);

console.log(staffUnique);
```

5.Chuyên đổi 1 Sets thành 1 Array. Dùng toán tử spread

```js
console.log([...staffUnique]);
```

## Map: gần giống kiểu Object

1.Khởi tạo

```js
const rest = new Map();
```

2.Tác dụng:

- Có cặp key và value giống object. Nhưng key có thể là bất cứ cái gì.
- Phương thức set để tạo cặp key-value
- Phương thức get để lấy giá trị cặp key-value
- Có thể thực hiện phương thức set liên tục.

```js
/* set liên tục các key và value cho rest */
rest
  .set('category', ['Nước ngọt', 'Bia', 'Món chính', 'Món khai vị'])
  .set('open', 9)
  .set('close', 14)
  .set(true, 'Tiệm mở cửa')
  .set(false, 'Tiệm đóng cửa');

/* lấy giá trị theo key true của rest nhận về chuỗi 'Tiệm mở cửa' */
console.log(rest.get(true));
```

3a. Ứng dụng 1:

- Key của map có thể do tính toán mà có, không phải chỉ chứa chuỗi đơn thuần như của object

```js
const time = 21;

/* kết quả là true do đó sẽ lấy được giá trị là 'Tiệm đóng cửa' */
console.log(rest.get(time >= rest.get('open') && time <= rest.get('close')));
```

3b. Ứng dụng 2: Dùng DOM làm key của Map là điều có thể :D

```js
document.body.innerHTML = `<h1>Heading 1 đây</h1>`;
rest.set(document.querySelector('h1'), 'Giá trị của h1 nè');

/* bên trong rest có key là h1, rê chuột vào h1 sẽ ispect ra được element h1 của DOM */
console.log(rest);
```

4.Các phương thức có trong kiểu dữ liệu Map

- has: trả về true hoặc false
- delete: xóa theo key
- size: trả về số lượng cặp key-value
- clear(): xóa hết

  5.Lưu ý khi dùng dữ liệu kiểu array (giá trị lưu ở heap, ko phải ở call stack) làm key của Map, thì nên dùng qua 1 biến trung gian. Nếu không sẽ không lấy được value.

```js
const arr = [1, 2];
rest.set(arr, 'Giá trị của arr đây :P');

console.log(rest.get(arr));
```

Tránh ghi trực tiếp như thế này sẽ không lấy được giá trị

```js
rest.set([1, 2], 'Giá trị của arr đây :P');

console.log(rest.get([1, 2]));
```

6.Chuyển dữ liệu kiểu Object thành Map

- B1: dùng phương thức Object.entries chuyển object thành array
- B2: tạo Map với array vừa được chuyển ở bước 1

```js
const openingHours = {
  thu5: {
    open: 9,
    close: 14,
  },
  thu6: {
    open: 9,
    close: 14,
  },
  thu7: {
    open: 0,
    close: 24,
  },
};

const hoursMap = new Map(Object.entries(openingHours));

console.log(hoursMap);
```

7.Lặp (loop, iteration) của kiểu dữ liệu Map
Bài toán: có 1 Map question, chứa 1 câu hỏi, với 3 câu trả lời, user chọn câu trả lời của họ, chương trình trả ra kết quả câu trả lời đúng hay sai.

B1: Lập dữ liệu question Map

```js
const question = new Map([
  ['question', 'Ngôn ngữ lập trình phổ biến nhất thế giới?'],
  [1, 'C'],
  [2, 'Python'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Đúng rồi :P'],
  [false, 'Sai rồi!'],
]);
```

B2: In ra console:

- câu hỏi của question Map
- 3 câu đáp án

```js
console.log(question.get('question'));
for (const [key, value] of question) {
  typeof key === 'number' && console.log(key, question.get(key));
}
```

B3: Tạo biến answer với phương thức prompt của trình duyệt, để user nhập câu trả lời. Convert câu trả lời sang kiểu số.

```js
const answer = Number(prompt('Câu trả lời của bạn là? '));
```

B4: In ra key true or false.

```js
console.log(question.get(answer == question.get('correct')));
```

### Chuyển dữ liệu kiểu Map sang Array

```js
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);
console.log([...question.entries()]);
```
