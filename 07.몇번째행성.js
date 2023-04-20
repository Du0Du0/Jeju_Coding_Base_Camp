const arr = [
    {name : ''},
    {name : '수성'},
    {name : '금성'},{ name : '지구'},{name : '화성'},
    {name : '목성'},
    {name : '토성'},{name : '천왕성'},
    {name : '해왕성'}];
  
    const n = prompt('몇 번째 행성인가요?');
  const index = arr.findIndex(arr => arr.name === '수성' );
  console.log(index);
  
     const arr = [
      {name : '수성'},
      {name : '금성'},
      { name : '지구'},
      {name : '화성'},
      {name : '목성'},
      {name : '토성'},
      {name : '천왕성'},
      {name : '해왕성'}];
    const n = prompt('몇 번째 행성인가요?');
    const index = arr.findIndex(arr => arr.name === n )+1;
    console.log(index);
  //
  const planets = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'];
  
  const n = prompt('몇 번째 행성인가요?');
  
  console.log(planets[n-1]);