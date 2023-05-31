function newUser (name, age, country) {
    var name = name || 'Santiago';
    var age = age || 28;
    var country = country || 'COL';
    console.log(name, age, country)
}
newUser();
newUser('David', 15, 'MEX')

// Santiago 28 COL
// David 15 MEX

function newAdmin(name = 'Santaigo', age = 32, country = 'CL') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('Jesika', '25', 'PE');
// Santaigo 32 CL
// Jesika 25 PE

function newAdmin(name = 'Santaigo', age = 32, country = 'CL') {
    console.log(name, age, country);
}

newAdmin();
newAdmin(25, 'Jesika', 'PE');
// Santaigo 32 CL
// 25 Jesika PE