// 문제 48
// 문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.

// 입출력

// 입력 : AAABBBcccddd
// 출력 : aaabbbCCCDDD

const str = "AAABBBcccddd"
let arr = []; // 결과를 담을 빈 배열 생성

for (let i = 0; i < str.length; i++) { // 각 문자를 순회하면 확인
	if (str[i] === str[i].toUpperCase()) { // 해당 글자가 대문자면
		arr.push(str[i].toLowerCase()); // 소문자로 바꾸어서 넣고
	} else { // 대문자가 아니라면, 소문자라면
		arr.push(str[i].toUpperCase()); // 대문자로 바꾸어서 넣기
	}
}

arr.join(""); // join 메서드로 배열을 문자열로 만들어주면 끝!