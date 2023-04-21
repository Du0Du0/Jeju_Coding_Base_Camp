// 문제 37
// 새 학기를 맞아 호준이네 반은 반장 선거를 하기로 했습니다.  그런데 표를 하나씩 개표하는 과정이 너무 번거롭게 느껴진 당신은 학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램을 작성하기로 하였습니다.

// 입력
// 원범 원범 혜원 혜원 혜원 혜원 유진 유진

// 출력
// 혜원(이)가 총 4표로 반장이 되었습니다.



const data = prompt('투표종이에 나온 이름들을 쓰시오 ,없이 공백으로').split(' ');

// 사람 : 투표수
const result = {};
data.forEach((x) => { 
result[x] = (result[x] || 0)+1; 
});

// console.log(result);

//가장 많은 투표수
const values = Object.values(result);
const maxValue = Math.max(...values);

// console.log(maxValue);

//가장 많은 투표수를 얻은 사람
const names = [];
for (const [key, value] of Object.entries(result)) {
if (value === maxValue) {
    names.push(key);
}
}

// console.log(names);

// 4.혜원(이)가 총 4표로 반장이 되었습니다.
console.log(`${names}(이)가 총 ${maxValue}표로 반장이 되었습니다.`);



