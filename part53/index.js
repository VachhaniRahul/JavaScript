//  create html element by javascript


// step 1 = create the element
const myh1 = document.createElement('h1');

//step 2 = add atributes / properties
myh1.textContent = 'hello Rahul';

myh1.id = "myh1";
myh1.style.textAlign = 'center';
myh1.style.fontFamily = 'Arial';
myh1.style.color = 'tomato';


// step 3 = append element to dom
document.body.append(myh1);
// document.body.prepend(myh1);


// document.getElementById('box1').append(myh1);
// document.getElementById('box1').prepend(myh1);


// document.getElementById('box4').append(myh1);

// const box = document.getElementById('box1');
// document.body.insertBefore(myh1, box);

// const box = document.getElementById('box4');
// document.body.insertBefore(myh1, box);




// step 4 = remove the element

// document.body.removeChild(myh1);

// document.getElementById('box1').append(myh1);
// document.getElementById('box1').removeChild(myh1);





