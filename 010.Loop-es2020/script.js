'use strict';

const restaurant = {
  name: 'Tiệm cơm O Ty 123',
  location: 'Đường Tự Lập, Tân Bình ',
  chuyen: ['Cơm trưa', 'Bún bò'],
  starterMenu: ['Bún bò huế', 'Tôm rim thịt', 'Sườn rim'],
  mainMenu: ['Cơm trắng', 'Canh rau'],
  openingHours: {
    thu5: {
      open: 8,
      close: 13,
    },
    thu6: {
      open: 9,
      close: 12,
    },
    thu7: {
      open: 6,
      close: 12,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDilivery: function ({
    starterIndex = 1,
    mainIndex = 1,
    time = '20:00',
    address,
  }) {
    console.log(`
    Đã nhận đặt món: ${this.starterMenu[starterIndex]} và ${this.mainMenu[mainIndex]}. Món ăn sẽ được giao tới ${address} vào lúc ${time} 
    `);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Món Pasta của bạn bao gồm các thành phần: ${ing1}, ${ing2}, ${ing3} `
    );
  },
};

const entries = Object.entries(restaurant.openingHours);

for (const x of entries) {
  console.log(x);
}

for (const [key, { open, close }] of entries) {
  console.log(`Vào thứ ${key}, tiệm mở cửa lúc ${open}, đóng cửa lúc ${close}`);
}
