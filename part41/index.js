// shuffle

const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

function shuffle(a){
    for(let i = a.length - 1; i > 0; i--){
        const random = Math.floor(Math.random() * (i + 1));

        [a[i], a[random]] = [a[random], a[i]];
    }
}
console.log(cards);

shuffle(cards);
console.log(cards);

