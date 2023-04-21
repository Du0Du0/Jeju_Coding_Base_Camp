// 문제 43
// 우리가 흔히 사용하는 숫자 1, 8, 19, 28893 등등...은 10진수 체계입니다.
// 이를 컴퓨터가 알아 들을 수 있는 2진수로 바꾸려고 합니다. 어떻게 해야할까요?

// 사용자에게 숫자를 입력받고 이를 2진수를 바꾸고 그 값을 출력해주세요.

const data = prompt('십진수를 입력하세요');
// toString()은 숫자열을 문자열로 바꿔주기 때문에 parseInt()로 숫자로 만들어줘야함
const result = parseInt(data).toString(2);

console.log(result);
