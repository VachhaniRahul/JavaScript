const myCheckBox = document.getElementById('myCheckBox');
const visabtn = document.getElementById('visabtn');
const mastercard = document.getElementById('mastercard');
const paytm = document.getElementById('paytm');
const submit = document.getElementById('submit');
const result = document.getElementById('result');
const paymetResult = document.getElementById('paymetResult');

submit.onclick = function(){
    if(myCheckBox.checked){
        result.textContent = "you have subcribed";
    }
    else{
        result.textContent = "you have not subcribed";
    }

    if(visabtn.checked){
        paymetResult.textContent = "Your have choose visa";
    }
    else if(mastercard.checked){
        paymetResult.textContent = "Your have choose mastercard ";
    }
    else if(paytm.checked){
        paymetResult.textContent = `Your have choose paytm `;

    }
    else{
        paymetResult.textContent = "Your have not choose ";

    }

    

}


