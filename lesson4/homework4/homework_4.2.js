
let userInput = prompt('Введіть тризначне число');
let number = +userInput;

const digits = String(number).split('');

const alldigits = digits[0] === digits[1] && digits[1] === digits[2];
const anydigits = digits[0] === digits[1] || digits[1] === digits[2] || digits[0] === digits[2];


alert(`Всі цифри однакові: ${alldigits}`);
alert(`Є однакові цифри: ${anydigits}`);