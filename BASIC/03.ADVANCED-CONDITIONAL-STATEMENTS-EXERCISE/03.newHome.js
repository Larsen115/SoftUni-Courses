function newHome(input) {
    let flowers = String(input[0]);
    let flowerAmount = parseInt(input[1]);
    let budget = parseInt(input[2]);

    if ((flowerAmount < 10 || flowerAmount > 1000) || (budget < 50 || budget > 2500)) {
        return;
    }

    let flowerPrice = 0.0;
    let total = 0.0;
    let discount = 0.0;

    switch (flowers) {
        case 'Roses':
            flowerPrice = 5.00;
            total = flowerAmount * flowerPrice;
            if (flowerAmount > 80) {
                discount = total * 10 / 100;
                total -= discount;
            }
            break;
        case 'Dahlias':
            flowerPrice = 3.80;
            total = flowerAmount * flowerPrice;
            if (flowerAmount > 90) {
                discount = total * 15 / 100;
                total -= discount;
            }
            break;
        case 'Tulips':
            flowerPrice = 2.80;
            total = flowerAmount * flowerPrice;
            if (flowerAmount > 80) {
                discount = total * 15 / 100;
                total -= discount;
            }
            break;
        case 'Narcissus':
            flowerPrice = 3.00;
            total = flowerAmount * flowerPrice;
            if (flowerAmount < 120) {
                discount = total * 15 / 100;
                total += discount;
            }
            break;
        case 'Gladiolus':
            flowerPrice = 2.50;
            total = flowerAmount * flowerPrice;
            if (flowerAmount < 80) {
                discount = total * 20 / 100;
                total += discount;
            }
            break;
        default:
            return;
    }

    if (budget >= total) {
        console.log(`Hey, you have a great garden with ${flowerAmount} ${flowers} and ${(budget - total).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(total - budget).toFixed(2)} leva more.`);
    }
}

newHome(['Roses', '55', '250']);
newHome(['Tulips', '88', '260']);
newHome(['Narcissus', '119', '360']);