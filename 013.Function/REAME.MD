# Function

## Có cách nào để skip 1 tham số truyền vào function, để lấy giá trị mặc định?

Dùng undefined

```js
/* kq: 
numberPlane = 'VN-Airline 123'
clients = 1
pricing = 800
*/
createBooking('VN-Airline 123', undefined, 800);
```

```js
function createBooking(numberPlane, clients = 1, pricing = 200 * clients)
```

## Modern Javacript sử dụng call hay apply?

Dùng call

## Method bind sẽ dùng trong trường hợp nào?

- Callback của 1 event listener

```js
document
  .querySelector('.buy')
  .addEventListener('click', storeA.buyCookie.bind(storeA));
```
