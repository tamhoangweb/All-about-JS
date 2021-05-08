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
