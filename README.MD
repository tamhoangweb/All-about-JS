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
