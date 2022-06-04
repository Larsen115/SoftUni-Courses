function fishingBoat(input) {
    let budget = parseInt(input[0]);
    let season = String(input[1]);
    let fishers = parseInt(input[2]);
    let fishRent = 0;

    switch(season) {
        case 'Spring':
            fishRent = 3000;
            break;
        case 'Summer': case 'Autumn':
            fishRent = 4200;
            break;
        case 'Winter':
            fishRent = 2600;
            break;
        default:
            return;
    }

    if (fishers <= 6) {
        fishRent = fishRent - (fishRent * 0.1);
    } else if (fishers >= 7 && fishers <= 11) {
        fishRent = fishRent - (fishRent * 0.15);
    } else if (fishers >= 12) {
        fishRent = fishRent - (fishRent * 0.25);
    }

    if (fishers % 2 == 0 && season != 'Autumn') {
        fishRent = fishRent - (fishRent * 0.05);
    }

    if (budget >= fishRent) {
        console.log(`Yes! You have ${(budget - fishRent).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(fishRent - budget).toFixed(2)} leva.`);
    }
}

fishingBoat(['3000', 'Summer', '11']);
fishingBoat(['3600', 'Autumn', '6']);
fishingBoat(['2000', 'Winter', '13']);