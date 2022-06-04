function calculatePrice(input) {
    let sqm = input[0];
    let total = sqm * 7.61;
    let discount = total * 0.18;
    let subTotal = total - discount;

    console.log(`The final price is: ${subTotal} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

calculatePrice([420])