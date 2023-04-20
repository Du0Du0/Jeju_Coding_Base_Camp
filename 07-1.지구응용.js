const arr = [
    {name : '김도현'},
    {name : '김도동'},
    {name : '김오독'},
    {name : '김도깡'},
    {name : '김도도'}
];

const n = prompt('이름을 입력하세요');
const answer = arr.findIndex(obj => obj.name === n) + 1;
console.log(answer);