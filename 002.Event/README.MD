# EVENT

- Sự kiện từ thao tác chuột
- Sự kiện từ thao tác bàn phím
- Sự kiện từ Trình duyệt

## Tránh sự kiện nổi bọt: stopPropagation

Mô tả:
Có 1 button, nằm bên trong 1 div.

Khi có sự kiện Click vào button, thì đồng thời cũng sẽ xảy ra sự kiện Click vào div cha.

Để ngăn chặn việc có sự kiện Click vào Div cha, thì dùng phương thức stopPropagation

```js
e.stopPropagation();
```

## Phân biệt DOM Event và Event Listener

Event Listener có thêm phương thức removeEventListener

## Sự kiện onchange vs oninput

- onchange: Sau khi blur ra khỏi ô input (ko còn focus vào input nữa), thì so sánh giá trị với giá trị trước đó của ô input. Nếu có thay đổi thì mới ghi nhận giá trị.
- oninput: gõ đến đấu gắn giá trị đến đó

```js
let inputEl = document.querySelector('input[type="text"]');

inputEl.onchange = (e) => {
  console.log(e.value);
};
inputEl.oninput = (e) => {
  console.log(e.value);
};
```

## e.which để lấy mã số ký tự của phím được nhấn

```js
document.onkeydown = (e) => {
  switch (e.which) {
    case 27:
      console.log("EXIT");
      break;
  }
};
```
