// 문제34 : sort 구현하기

// 민주는 체육부장으로 체육시간이 되면 반 친구들이 제대로 키 순서대로 모였는지를 확인해야 한다. 그런데 요즘 민주는 그것이 너무 번거롭게 느껴져 한 번에 확인하고 싶어한다. 

// 민주를 위해 **키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램**을 작성해보자.
// (키는 공백으로 구분하여 입력됩니다.)


// 입출력

// 입력 : 176 156 155 165 166 169
// 출력 : NO

// 입력 : 155 156 165 166 169 176
// 출력 : YES


function data (n) {
// join(' ') 배열의 모든 요소를 하나의 문자열로 결합.[1, 2, 3] 배열 => '1 2 3'
// n.sort().join(' ')은 n 배열을 오름차순으로 정렬한 후 하나의 문자열로 만듭니다. 
if (n.join(' ') !== n.sort().join(' ')) {
    return 'NO';
} else {
    return 'YES';
}
};

// 50 100을 입력하면 [50, 100]으로 변환되어 출력
const n = prompt('학생들의 키들을 입력해주세요(,공백 대신 공백으로)').split(' ').map(Number);
console.log(data(n));