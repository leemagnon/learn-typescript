let arr = [
  { gender: 'male', name: 'mark' },
  { gender: 'female', name: 'sara' },
  { gender: 'male', name: 'jeno' },
];

let filtered = arr.filter(item => {
  if (item.gender === 'male') {
    return item;
  }
});

console.log(filtered);
