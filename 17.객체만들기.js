const key = prompt('이름을 입력하세요').split(' ');
const value = prompt('수학성적을 입력하시오').split(' ').map((value) => parseInt(value));

const result = 
  {[key[0]] : value[0], [key[1]] : value[1]};

console.log(result);