function name(param, param2, param3) {

}

// function with a parameter called name
function displayGreeting(name) { 
    // creating a new local variable that inserts the name into a string   
    const message = `Hello, ${name}!`; 
    // printing the variable to the console
    console.log(message);
}

displayGreeting('Christopher');
// displays "Hello, Christopher!" when run

function displayGreeting(name, salutation='Hello') {
    console.log(`${salutation}, ${name}`);
  }

  displayGreeting('Christopher');
// displays "Hello, Christopher"

displayGreeting('Christopher', 'Hi');
// displays "Hi, Christopher"


//        USE OF A CALLBACK

function displayDone() {
    console.log('Done!');
}

// timer value is in milliseconds
setTimeout(displayDone, 3000);



//        ANONYMOUS FUNCTIONS 

setTimeout(
    function() { // anonymous function
        console.log('Done!');
    },
    3000 // 3000 milliseconds (3 seconds)
)



//               ARROW FUNCTIONS

setTimeout(
    () => { // anonymous function
        console.log('Done!');
    },
    3000 // 3000 milliseconds (3 seconds)
)