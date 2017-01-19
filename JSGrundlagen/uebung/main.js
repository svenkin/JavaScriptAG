var names = [
    {name: 'Hans', password: 'test'},
    {name: 'Peter', password: 'test'}
];

document.getElementById('check').addEventListener('click', function () {
    var name = document.getElementById('name').value;
    var password = document.getElementById('password').value;
    var found = false;
    names.forEach(function (element) {
        if (name === element.name) found = true;
    });
    if (!found) {
        names.push({
            name: name,
            password: password
        });
        console.info('Benutzer konnte dem Array hinzugefügt werden!');
    } else {
        console.warn('Benutzer ist schon vorhanden!')
    }
    console.log(names)
});