function cinemaTicket(input) {
    let day = String(input[0]);
    let price = 0;

    switch (day) {
        case "Monday":
            price = 12;
            break;
        case "Tuesday":
            price = 12;
            break;
        case "Wednesday":
            price = 14;
            break;
        case "Thursday":
            price = 14;
            break;
        case "Friday":
            price = 12;
            break;
        case "Saturday":
            price = 16;
            break;
        case "Sunday":
            price = 16;
            break;
        default:
            console.log("Error");
            break;
    }
    console.log(price);
}

cinemaTicket(['Monday']);
cinemaTicket(['Tuesday']);
cinemaTicket(['Wednesday']);
cinemaTicket(['Thursday']);
cinemaTicket(['Friday']);
cinemaTicket(['Saturday']);
cinemaTicket(['Sunday']);