//Variables
var text = 'Ein Text';
var number = 13;
var boolean = true;
//Arrays können auch Elemente unterschiedlicher Datentypen enthalten
//Bsp.: ['eins', true, 35]
var array = ['eins', 'zwei'];

//Ein Objekt besteht immer aus Key/Value-Paaren
var object = {
    key: 'value',
    another: false,
    test: array,
    fahren: function () {
        return false;
    }
};
//Möglichkeiten/Schreibweisen um auf den Wert eines Key in einem Objekt zuzugreifen
console.green(object.key, 'Objektzugriff');
console.green(object['test'], 'Objektzugriff');
//Zugriff auf Funktion fahren
object.fahren();
//Zugriff auf einen Key der in einer Variable gespeichert ist
var key = 'another';
console.green(object[key], 'Objektzugriff');

//Auch Mehrdimensionale Arrays sind möglich
var mehrdimensional = [['val 1', 'val 2'], ['val 21', 'val 22']];
for (var i = 0; i < mehrdimensional.length; i++) {
    for (var j = 0; j < mehrdimensional[i].length; j++) {
        console.green(mehrdimensional[i][j], 'Mehrdimensionales Array');
    }
}
//Auch Objekte in Arrays sind möglich
var objectArray = [
    {
        key: 'Der Wert',
        another: false
    },
    {
        key: 'Ein Wert',
        another: true
    }
];
//Zugriff z.B. über Arrayindex und Objekt key
console.green(objectArray[0].key, 'Objekt in Array');
//Iteration mit forEach über Array
objectArray.forEach(function (element) {
    console.green(element.key + ' | ' + element.another, 'For each')
});


//Dynamic type binding
//Sollte nicht gemacht werden, Variablen sollten immer den selben Datentyp haben!
console.green(typeof text, 'Typeof'); // ==> Ist string
text = false;
console.green(typeof text, 'Typeof'); // ==> Ist boolean
text = 13;
console.green(typeof text, 'Typeof'); // ==> Ist number

//Functions
//Funktion welche zu Beginn im anderen Dokument deklariert wurde kann aufgerufen werden
externeFunktion();
//Funktion ohne Parameter und Rückgabewert, kann von überall aufgerufen werden
function testen() {
    //Do something
    alert('Getestet!');
}

//Funktion mit 2 Parametern und Rückgabewert
function testenMitParameter(param1, param2) {
    return param1 + param2;
}

//Vergleichsoperatoren
//Überprüfung mit zwei = ob der Inhalt der beiden Variablen der selbe ist
if ('13' == 13) {
    // ==> Ist true da Inhalt bei beiden 13 ist
}
//Überprüfung mit drei = ob Inhalt und Datentyp übereinstimmen
if ('13' === 13) {
    // ==> Ist false da der Datentyp bei '13' string ist und bei 13 number ist
}
//Bsp. Ausgaben
console.green('13' == 13, 'Vergleichsoperatoren');
console.green('13' === 13, 'Vergleichsoperatoren');
console.green('true' === true, 'Vergleichsoperatoren');

//Event Listener
//Zuerst wird das das Objekt des Elements geholt, welchem der Event Listener hinzugefügt werden soll
//Anschließend wird dem Element mit addEventListener ein String und eine Anonyme Funktion übergeben
//Der String mit dem Namen auf welches Event gehört werden soll
//Die anonyme Funktion, welche ausgeführt werden soll wenn das Event (hier 'click') gehört wurde
var el = document.getElementById('mein');
el.addEventListener('click', function () {
    console.green('Mein geklickt', 'Event Listener');
});

//Element DOM Hinzufügen
//Um ein neues Element dem DOM hinzuzufügen muss zuerst ein Objekt des Elements erstellt werden, welches dem Dom hinzugefügt werden soll
//Anschließend dem neuen Element z.B. Eigenschaften hinzufügen
//Mit der querySelector Methode wird ein Element gesucht, welches auf den CSS-Selektor 'body' passt
//Dem Element wird mit appendChild das neu erstellte Element hinzugefügt
var newElement = document.createElement('p');
newElement.innerHTML = 'Meine Nachricht';
document.querySelector('body').appendChild(newElement);

//Asynchronität
//Die Funktion waitForSth wird aufgerufen, welche 500ms wartet und dann eine Konsolenausgabe macht
//Nach dem Methodenaufruf wird eine Konsolenausgabe gemacht
//--> Konsoleausgabe nach dem Funktionsausrauf erscheint zuerst, JS wartet nicht bis waitForSth fertig ist
waitForSth();
console.green('Ausführen!', 'Asynchron');


function waitForSth() {
    setTimeout(function () {
        console.green('500ms gewartet', 'Asynchron')
    }, 500);
}