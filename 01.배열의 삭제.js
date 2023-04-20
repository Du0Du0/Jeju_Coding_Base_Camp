// 문제1 : 배열의 삭제
// 다음 배열에서 400, 500를 삭제하는 code를 입력하세요.

//방법1 - .splice(삭제하는 위치, 삭제하는 수)
var nums = [100, 200, 300, 400, 500];
nums.splice(3, 2);
console.log(nums);

//방법2 - .pop() 맨 끝에서 자르기
var nums = [100, 200, 300, 400, 500];
nums.pop();
nums.pop();
console.log(nums);

//방법3 - length = 3 길이 수 이상인 것은 자르기
var nums = [100, 200, 300, 400, 500];
nums.length = 3;
console.log(nums);

