# DOM

- Element
- Attribute
- Text

## Cách lấy thẻ a, và thuộc tính href

```js
let aElements = document.links;
```

hoặc

```js
/* thẻ a phải có thuộc tính name */
let aElements = document.anchors;
```

Duyệt qua toàn bộ thẻ a, kiểm tra thuộc tính href có chứa ký tự đặc biệt hay không

```js
for (let i = 0; i < aElements.length; ++i) {
  aElements[i].onclick = (e) => {
    if (!e.target.href.startsWith("https://tamhoangweb.com")) {
      e.preventDefault();
    }
  };
}
```

## Element Nodes

Các thuộc tính, phương thức, đối tượng của Element Nodes hay dùng

```
{attributes}

autocapitalize
isContentEditable
autofocus: false
inputMode

baseURI

childElementCount
[childNodes] /* bao gồm cả text node*/
[childrend] /* HTMLCollection */

ownerDocument: document
parentElement: body
parentNode: body

firstChild: text /* dấu enter xuống dòng là 1 text node */
firstElementChild: h1

nextElementSibling: div
nextSibling: text

[classList]

nodeName: DIV
nodeType: 1

offsetHeight: 37
offsetLeft: 8
offsetTop: 22
offsetWidth: 234

outerHTML
outerText

style
```

## Attribute Node

### setter bằng toán tử gán

Thêm thuộc tính class cho Element

```js
headingElement.className = "heading";
```

### setter bằng phương thức setAttribute

```js
headingElement.setAttribute("title", "heading 1");
```

### getter bằng phương thức getAttribute

```js
let titleHeading = headingElement.getAttribute("title");
```

### getter bằng thuộc tính

```js
/* Chỉ dùng cho những thuộc tính có sẵn trong web api */
let titleHeading = headingElement.title;
```

## Text Node

- innerText: bỏ qua các thẻ con, và các ký tự xuống dòng và khoảng trống (Sau khi CSS)
- textContent: bỏ qua các thẻ con, nhưng không bỏ qua ký tự xuống dòng và khoảng trống, kể cả các ký tự không hiển thị(Y như file html)

### getter

- innerText: lấy ra những ký tự giống như user nhìn thấy trên màn hình.
- textContent: lấy ra toàn bộ các ký tự bên trong thẻ từ file html, sau khi loại bỏ các thẻ con.

### setter

- innerText: gõ sao thì hiển thị vậy, ko hiểu thẻ html.
- textContent: giống innerText

Khi xuống dòng trong file html:

- innerText: 1 phím enter là 1 thẻ <br>
- textContent: 1 phím enter là khoảng trống lớn giống trong trình soạn thảo html, không biến đổi thành thẻ <br>

### innerHTML

Hiểu thẻ HTML

Tính từ thẻ con

### outerHTML

Tính từ thẻ gọi property outerHTML
