// dom navigation = the process of navigating through the structure 
//                  of an html documents usings javascript.


// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .perentElement
// .children


// .firstElementChild

// this is getElementById
const a = document.getElementById('fruits');
const firstchild = a.firstElementChild;
// console.log(firstchild);
firstchild.style.backgroundColor = "red";


// this is querySelectorAll
const b = document.querySelectorAll('ul');
b.forEach(X => {
    const firstchild = X.firstElementChild;
    firstchild.style.backgroundColor = 'yellow';
})






// .lastElementChild

// this is getElementById

const c = document.getElementById('vegetables');
const lastChild = c.lastElementChild;
lastChild.style.backgroundColor = "purple";


// this is querySelectorAll

const d = document.querySelectorAll('ul');
d.forEach(X => {
    const lastChild = X.lastElementChild;
    lastChild.style.backgroundColor = 'purple';
})







// .nextElementSibling

const e = document.getElementById('apple');
const nextSibling = e.nextElementSibling;
nextSibling.style.backgroundColor = "red";





// .previousElementSibling

const f = document.getElementById('potato');
const previouSibling = f.previousElementSibling;
previouSibling.style.backgroundColor = "green";





// .perentElement

const g = document.getElementById('potato');
const parent = g.parentElement;
parent.style.backgroundColor = "blue";


