function cakeWinner(m, n) {
    if (m > n) {
        let jimWin = "Jim you got " + m + " which is the highest mark and you will get the cake";
        return jimWin;
    }
    else {
        let delaWin = "Dela you got " + n + " which is the highest mark and you will get the cake";
        return delaWin;
    }
}

const jimMarks = 69;
const delaMarks = 97;
const result = cakeWinner(jimMarks, delaMarks);
console.log(result);