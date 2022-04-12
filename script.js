
// // variables containing all clickable buttons
// var zero = document.getElementById('zero');
// var one = document.getElementById('one');
// var two = document.getElementById('two');
// var three = document.getElementById('three');
// var four = document.getElementById('four');
// var five = document.getElementById('five');
// var six = document.getElementById('six');
// var seven = document.getElementById('seven');
// var eight = document.getElementById('eight');
// var nine = document.getElementById('nine');
// //operators 
// var add = document.getElementById('add');
// var minus = document.getElementById('minus');
// var multiply = document.getElementById('multiply');
// var divide = document.getElementById('divide');
// var equals = document.getElementById('equals');
// var allClear = document.getElementById('all-clear');
// var changeSign = document.getElementById('change-sign');
// var percentage = document.getElementById('percentage');
// //display area



// // numbers on which operation will be performed
// var n1 = 0;
// var n2 = 0;




// function updateN1(digit) {
//     n1=n1*10+digit;
// }
// function updateTextArea() {
//     textArea.innerHTML = n1;
// }

// // zero.addEventListener('click' , updateN1(0));
// zero.addEventListener('click' , updateTextArea);
// // one.addEventListener('click' , updateN1(1));
// one.addEventListener('click' , updateTextArea);
// // two.addEventListener('click' , updateN1(2));
// two.addEventListener('click' , updateTextArea);
// // three.addEventListener('click' , updateN1(3));
// three.addEventListener('click' , updateTextArea);
// // four.addEventListener('click' , updateN1(4));
// four.addEventListener('click' , updateTextArea);
// // five.addEventListener('click' , updateN1(5));
// five.addEventListener('click' , updateTextArea);
// // six.addEventListener('click' , updateN1(6));
// six.addEventListener('click' , updateTextArea);
// // seven.addEventListener('click' , updateN1(7));
// seven.addEventListener('click' , updateTextArea);
// // eight.addEventListener('click' , updateN1(8));
// eight.addEventListener('click' , updateTextArea);
// // nine.addEventListener('click' , updateN1(9));
// nine.addEventListener('click' , updateTextArea);


// allClear.addEventListener('click', function(){
//     textArea.innerHTML = "";
//     n1=0;
//     n2=0;
// })
// changeSign.addEventListener('click', function() {
//     n1 *= -1;
//     textArea.innerHTML = n1;
// });
// percentage.addEventListener('click', function() {
//     n1 = n1/100;
//     textArea.innerHTML = n1;
// });


// // mathematical operations
// add.addEventListener('click',addFunction());
// minus.addEventListener('click', minusFunction());
// multiply.addEventListener('click', multiplyFunction());
// divide.addEventListener('click', divideFunction());



var textArea = document.getElementById('text-area');
var valueToBeEvaluated = "";

buttons = document.querySelectorAll('button');
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        // console.log(buttonText);
        if (buttonText == "AC") {
            valueToBeEvaluated = "";
            textArea.innerText = valueToBeEvaluated;
        }
        else if (buttonText == "=") {
            valueToBeEvaluated = eval(valueToBeEvaluated)
            textArea.innerText = valueToBeEvaluated;
            valueToBeEvaluated = "";
        }
        else if (buttonText == "+/-") {
            valueToBeEvaluated *= -1;
            textArea.innerText = valueToBeEvaluated;
        }
        else if (buttonText == "%") {
            valueToBeEvaluated /=100;
            textArea.innerText = valueToBeEvaluated;
        }
        else {
            valueToBeEvaluated += buttonText;
            textArea.innerText = valueToBeEvaluated;
        }        
    })
}
