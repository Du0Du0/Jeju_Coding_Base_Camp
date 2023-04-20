// 문제18 : 평균 점수
// 영하네 반은 국어, 수학, 영어 시험을 보았습니다. 영하는 친구들의 평균 점수를 구해주기로 했습니다.

// 공백으로 구분하여 세 과목의 점수가 주어지면 **전체 평균 점수**를 구하는 프로그램을 작성하세요. 
// **단, 소숫점 자리는 모두 버립니다.**

// 입출력

// 입력 : 20 30 40
// 출력 : 30

function 평균구하기(a,b,c){
    const array = [a, b, c];
    const answer = (array[0]+array[1]+array[2]) / 3;
    return parseInt(answer);}
console.log(평균구하기(20,30,40));
console.log(평균구하기(10,20,10));

//방법 2
const scores = [a,b,c];
const scores = prompt('세가지 성적을 입력하시오'); 
const answer = (array[0]+array[1]+array[2]) / 3;
console.log(parseInt(answer));

// split(',') ,콤마를 기준으로 나눔
const n = prompt('세가지 성적을 입력하시오').split(',');
const sum = parseInt(n[0]) + parseInt(n[1]) + parseInt(n[2]);
const answer = sum / 3;

console.log(parseInt(answer));

// split(' ') 공백을 기준으로 나눔
const n = prompt('세가지 성적을 입력하시오').split(' ');
const sum = parseInt(n[0]) + parseInt(n[1]) + parseInt(n[2]);
const answer = sum / 3;

console.log(parseInt(answer));

// 방법 3
const scores = prompt('세 과목의 점수를 입력하세요.').split(' ');
let sum = 0;
for (let i=0; i<3; i++){
  sum += parseInt(scores[i], 10); // 십진수의 형태의 숫자로 데이터 타입을 변환
}

console.log(Math.floor(sum/3)); //Math.floor 메서드는 소수점 자리를 모두 버림