
const number = parseInt(prompt("Nhập vào một số:"));


const remainder = number % 3 === 0 ? 0 : (number % 3 === 1 ? 1 : 2);


alert("Số dư khi chia cho 3 là: " + remainder);