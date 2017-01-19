//Variables
var text = 'Ein Text';
var number = 13;
var boolean = true;
var array = ['eins', 'zwei'];
var object = {
    key: 'value',
    another: false,
    test: array,
    fahren: function () { return false; }
};
console.log(object.key);
console.log(object['value']);
object.fahren();

//Dynamic type binding
console.log(typeof array);
text = false;
console.log(typeof text);
text = 13;
console.log(typeof text);

//Function
function testen() {
    //Do something
    alert('Getestet!');
}

//Vergleichsoperatoren
console.log('13' == 13);
console.log('13' === 13);
console.log('true' === true);

if('13' == 13){
    // ==> Ist true
}
if('13' === 13){
    // ==> Ist false
}

//Event Listener
var el = document.getElementById('mein');
el.addEventListener('click', function () {
    console.log('Mein geklickt')
});


// el.addEventListener('click', function () {
//     console.log('Mein geklickt')
// });

var newElement = document.createElement('p');
newElement.innerHTML = 'Meine Nachricht';
document.querySelector('body').appendChild(newElement);

//Async
waitForSth();
console.log('Ausführen!');


function waitForSth() {
    setTimeout(function () {
        console.log('500ms gewartet')
    }, 500);
}