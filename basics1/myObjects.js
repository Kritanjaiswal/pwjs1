const user={
    username: "kritan",
    "first name": 'Kritan',
    surname: "Jaiswal",
    email: 'kritanjaiswal9998@gmail.com',
    age: 21,
    coffee: ["capchinno", "hot", "cold"],
    admin: true,
    address: {
        state: "UttarPradesh",
        city: "Ghaziabad"
    }
}
const anotheruser=user    // We can copy the entire user data into anotheruser
console.log(user.age);
console.log(user['age']);
console.log(user.coffee[2]);
console.log(user.address.city);
console.log(user['address']['city']);
console.log(user['address']['city']);

//lets modifi the email
user.email='kritankumar99@gmail.com';
console.log(user);
console.log(anotheruser);


delete user.email;  // How can we delete some data from the object
console.log(user);
console.log(user['first name']);


// How can we print the keys in our object
console.log(Object.keys(user));   // Basically it return in the form of array



// How can we get the values of our keys in object
console.log(Object.values(user));


// How can we know all the entries
console.log(Object.entries(user));
console.log(user.hasOwnProperty('coffee'));
console.log(user.hasOwnProperty('Money'));