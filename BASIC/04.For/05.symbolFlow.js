function characterSequence(input) {
    let Text = input[0];
    for (let i = 0; i < Text.length; i++) {
        console.log(Text.charAt(i));
    }
}

characterSequence(['softuni']);
characterSequence(['ice cream']);