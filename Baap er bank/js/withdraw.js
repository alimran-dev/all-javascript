document.getElementById('withdraw-btn').addEventListener('click', function () {
    const newWithdraw = parseFloat(document.getElementById('withdraw-amount').value);
    document.getElementById('withdraw-amount').value = "";
    if (newWithdraw >= 0) {
        const balance = parseFloat(document.getElementById('balance').innerText);
        if (newWithdraw > balance) {
            alert('LOL.Tor baap er eto tk nai!!');
            return;
        }
        const currentTotalBalance = balance - newWithdraw;
        document.getElementById('balance').innerText = currentTotalBalance;
        const totalWithdraw = parseFloat(document.getElementById('withdraw-total').innerText);
        const currentTotalWithdraw = totalWithdraw + newWithdraw;
        document.getElementById('withdraw-total').innerText = currentTotalWithdraw;
    }
    else {
        alert('Please Input a valid number');
    }
})



document.getElementById('withdraw-amount').addEventListener('keyup', function (event) {
    if (event.key === "Enter") {
        const newWithdraw = parseFloat(document.getElementById('withdraw-amount').value);
        document.getElementById('withdraw-amount').value = "";
        if (newWithdraw >= 0) {
            const balance = parseFloat(document.getElementById('balance').innerText);
            if (newWithdraw > balance) {
                alert('LOL. Tor baap er bank a eto tk nai!!');
                return;
            }
            const currentTotalBalance = balance - newWithdraw;
            document.getElementById('balance').innerText = currentTotalBalance;
            const totalWithdraw = parseFloat(document.getElementById('withdraw-total').innerText);
            const currentTotalWithdraw = totalWithdraw + newWithdraw;
            document.getElementById('withdraw-total').innerText = currentTotalWithdraw;
        }
        else {
            alert('Please Input a valid number');
        }
    }

})
