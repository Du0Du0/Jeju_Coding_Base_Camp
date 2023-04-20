// 문제 13-1 (응용문제)
// 우리 태양계를 이루고 있는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성으로 총 8개 입니다. 저희는 우리 태양계의 n번째 행성이 무엇인지 알고 싶습니다. 입력으로 행성 이름이 입력됩니다. 출력으로 그 순서에 해당하는 행성의 번호를 출력해 주세요.

// 예를 들어 수성이 입력되면, 첫번째 행성인 1이 출력됩니다.

// 입출력

// 입력 : 수성
// 출력 : 1

const arr = [
    {name : ''},
    {name : '수성'},
    {name : '금성'},{ name : '지구'},{name : '화성'},
    {name : '목성'},
    {name : '토성'},{name : '천왕성'},
    {name : '해왕성'}
];

const n = prompt('몇 번째 행성인가요?');
const index = arr.findIndex(arr => arr.name === '수성' );
console.log(index);

// 다른 방법
  
const arr = [
    {name : '수성'},
    {name : '금성'},
    { name : '지구'},
    {name : '화성'},
    {name : '목성'},
    {name : '토성'},
    {name : '천왕성'},
    {name : '해왕성'}
];

const n = prompt('몇 번째 행성인가요?');
const index = arr.findIndex(arr => arr.name === n )+1;
console.log(index);