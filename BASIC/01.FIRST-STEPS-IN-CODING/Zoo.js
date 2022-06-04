function calculateCost(input) {
    let dogPr = 2.50;
    let catPr = 4;

    let dogSum = dogPr * input[0];
    let catSum = catPr * input[1];
    
    let total = dogSum + catSum;
    console.log(`${total} lv.`);
}

calculateCost(['1', '3'])