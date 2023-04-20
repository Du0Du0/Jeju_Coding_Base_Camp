// 문제26 : 행성 문제2

// 우리 태양계를 이루는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성이 있습니다.
// 이 행성들의 영어 이름은 Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune입니다.

// **행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램**을 만들어 주세요.


const objProperties = 'name';
const objValues = 'english';
const planet = [
	{name : '수성' , english : 'Mercury'},
	{name : '금성' , english : 'Venus'},
	{name : '지구' , english : 'Earth'},
	{name : '화성' , english : 'Mars'},
	{name : '목성' , english : 'Jupiter'},
	{name : '토성' , english : 'Saturn'},
	{name : '천왕성' , english : 'Uranus'},
	{name : '명왕성' , english : 'Neptune'}
];

const key = prompt('행성 한글 이름을 입력하시오');
const result = planet.find(element => element.name === key);
console.log((result[objValues]));

//방법 2
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