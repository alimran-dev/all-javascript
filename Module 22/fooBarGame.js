function fooBar(quantity) {
    for (i = 1; i <= quantity; i++) {
        let number = i;
        if (number % 3 === 0) {
            if (number % 5 === 0) {
                number = "foobar";
            }
            else {
                number = "foo";
            }
        }
        else if (number % 5 === 0) {
            number = "bar";
        }
        console.log(number);
    }
}
const fooBarGame = fooBar(50);