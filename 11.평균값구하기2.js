const scores = [a,b,c];
const scores = prompt('세가지 성적을 입력하시오'); 
const answer = (array[0]+array[1]+array[2]) / 3;
console.log(parseInt(answer));

const n = prompt('세가지 성적을 입력하시오').split(',');
const sum = parseInt(n[0]) + parseInt(n[1]) + parseInt(n[2]);
const answer = sum / 3;
console.log(parseInt(answer));

const n = prompt('세가지 성적을 입력하시오').split(' ');
const sum = parseInt(n[0]) + parseInt(n[1]) + parseInt(n[2]);
const answer = sum / 3;
console.log(parseInt(answer));