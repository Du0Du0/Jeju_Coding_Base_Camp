// 문제 33
// 한 줄에 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.

// 입출력

// 입력 : 1 2 3 4 5
// 출력 : 5 4 3 2 1

// 입력 : 2 4 6 7 8
// 출력 : 8 7 6 4 2

// prompt 값을 스트링에서 숫자로 바꿈
const data = prompt('숫자줄을 입력하시오').map(Number);
// 숫자들의 순서를 뒤집고 join으로 숫자를 문자열로 변환
// 공백 추가함(' ') cf) join('') => '12345'
console.log(data.reverse().join(' '));


