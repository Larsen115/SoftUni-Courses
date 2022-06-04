function calculateDeposit(input) {
    let amountDeposited = Number(input[0]);
    let depositPeriod = Number(input[1]);
    let annualInterestRate = Number(input[2]);

    let interest = amountDeposited * annualInterestRate / 100;
    let monthInterest = interest / 12;
    let total = amountDeposited + depositPeriod * monthInterest;

    console.log(total);
}

calculateDeposit(['600', '12', '3.8']);
calculateDeposit(['2350', '6', '7']);