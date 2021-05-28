'use strict';
const orderSets = new Set(['Bánh mì', 'Trứng ốp la', 'Cơm sườn', 'Cơm sườn']);
// console.log(orderSets);

// console.log(orderSets.add('Phở bò'));
// console.log(orderSets.has('Phở bò'));
// console.log(orderSets.delete('Phở bò'));
// console.log(orderSets.delete('Phở bò'));

// for (const order of orderSets) {
//   console.log(order);
// }

const staff = [
  'thu ngân',
  'đầu bếp',
  'quản lý',
  'phục vụ',
  'thu ngân',
  'đầu bếp',
];

const staffUnique = new Set(staff);

// console.log([...staffUnique]);

// const rest1 = new Map([[1], []], [2]);
// console.log(rest1);

const rest = new Map();
console.log(rest);
rest
  .set('category', ['Nước ngọt', 'Bia', 'Món chính', 'Món khai vị'])
  .set('open', 9)
  .set('close', 14)
  .set(true, 'Tiệm mở cửa')
  .set(false, 'Tiệm đóng cửa');

// const time = 21;
// console.log(rest.get(time >= rest.get('open') && time <= rest.get('close')));

// const arr = [1, 2];
// rest.set(arr, 'Giá trị của arr đây :P');

// console.log(rest.get(arr));

// document.body.innerHTML = `<h1>Heading 1 đây</h1>`;
// rest.set(document.querySelector('h1'), 'Giá trị của h1 nè');
// console.log(rest);

const question = new Map([
  ['question', 'Ngôn ngữ lập trình phổ biến nhất thế giới?'],
  [1, 'C'],
  [2, 'Python'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Đúng rồi :P'],
  [false, 'Sai rồi!'],
]);

// console.log(question.get('question'));
// for (const [key, value] of question) {
//   typeof key === 'number' && console.log(key, question.get(key));
// }

// const answer = 3;

// console.log(question.get(answer == question.get('correct')));
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);
console.log([...question.entries()]);
// console.log(question);

// const openingHours = {
//   thu5: {
//     open: 9,
//     close: 14,
//   },
//   thu6: {
//     open: 9,
//     close: 14,
//   },
//   thu7: {
//     open: 0,
//     close: 24,
//   },
// };

// const hoursMap = new Map(Object.entries(openingHours));

// console.log(hoursMap);
