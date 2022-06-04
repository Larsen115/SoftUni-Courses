function shopping(input) {
    let budget = Number(input[0]);
    let gpus = Number(input[1]);
    let cpus = Number(input[2]);
    let rams = Number(input[3]);

    let gpusPrice = gpus * 250;

    let pricePerCPU = gpusPrice * 35 / 100;
    let cpusPrice = cpus * pricePerCPU;

    let pricePerRAM = gpusPrice * 10 / 100;
    let ramsPrice = rams * pricePerRAM;

    let totalPrice = gpusPrice + cpusPrice + ramsPrice;

    let discount = 0.0;

    if (gpus > cpus) {
        discount = totalPrice * 15 / 100;
    } 

    let finalPrice = totalPrice - discount;

    if (finalPrice <= budget) {
        console.log(`You have ${(budget - finalPrice).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(finalPrice - budget).toFixed(2)} leva more!`);
    }
}

shopping(['900', '2', '1', '3']);
shopping(['920.45', '3', '1', '1']);