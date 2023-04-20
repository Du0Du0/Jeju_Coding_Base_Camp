// 문제16 : 로꾸거
// 문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

// 입출력

// 입력 : 거꾸로
// 출력 : 로꾸거

const n = prompt('글자를 입력하시면 꺼꾸로 나옵니다');
const reverseWord = n.split('').reverse().join('');
console.log(reverseWord);

