function hardwareShopping(input) {
    let budget = Number(input[0]);
    let GPUs = Number(input[1]);
    let CPUs = Number(input[2]);
    let RAMs = Number(input[3]);

    let gpuPrice = GPUs * 250;
    let pricePerCPU = gpuPrice * 35 / 100;
    let CPUPrice = pricePerCPU * CPUs;

    let pricePerRAM = gpuPrice * 10 / 100;
    let RAMPrice = RAMs * pricePerRAM;

    let totalPrice = gpuPrice + CPUPrice + RAMPrice;
    let discount = 0.0;

    if (gpuPrice > CPUPrice) {
        discount = totalPrice * 15 / 100;
    }

    let finalPrice = totalPrice - discount

    if (finalPrice <= budget) {
        console.log(`You have ${(budget - finalPrice).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(finalPrice - budget).toFixed(2)} leva more!`);
    }
}

hardwareShopping(['900', '2', '1', '3'])