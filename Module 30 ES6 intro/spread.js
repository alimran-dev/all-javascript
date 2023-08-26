const ages = [23, 16, 27, 31, 25, 26, 43];
const agesCopy = [...ages];
agesCopy.pop();
agesCopy.pop();
agesCopy.pop();
console.log(agesCopy);
console.log(ages);
console.log(Math.max(...ages));
