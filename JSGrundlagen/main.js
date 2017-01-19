//Try catch zur Veranschaulichung das Element nicht gefunden werden kann da DOM noch nicht geladen wurde
try{
    console.log(document.getElementsByClassName("element")[0].innerText);
}catch(err){
    console.warn('Element konnte nicht gefunden werden!');
}

//dem globalen document Objekt einen Event Listener hinzufügen, welcher ausgeführt wird wenn der DOM geladen wurde --> Element kann gefunden werden
document.addEventListener('DOMContentLoaded', function () {
    console.info('DOM Content Laoded!');
    console.log("Element gefunden!", document.getElementsByClassName("element")[0].innerText);
});

//Funktion wird in Datei im <head> definiert, steht somit später stehendem JavaScript zur Verfügung
function externeFunktion(){
    console.warn('Ich komme aus einem anderen Dokument!');
}