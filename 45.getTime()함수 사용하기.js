// 문제 45
// Date객체의 메소드 중 하나인 getTime()은 1970년 1월 1일 0시 0분 0초 이후로부터 지금까지 흐른 시간을 천분의 1초 단위(ms)로 반환합니다.

// 이를 이용하여 현재 연도(2023)를 출력해보세요.

const time = new Date().getTime(); // ms로 값을 받음
// 1000ms 는 1초, 1초 *60 은 1분, 1분*60 은 1시간, 1시간*24 는 하루, 하루*365 는 1년임
// getTime으로 나온 값에 1년을 나누고 1970을 더하면 현재년도가 나옴
const year = Math.floor(time / (1000 * 60 * 60 * 24 * 365)) + 1970;

console.log(year);