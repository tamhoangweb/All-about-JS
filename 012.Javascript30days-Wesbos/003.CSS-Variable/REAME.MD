# Dùng Javascript thay đổi biến của CSS

Người dùng tương tác với website thông qua 3 input:

- 1. Spacing : tăng padding của hình
- 2. Blur : tăng độ nhòe của hình
- 3. Color : Chỉnh màu của padding, và từ khóa trên thẻ h1

## Cách xử lý:

<b>Bước 1 - HTML:</b> đặt tên và tạo thuộc tính data-unit cho thẻ input:

- name: spacing [data-unit="px"]
- name: blur [data-unit="px"]
- name: color

<u>Lưu ý:</u> phải có thuộc tính data-unit để lấy được chữ px sử dụng trong javascript.

<b>Bước 2:</b> CSS cho các thuộc tính chịu sự thay đổi khi input thay đổi - bằng Biến số, không bằng giá trị cố định.

Đặt tên biến phải giống với name của input, để dễ tính toán:

```css
:root {
  --spacing: 10px;
  --blur: 10px;
  --color: #ffc600;
}
```

<b>Bước 3 - JS:</b> Viết hàm xử lý sự kiện khi input được user tác động thay đổi giá trị

1. Lặp qua tât cả input, gán lắng nghe sự kiện onchange

2. Khi có sự kiện onchange xảy ra, thì lấy name của input, và value của input. Lúc này, do cách đặt tên biến trùng với name của input, nên mình sẽ cập nhật lại giá trị của 1 cách dễ dàng.

3. Thay đổi giá trị của biến bên trong :root bằng cách truy cập vào style của thẻ html, thực hiện phương thức setProperty với 2 tham số là tên biến và giá trị của biến.

```js
document.documentElement.style.setProPerty(`--spacing`, `10px`);
document.documentElement.style.setProPerty(`--${this.name}`, this.value + 'px');
document.documentElement.style.setProPerty(`--${this.name}`, this.value + unit);
```

Để lấy được chữ px, dựa vào đối tượng dataset của input

```js
const unit = this.dataset.unit || '';
```
