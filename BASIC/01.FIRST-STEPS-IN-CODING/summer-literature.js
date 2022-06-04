function readcalc(input) {
    let totalPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysperbook = Number(input[2]);

    let totalTimeToRead = totalPages / pagesPerHour;
    let hoursNeeded = totalTimeToRead / daysperbook;

    console.log(hoursNeeded);
}

readcalc(['212', '20', '2']);
readcalc(['432', '15', '4']);