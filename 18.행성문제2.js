const objProperties = 'name';
const objValues = 'english';
const planet = [{name : '수성' , english : 'Mercury'},{name : '금성' , english : 'Venus'},{name : '지구' , english : 'Earth'},{name : '화성' , english : 'Mars'},{name : '목성' , english : 'Jupiter'},{name : '토성' , english : 'Saturn'},{name : '천왕성' , english : 'Uranus'},{name : '명왕성' , english : 'Neptune'}];
const key = prompt('행성 한글 이름을 입력하시오');
const result = planet.find(element => element.name === key);
console.log((result[objValues]));

//다른 예시
const planets = {
	'수성' : 'Mercury',
	'금성' : 'Venus',
	'지구' : 'Earth',
	'화성' : 'Mars',
	'목성' : 'Jupiter',
	'토성' : 'Saturn',
	'천왕성' : 'Uranus',
	'해왕성' : 'Neptune',
};

const name = prompt("행성의 이름을 입력하세요.");

console.log(planets[name]);