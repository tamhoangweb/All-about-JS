'use strict';
console.log('des');

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
};

restaurant.orderDilivery({
  time: '12:00',
  address: 'Bàu cát, Tân Bình',
  mainIndex: 0,
  starterIndex: 1,
});
