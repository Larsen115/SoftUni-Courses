function order(input) {
    const chickenMenuPrice = 10.35;
    const fishMenuPrice = 12.40;
    const vegMenuPrice = 8.15;
    const delivery = 2.50;

    let chickenOrdered = Number(input[0]);
    let fishOrdered = Number(input[1]);
    let vegOrdered = Number(input[2]);

    let chickenAmount = chickenOrdered * chickenMenuPrice;
    let fishAmount = fishOrdered * fishMenuPrice;
    let vegAmount = vegOrdered * vegMenuPrice;

    let totalPrice = chickenAmount + fishAmount + vegAmount;
    let dessertPrice = totalPrice * 20 / 100;
    let finalPrice = totalPrice + dessertPrice + delivery;

    console.log(finalPrice)
}

order(['2', '4', '3']);
order(['9', '2', '6']);