document.getElementById("deposit-btn").addEventListener('click', function () {
    const newDeposit = parseFloat(document.getElementById('deposit-amount').value);
    if (newDeposit >= 0) {
        const totalDeposit = parseFloat(document.getElementById('deposit-total').innerText);
        const currentTotalDeposit = totalDeposit + newDeposit;
        document.getElementById('deposit-total').innerText = currentTotalDeposit;
        const balance = parseFloat(document.getElementById('balance').innerText);
        const currentTotalBalance = balance + newDeposit;
        document.getElementById('balance').innerText = currentTotalBalance;
        document.getElementById('deposit-amount').value = "";
    }
    else {
        document.getElementById('deposit-amount').value = "";
        alert('Please Input a valid number');
    }
})



document.getElementById("deposit-amount").addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        const newDeposit = parseFloat(document.getElementById('deposit-amount').value);
        if (newDeposit >= 0) {
            const totalDeposit = parseFloat(document.getElementById('deposit-total').innerText);
            const currentTotalDeposit = totalDeposit + newDeposit;
            document.getElementById('deposit-total').innerText = currentTotalDeposit;
            const balance = parseFloat(document.getElementById('balance').innerText);
            const currentTotalBalance = balance + newDeposit;
            document.getElementById('balance').innerText = currentTotalBalance;
            document.getElementById('deposit-amount').value = "";
        }
        else {
            document.getElementById('deposit-amount').value = "";
            alert('Please Input a valid number');
        }
    }

})