// 문제19 : 제곱을 구하자
// 공백으로 구분하여 두 숫자 a와 b가 주어지면, **a의 b승**을 구하는 프로그램을 작성하세요.

const info = prompt('숫자 a와 숫자b를 입력하시오').split(' ');
const num = Math.pow(info[0] ,info[1]);
console.log(num);

const n = prompt('수를 입력하세요.').split(' ');
console.log(Math.pow(parseInt(n[0], 10), parseInt(n[1], 10)));