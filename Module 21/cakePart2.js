const jimMark = 69;
const delaMark = 97;
const chinkuMark = 99;

function cakeWinner(x, y, z) {
    if (x > y && x > z) {
        let jimWin = "Jim you got " + x + " you will got the cake";
        return jimWin;
    } else if (y > x && y > z) {
        let delaWin = "Dela you got " + y + " you will get the cake";
        return delaWin;
    } else {
        let chinkuWin = "Chinku you got " + z + " you will get the cake";
        return chinkuWin;
    }
}

const result = cakeWinner(jimMark, delaMark, chinkuMark);
console.log(result);