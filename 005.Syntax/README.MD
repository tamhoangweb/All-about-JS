# Syntax

## Destructuring

### Array destructuring

Lấy phần tử của mảng, gán vào biến mà không cần dùng vòng lặp, hoặc đánh index.

```js
function sumAndMultiply(a, b) {
  return [a + b, a * b];
}

const [sum, multiply] = sumAndMultiply(2, 3);
```

Kết hợp với ...rest để lấy toàn bộ phần tử còn lại của mảng

```js
const array = ["A", "B", "C", "D", "E"];
const [a, , c, ...rest] = array;
```

Gán giá trị khởi tạo cho 1 biến

```js
const [sum, multiply, division = "No division"] = sumAndMultiply(2, 3);
```

Nối 2 mảng thành 1 mảng

```js
const arrC = [...arrA, ...arrB];
```

### Object destructuring

Lấy giá trị của object, bằng 1 biến mới có tên trùng với tên key của object.

```js
const person = {
  name: "Tam",
  age: 36,
  address: {
    city: "HCM",
    district: "TB",
  },
};
const { name } = person;

/* cách cũ */
person.name;
/* hoặc */
person[name];
```

Dùng destructuring nhưng đổi tên biến khác với tên key

```js
const { name: firstName, age } = person;
console.log(firstName);
```

Gán giá trị khởi tạo bên trong destructuring. Nếu bên trong object không có giá trị, thì lấy giá trị khởi tạo, còn nếu object có giá trị thì lấy giá trị trong object

```js
const { name: firstName, age, favariteFood = "Rice" } = person;
```

Dùng ...rest để tạo object mới từ các key còn lại của object cũ

```js
const { name, ...rest } = person;
```

Nối 2 object thành 1 object: giá trị của object sau ghi đè lên object trước, cái nào 2 object không trùng nhau thì tạo mới.

```js
const person3 = { ...person, ...person2 };
```

### Dùng Object destructuring trong function

```js
function printUser(user) {
  console.log(`Name is: ${user.name}. Age is ${user.age}`);
}

printUser(person);
```

Hoặc, cách ghi khác

```js
function printUser({ name, age }) {
  console.log(`Name is: ${name}. Age is ${age}`);
}

printUser(person);
```

Kết hợp với khởi tạo giá trị ban đầu cho 1 key không biết có trong object truyền vào hay không.

```js
function printUser({ name, age, favoriteFood = "Rice" }) {
  console.log(`Name is: ${name}. Age is ${age}. Food is ${favoriteFood}`);
}

printUser(person);
```
