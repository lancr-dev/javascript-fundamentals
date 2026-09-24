const cart = [
  { name: 'Keyboard', price: 1200 },
  { name: 'Mouse', price: 500 },
  { name: 'Headset', price: 1500 },
];

let totalPrice = 0;
let discount = 0.1;

for (let item of cart) {
  totalPrice += item.price;
}

if (totalPrice >= 3000) {
  let discountAmount = totalPrice * discount;
  totalPrice -= discountAmount;
}

console.log(`Total amount: ${totalPrice}`);
