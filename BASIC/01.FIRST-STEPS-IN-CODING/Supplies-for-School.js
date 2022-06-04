function countPrice(input) {
    const penPrice = 5.80;
    const markerPrice = 7.20;
    const cleaningFluidPerLitre = 1.20;

    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let cleaningFluid = Number(input[2]);
    let discount = Number(input[3]);

    let penTotal = pens * penPrice;
    let markerTotal = markers * markerPrice;
    let cleaningFluidTotal = cleaningFluid * cleaningFluidPerLitre;
    let totalPrice = penTotal + markerTotal + cleaningFluidTotal;
    let finalPrice = totalPrice - (totalPrice * discount / 100);

        //Useful discount stuff//

    console.log(finalPrice);
}

countPrice(['2', '3', '4', '25']);
countPrice(['4', '2', '5', '13']); 