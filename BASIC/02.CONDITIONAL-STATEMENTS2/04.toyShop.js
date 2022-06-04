function toyShop(input) {  
    let tripPrice = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let tBears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let total = puzzles * 2.60 + dolls * 3.00 + tBears * 4.10 +
                minions * 8.20 + trucks * 2.00;
    
    let toys = puzzles + dolls + tBears + minions + trucks;
    let discount = 0.0;

    if (toys >= 50) {
        discount = total * 25 / 100;
    }

    let finalPrice = total - discount;
    let rent = finalPrice * 10 / 100;
    let profit = finalPrice - rent;

    if (profit >= tripPrice) {
        console.log(`Yes! ${(profit - tripPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(tripPrice - profit).toFixed(2)} lv needed.`);
    }
}

toyShop(['40.8', '20', '25', '30', '50', '10']);
toyShop(['320', '8', '2', '5', '5', '1']);