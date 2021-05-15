# JAVASCRIPT

## Chuyển đổi Nodelist thành Mảng

```javascript
const parents = Array.from(document.getElementByClassName("parent"));
```

## Tạo function và gọi function

```javascript
function changeColor(element) {
  element.style.backgroundColor = "#333";
}
/* Thực hiện hàm */
changeColor(grandParent);

/* Thực hiện hàm khi duyệt mảng */
parents.forEach(changeColor);
```

## DOM traversal

```javascript
/*- getElementById */
/*- getElementsByClassName */
/*- QuerySelector */
/*- querySelectorAll */
/*- Selecting Children */
parents[0].childrend;
/*- Selecting Descendants */
grandParent.querySelector(".child");
/*- Selecting Parents */
child.parentElement;
/*- Selecting Ancestors */
child.closest(".grandParent");
/*- nextElementSibling */
parents[0].childrend[0].nextElementSibling;
/*- previousElementSibling */
parents[0].childrend[1].previousElementSibling;
```

## DOM Manipulation

- Get Elements

```javascript
const body = document.body;
```

- Adding Elements

```javascript
body.append("Hello everyone", " Welcome");
```

- Creating Elements

```javascript
const div = document.createElement("div");

body.append(div);
```

- Modifying Element Text

```javascript
div.innerText = "Hello world";
div.textContent = "Hello       ";
```

- Modifying Element HTML

```javascript
div.innerHTML = "<strong>Hello</strong>";
```

- Removing Elements

```javascript
const spanBye = document.querySelector("#bye");
spanBye.remove();

/* hoặc */
div.removeChild(spanBye);
```

- Modifying Element Attributes

```javascript
/* Lấy attribute */
spanBye.getAttribute("title");

/* set attribute */
spanBye.setAttribute("title", "tiêu đề");

/* hoặc */
spanBye.title = "tiêu dề";

/* Xóa attribute */
spanBye.removeAttribute("title");
```

- Modifying Data Attributes: data-\*

```javascript
/* tạo dataset */
/* kết quả: data-new-name = 'hi' */
spanBye.dataset.newName = "hi";

/* lấy dataset */
/* html: data-test = 'test' */
spanBye.dataset.test;
```

- Modifying Element Classes

```javascript
classList.add;
classList.remove;
/* không thêm class hi*/
classList.toggle("hi", false);
```

- Modifying Element Style

```javascript
span.style.backgroundColor = "red";
```

## FUNCTION

### Sự khác nhau giữa Declaration function và Expression function

- Declaration function: có thể viết lệnh gọi hàm, trước các lệnh định nghĩa hàm. (hoisting)

## OBJECT

### Cách viết và dùng key trong object

1. Viết key bằng biến

```js
let emailKey = "email";
let myInfo = {
  [emailKey]: "tamhoangweb@gmail.com",
};
```

Khi dùng:

```js
/* lấy được value là tamhoangweb@gmail.com */
myInfo.email;
```

2. Viết key bằng dấu ''

```js
let myInfo = {
  "full-name": "Tâm Hoàng",
};
```

Khi dùng:

```js
/* lấy được value là Tâm Hoàng */
myInfo["full-name"];
```

### Object constructor

1. Tạo bản mô tả cho Object

```js
function User(firstName, lastName, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;

  this.getName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}
```

hoặc

```js
let User = function (firstName, lastName, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;
};
```

2. Tạo đối tượng từ bản mô tả

```js
let author = new User("Tam", "Hoang", "img1.png");
```

#### Cách tìm object constructor của 1 object

```js
author.constructor;

/* true */
author.constructor === User;
```

#### Object prototype

Nguyên liệu tạo nên object ở bên ngoài Object constructor.

```js
User.prototype.className = "F8";
```

## CLASS

```js
class Course {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getName() {
    return this.name;
  }
}
```

## ...rest

### Dùng trong mảng

```js
let array = ["JS", "PHP", "Python"];

let [a, ...rest] = array;

console.log("a: ", a);
console.log("rest: ", rest);
```

kết quả

```
a: JS
rest: ["PHP", "Python"]
```

### Dùng trong đối tượng

```js
let course = {
  name: "JS",
  price: "1000",
  image: "img1.png",
};

let { name, ...newObject } = course;

console.log(newObject);
```

Kết quả

```
Object { price: "1000", image: "img1.png" }
```

Đổi tên key của object. vd: key name đổi thành parentName

```js
let { name: parentName } = course;

console.log(parentName);
```

Kết quả:

```
"JS"
```

### Dùng rest cùng với destructuring trong object

```js
function logger({ name, price, ...rest }) {
  console.log(name);
  console.log(price);
  console.log(rest);
}

logger({
  name: "JS",
  price: 1000,
  description: "OK",
});
```

Kết quả

```
JS
1000
Object { description: "OK" }
```

## spread (...array)

```js
let arr1 = ["JS", "PHP"];
let arr2 = ["Python", "Reactjs"];

let arr3 = [...arr1, ...arr2];

console.log(arr3);
```

### dùng spread tạo object mới với các key-value của object cũ, và ghi đè key nếu đã tồn tại

```js
let defaultConfig = {
  api: "https://url1.com",
  apiVersion: "v1",
  other: "other",
};

let exerciseConfig = {
  ...defaultConfig,
  api: "https://url2.info",
};

console.log(exerciseConfig);
```

Kết quả

```
Object { api: "https://url2.info", apiVersion: "v1", other: "other" }
```

## Module: IMPORT, EXPORT

### 1a. Khi export default

1 File JS chỉ có 1 export Defaut

```js
export default logger;
```

### 1b. Khi import của export default

```js
import logger from "./logger.js";
```

### 2a. Khi export bình thường

```js
export const TYPE_ERROR = "error";
```

### 2b. Thì import bằng object

```js
import { TYPE_ERROR } from "./constants.js";
```

### 3. import \*

```js
import * as contants from "./contants.js";
```

Nhận được 1 object

```js
constants.TYPE_ERROR;
```

### 4. export default trong file index

1. Folder

```folder
logger/index.js + logger.js
```

2. JS

```js
import logger from "./logger.js";
export default logger;
```

hoặc

```js
export { default } from "./logger.js";
```

hoặc

```js
export { default as logger2 } from "./logger.js";
```
