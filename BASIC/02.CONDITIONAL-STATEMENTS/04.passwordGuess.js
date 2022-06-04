function passwordGuess(input) {
    let pass = String(input[0]);
    const phrase = 's3cr3t!P@ssw0rd';

    if (pass === phrase) {
        console.log("Welcome")
    } else {
        console.log("Wrong password!")
    }
}
passwordGuess(["s3cr3t!P@ssw0rd"])