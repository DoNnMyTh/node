var name = 'Amit';
var age = 24;
var hasHobbies = 'True';

let summeriseUser = (username, userage, userhasHobbies) => {
    return (
        'Name is ' +
        username +
        ', age is ' +
        userage +
        ' , User have Hobbies ' +
        userhasHobbies
    );
};

console.log(summeriseUser(name, age, hasHobbies));