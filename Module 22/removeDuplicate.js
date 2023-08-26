const students = ["abul", "babul", "cabul", "dabul", "ebul", "babul", "abul", "fibul", "abul", "dabul", "babul", "ebul", "gabul"];
function removeDuplicate(students) {
    let duplicateRemoved = [];
    for (let i = 0; i < students.length; i++){
        let student = students[i];
        if (duplicateRemoved.includes(student) === false) {
            duplicateRemoved.push(student);
        }
    }
    return duplicateRemoved;
}
const uniqueNames = removeDuplicate(students);
console.log(uniqueNames);