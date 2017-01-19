try{
    console.log(document.getElementsByClassName("element")[0].innerText);
}catch(err){
    console.warn('Element konnte nicht gefunden werden!');
}

document.addEventListener('DOMContentLoaded', function () {
    console.info('DOM Content Laoded!');
    console.log("Element gefunden!", document.getElementsByClassName("element")[0].innerText);
});