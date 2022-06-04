function annualCosts(input) {
    let annualFee = Number(input[0]);

    let sneakers = annualFee - (annualFee * 40 / 100);
    let clothes = sneakers - (sneakers * 20 / 100);
    let ball = clothes * 1 / 4;
    let accessories = ball * 1 / 5;

    let totalCost = annualFee + sneakers + clothes + ball + accessories;
    console.log(totalCost);
}

annualCosts(['365'])
annualCosts(['550'])