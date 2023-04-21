// 문제 29. 대문자만 지나가세요
// 진구는 영어 학원 아르바이트를 하고 있습니다. 반 아이들은 알파벳을 공부하는 학생들인데 오늘은 대문자 쓰기 시험을 봤습니다.
// 알파벳 하나만을 입력하고 그 알파벳이 대문자이면 YES를 아니면 NO를 출력하는 프로그램을 만들어 주세요.

//방법 1
function alpabet(n){
    if(n === n.toUpperCase() ){
        return 'YES';
    } else {
        return 'NO';
    }
}

const n = prompt('알파벳 하나를 쓰시오.');
console.log(alpabet(n));

// 방법 2
const data = prompt('알파벳을 입력하세요.');

if (data === data.toUpperCase()){
  console.log('YES');
} else {
  console.log('NO');
}
