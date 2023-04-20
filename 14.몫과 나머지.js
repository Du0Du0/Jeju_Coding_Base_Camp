const info = prompt('나눌 두 숫자를 기입해주세요').split(' ');
const num1 = info[0] / info[1];
const num2 = info[0] % info[1];
console.log(num1+' '+num2);