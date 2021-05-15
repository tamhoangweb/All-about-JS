# Ứng dụng TODOS: code thuần

Các đối tượng:
View: hiển thị giao diện người dùng

Action: Mô tả hành động

Reducers: có giá trị khởi đầu ban đầu, thực hiện action

Store: Nơi chứa dữ liệu

Mô tả flow:

User bấm vào nút Xóa trên View

dispatch: action xóa

Reducers: thực hiện hành động xóa (gỡ phần tử khỏi mảng, và update lại store)

Store: được update thì sẽ update lại view

## Tạo HTML

Dùng thẻ script có type="module" (ES6)
(Nhờ vậy trình duyệt mới hiểu được từ khóa import và export trong code js)

```
#app
<script type="module" src='./scripts.js'></script>
```

## Viết và export các hàm trong file core.js

### Hàm html

Là một hàm để xử lý template literals (còn gọi là template string)

Hàm này có tên gọi tiếng Anh là: Tagged template literals

Hàm này nhận 2 tham số mặc định:

- Tham số 1: là mảng các ký tự
- Tham số 2: là các biến.

```js
/* destructuring tham số 1: first là chuỗi đầu tiên trong mảng, strings là các chuỗi còn lại*/
/* spread tham số 2: values sẽ là mảng các biến truyền vào*/
export default function html([first, ...strings], ...values) {
  return values
    .reduce((acc, cur) => acc.concat(cur, strings.shift()), [first])
    .filter((x) => (x && x !== true) || x === 0)
    .join("");
}
```

```js
/* Sử dụng hàm */
html`
  <h1>${false}</h1>
  <ul>
    ${cars.map((car) => `<li>${car}</li>`)}
  </ul>
`;
```

Khi đó,

```
- first sẽ là: "\n <h1>"
- strings sẽ là:
  strings[0]: "</h1>\n <ul>\n "
  strings[1]: "\n </ul>\n"

- values sẽ là:

values[0]: false

values[1]:
values[1][0]: "<li>BMW</li>"
values[1][1]: "<li>Posche</li>"
values[1][2]: "<li>Mercedes</li>"
```

Dùng hàm reduce với biến khởi tạo là first, thao tác reduce là nối mảng (concat).

```
reduce((acc, cur) => acc.concat(cur, strings.shift()), [first])
```

Kết quả thu về sau khi reduce là 1 mảng, mà các phần tử trong đó (bao gồm string, lẫn variable) được sắp xếp theo đúng thứ tự của template string truyền vào.

```
0: "\n  <h1>"
​​​
1: false
​​​
2: "</h1>\n  <ul>\n    "
​​​
3: "<li>BMW</li>"
​​​
4: "<li>Posche</li>"
​​​
5: "<li>Mercedes</li>"
​​​
6: "\n  </ul>\n"
```

Dùng hàm filter lọc qua mảng, loại bỏ phần tử nào có giá trị falsy (trừ số 0)

```
filter((x) => (x && x !== true) || x === 0)
```

Dùng hàm join để nối các phần tử của mảng thành chuỗi.

Output:

```
"\n  <h1></h1>\n  <ul>\n    <li>BMW</li><li>Posche</li><li>Mercedes</li>\n  </ul>\n"
```

### Hàm createStore(reducer)

Store: kho - state: dữ liệu trong kho

Dùng Object new Map()
{
key là object root (là element root) : value là component()
}

```js
export function createStore(reducer) {
  let state = reducer();
  const roots = new Map();
}
```

#### Đẩy dữ liệu ra View: function render()

Lặp qua roots để render ra component

```js
function render() {
  console.log(roots);
  for (const [root, component] of roots) {
    const output = component();
    root.innerHTML = output;
  }
}
```

#### Các phương thức trả về của createStore

1. Phương thức attach(component, root)

```js
return {
    attach(component, root) {
      roots.set(root, component);
      render();
    },
```

2. Phương thức connect
   Trả về 1 hàm khác

```js
connect(selector = (state) => state) {
      return (component) =>
        (props, ...args) =>
          component(Object.assign({}, props, selector(state), ...args));
    },
```

3. Phương thức dispatch
   Update store, và render lại view

```js
dispatch(action, ...args) {
      state = reducer(state, action, args);
      render();
    },
```

## Sử dụng lib core.js

### Bước 1: tạo store và reducer

#### File store.js: Lưu dữ liệu state

```js
import { createStore } from "./core.js";
import reducer from "./reducer.js";

const { attach, connect, dispatch } = createStore(reducer);

/* biến global dispatch */
window.dispatch = dispatch;

export { attach, connect };
```

#### File reducer.js: Nhận action để xử lý

```js
const init = {
  cars: ["BMW"],
};

export default function reducer(state = init, action, args) {
  switch (action) {
    default:
      return state;
  }
}
```

### Bước 2: tạo component App.js: lấy data từ store

Dùng hàm connect

1. Folder

```
component/App.js
```

2. JS

```js
import html from "../core.js";
import { connect } from "../store.js";

const connector = connect();

function App({ cars }) {
  return html`
    <ul>
      ${cars.map((car) => `<li>${car}</li>`)}
    </ul>
    <button onclick="dispatch('ADD', 'Porsche')">Thêm xe hơi</button>
  `;
}

export default connector(App);
```

### Bước 3: import App và các lib vào script.js

```js
import { attach } from "./store.js";
import App from "./component/App.js";

const root = document.getElementById("root");
attach(App, root);
```
