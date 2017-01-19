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
        })
    }
    console.log(names)
});