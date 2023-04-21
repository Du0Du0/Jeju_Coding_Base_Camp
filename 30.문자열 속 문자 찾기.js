// 문제 30 문자열 속 문자 찾기
// 문자 pineapple에는 apple이라는 문자가 숨어 있습니다. 원범이는 이렇듯 문자열 속에 숨어있는 문자를 찾아보려고 합니다.

// 첫번째 입력에서는 문자열이 입력되고, 두번째에는 찾을 문자가 입력되어야 합니다.
// 그 문자가 시작하는 index를 반환하는 프로그램을 만들어 주세요

// 입력
// pineapple is yummy
// apple

// 출력
// 4

// 방법1 - findIndex()
const n = prompt('영어문장을 입력해주세요').split('');
const findWord = prompt('찾을 영어단어를 입력해주세요');
const result = n.findIndex((element) => element === findWord[0]);
console.log(result);

// 다른 방법 indexof() - 주어진 값과 일치하는 요소의 첫번째 인덱스 구할 때
const data = prompt('영어문장을 입력해주세요');
const word = prompt('찾을 영어단어를 입력해주세요');
console.log(data.indexOf(word));



