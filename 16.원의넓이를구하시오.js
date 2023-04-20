function circle (radius){
    const area = radius * radius * 3.14;
    return area;
}

const radius = parseInt(prompt('원의 반지름을 입력하시오'));
const area = circle(radius);

console.log(`원의 반지름이 ${radius}인 원의 넓이는 ${area}입니다`);

 //또 다른 방법
function circle(radius) {
  const area = radius * radius * 3.14;
  return area;
}

const n = prompt("원의 반지름을 입력하세요.");
console.log(circle(n));
