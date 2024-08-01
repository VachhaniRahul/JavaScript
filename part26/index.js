// .filter() = create a new array by filtering out elements

const ages = [10, 30, 22, 18, 17, 28];
const adult = ages.filter(isadult);
const children = ages.filter(ischildren);

console.log(`adult = ${adult}`);
console.log(`children = ${children}`);


function ischildren(elements){
    return elements < 18;
}

function isadult(elements){
    return elements >= 18;
}

