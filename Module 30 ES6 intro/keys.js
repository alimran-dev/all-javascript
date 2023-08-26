const glass = {
    material: 'glass',
    color: 'clear',
    capacity: 250, // in milliliters
    isFull: false,
    fillAmount: 0
  };
const keys = Object.keys(glass);
const values = Object.values(glass);
console.log(values)
glass.isCleaned = true;
console.log(glass);
// Object.freeze(glass);
Object.seal(glass);
delete glass.capacity;
glass.color = 'red';
glass.content = 'water';
console.log(glass);