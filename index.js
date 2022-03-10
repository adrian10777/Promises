//PROMISES

// a promise represents a value that is unknown now that may become known in the future

// promise manages a single asynchronous value that can be handled in the future
    // think of it like a ride app like uber, when u request a ride the driver makes
    // a promise to give you a ride, while waiting the ride is pending, in the future
    // if all goes according to plan the driver will resolve to pick u up then take u somehwere
    // at which point ur ride has been fulfilled.
    // But in some cases the driver might reject ur ride in which case you'll need to catch one somewhere else,
    // either way the og request is now finally settled
    // as a developer u might want to create a promise to represent an asynchronous value
    // but more often than not you'll be consuming promises to use the result of an asynchronous
    // operation in ur code. 

//creating promise
    // when constructed a promise starts off in a pending state, its ur job to define a callback func
    // called an executor that defines when to resolve or reject the promoise, this is where u would
    //kick off ur async work, on the other side the consumer of the promise has called its then method
    // its waiting for the async value to be fulfilled, when it happens it will call this func
    // with the value as its arg, we fulfill th epromise by calling resolve, but theres always the
    //possibility of an exception in theat case we can reject the promise and send the error back to the
    //consumer which can use the  catch method in an entirely diff func for handling exceptions
    //and if u want to just run some code, u can use finally to handle both possibilities
    // promises can be chained together to handle multiple async operations

    //create
    /* const ride = new Promise((resolve, reject) => {

        if (arrived) {

            resolve('driver arrived');

        } else {

            reject('driver bailed')
        }
    }); */

    //using promises (consume)
   /*  ride
    .then(value => {

        console.log(value);

        // driver arrived
    })

    .catch(error => {
        console.log(error);

        //driver bailed
    }) 

    // just want to run code no matter what?

    .catch(error => {
        console.log(error);

        //driver bailed
    
    })

    .finally( () => {
        console.log('all settled');
    }) */

// Promises

//A promise in JS is like a promise in real life
    // u commit to something by saying I promise to do something
    //then that promise has either 2 results, either its completed (resolved) or it has failed(rejected)
    //if u do ur promise u have resolved, if u failed u rejected

let p = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a == 2) {
        resolve('Success')
    } else {
        reject('Failed') //pass anything back into this reject
    }

});

p.then((message) => {
    console.log('This is in the then ' + message)
}).catch((message) => {
    console.log('This is in the catch' + message)
});

//promises are meant to replace callbacks

/* const userLeft = false;
const userWatchingCatMeme = false;

function watchTutorialCallback(callback, errorCallback) {
    if (userLeft) {
        errorCallback({
            name: 'User Left',
            message: ':{'
        })
    } else if (userWatchingCatMeme) {
        errorCallback({
            name: 'User Watching Cat Meme',
            message: 'webDevSimplified < Cat'
        })
    } else {
        callback('Thumbs up and Subscribe')
    }
}

watchTutorialCallback((message) => {
    console.log('success: ' + message)
}, (error) => {
    console.log(error.name + ' ' + error.message)
}) */

/* function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: 'User Left',
                message: ':{'
            })
        } else if (userWatchingCatMeme) {
            reject({
                name: 'User Watching Cat Meme',
                message: 'webDevSimplified < Cat'
            })
        } else {
            resolve('Thumbs up and Subscribe')
        }
    })
}

watchTutorialPromise().then((message) => {
    console.log('success: ' + message)
}).catch((error) => {
    console.log(error.name + ' ' + error.message)
}) */

c/* onst recordVideoOne = new Promise((resolve, reject) => {
    resolve(`Video 1 Recorded`)
})

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve(`Video 2 recorded`)
})

const recordVideoThree = new Promise((resolve, reject) => {
    resolve(`Video 3 recorded`)
});

Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((messages) => {
    console.log(messages);
});

//only 1 returned as soon as the 1st one finishes
Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((messages) => {
    console.log(messages);
}); */

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

// The promise obj represents the eventual completion (or failure) 
    // of an asynchronous operation and its resulting value.

// A promise is a proxy for a value not necessarily known when the promise is created. 
    //it allows u to associate handlers with an asynchronous actions eventual success
    //value or failure reason.
    //This lets asynchronous methods return values like synchronous methods
    //Instead of immedeiately returning the final value, the asynchronous method
    // return a promis to supply the value at some point in the future

    