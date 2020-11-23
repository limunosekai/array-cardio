const inventors = [
  {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
  {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727},
  {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642},
  {first: 'Marie', last: 'Curie', year: 1867, passed: 1934},
  {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630},
  {first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543},
  {first: 'Max', last: 'Planck', year: 1858, passed: 1947},
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick',
'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire',
'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana',
'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano',
'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Bevel, Ken',
'Biden, Joseph', 'Bierce, Amborse', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank',
'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

/* 1.filter */

// const fifteen = inventors.filter(function(inventor){
//   if(inventor.year > 1499 && inventor.year < 1600)
//     return true // keep it
// }); 

const fifteen = inventors.filter(inventor => (inventor.year > 1499 && inventor.year < 1600));
console.table(fifteen);

/* 2.map */

const name = inventors.map(nameBy => (nameBy.first+' '+nameBy.last));
console.log(name);

/* 3.Sort */

const birthday = inventors.sort((a,b) => (a.year - b.year));
console.log(birthday);

/* 4.reduce */

const totalYears = inventors.reduce((total, inventor) => (inventor.passed - inventor.year + total), 0);
console.log(totalYears);

/* 5.sort by years lived */

const oldest = inventors.sort((a,b) => {
  const last = a.passed - a.year;
  const next = b.passed - b.year;
  return last > next ? -1 : 1; // 오름차순
});
console.table(oldest);

/* 6.sort the people alphabetically by last name */

const sortByAlphabet = people.sort((lastOne,nextOne) => {
  const [aLast, aFirst] = lastOne.split(', ');
  const [bLast, bFirst] = nextOne.split(', ');
  return aLast > bLast ? 1 : -1;
});
console.log(sortByAlphabet);

/* 7.reduce exercise */

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

const transportation = data.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});
console.log(transportation);


/* 8.some and every checks */

const people2 = [
  {name : 'Wes', year : 1988},
  {name : 'Kait', year : 1986},
  {name : 'Irv', year : 1970},
  {name : 'Lux', year : 2015}
];

const comments = [
  {text : 'Love this', id : 523423},
  {text : 'Super good', id : 823423},
  {text : 'You are the best', id : 2039842},
  {text : 'Ramen in my fay good ever', id : 123523},
  {text : 'Nice Nice Nice', id : 542328}
];

const isAdult = people2.some(person =>
  ((new Date()).getFullYear()) - person.year >= 19);

console.log({isAdult});

const isAdultEvery = people2.every(person =>
  ((new Date()).getFullYear()) - person.year >= 19);

console.log(isAdultEvery);

/* 9. find */
//filter : true인 값들로 새로운 배열을 만듦.
//find : true인 값 1개만 찾고 함수 종료.

const result = comments.find(comment => comment.id === 823423);
console.log(result);

/* 10. findIndex */

const index = comments.findIndex(comment => comment.id === 823423);

console.log(index);

// splice = array를 수정
// comments.splice(index, 1);
// console.table(comments);

const newComments = [
  ...comments.slice(0, index), // 0번째 부터 index 전까지
  ...comments.slice(index + 1) // index + 1 부터 지정하지 않을 경우 끝까지
];
console.table(newComments);