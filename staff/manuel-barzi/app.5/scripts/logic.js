// database

var users = []
var stickies = []

// populate the database

var user = {
    name: 'Pepito Grillo',
    age: 50,
    email: 'pepito@grillo.com',
    password: '123123123'
}

users.push(user)

var user = {
    name: 'Wendy Darling',
    age: 18,
    email: 'wendy@darling.com',
    password: '123123123'
}

users.push(user)

var user = {
    name: 'Peter Pan',
    age: 21,
    email: 'peter@pan.com',
    password: '123123123'
}

users.push(user)

// console.log(users)

var sticky = {
    text: 'hola mundo',
    visibility: 'private',
    user: 'pepito@grillo.com'
}

stickies.push(sticky)

var sticky = {
    text: 'hello world',
    visibility: 'public',
    user: 'wendy@darling.com'
}

stickies.push(sticky)

var sticky = {
    text: 'hello world',
    visibility: 'public',
    user: 'peter@pan.com'
}

stickies.push(sticky)

// console.log(stickies)

// business logic

/**
 * Registers a user in the database
 * 
 * @param {string} name The user full name
 * @param {number} age The user age
 * @param {string} email The user email
 * @param {string} password The user password
 */
function registerUser(name, age, email, password) {
    // TODO implement me

    if (age < 18) throw new Error('User is under 18 years old')

    for (var i = 0; i < users.length; i++) {
        var user = users[i];

        if (user.email === email) throw new Error('User already registered')
    }

    var user = {
        name,
        age,
        email,
        password
    }

    users.push(user)
}

// tests

registerUser('John Doe', 35, 'john@doe.com', '123123123')
// console.log(users)

registerUser('Jane Doe', 29, 'jane@doe.com', '123123123')
// console.log(users)

try {
    registerUser('John Doe', 35, 'john@doe.com', '123123123')
} catch(error) {
    // console.error(error.message)
}

try {
    registerUser('Andy Garcia', 15, 'andy@garcia.com', '123123123')
} catch(error) {
    // console.error(error.message)
}

// console.log(users)

/**
 * Authenticates a user against database
 * 
 * @param {string} email The user's email address
 * @param {string} password The user's password
 */
function authenticateUser(email, password) {
    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        // if (user.email === email && user.password === password) {
        //     return
        // }

        // if (user.email === email && user.password === password) 
        //     return

        if (user.email === email && user.password === password) return
    }

    throw new Error('Wrong credentials')
}

// tests

authenticateUser('pepito@grillo.com', '123123123')

try {
    authenticateUser('pepito@grillo.com', '_123123123')
} catch(error) {
    // console.error(error.message)
}

try {
    authenticateUser('pepito@grill.com', '123123123')
} catch(error) {
    // console.error(error.message)
}


/**
 * Creates a new sticky in the database
 * 
 * @param {string} user The user the sticky belongs to
 * @param {string} text The text of the sticky
 * @param {string} visibility The visibility of the sticky
 */
function createSticky(user, text, visibility) {
    // TODO: implement me
}

// tests

createSticky('peter@pan.com', 'hello wendy', 'public')
// console.log(stickies)

createSticky('wendy@pdarling.com', 'hello peter ,)', 'public')
// console.log(stickies)

/**
 * Retrieves the public stickies from all users that publish them
 * 
 * @return {array} The public stickies
 */
function retrievePublicStickies() {
    var publicStickies = []

    for (var i = 0; i < stickies.length; i++) {
        var sticky = stickies[i]

        if (sticky.visibility === 'public') 
            publicStickies.push(sticky)
    }

    return publicStickies
}

// tests

var results = retrievePublicStickies()
// console.log(results)