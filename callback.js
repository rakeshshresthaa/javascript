//i will call back later excuting initital function)

//function
function greet(name, callback) {
    console.log('hello${name}');
    callback();
}

//callback function
function callMe() {
    console.log('its a callback function');

}

//passing function as an agrument 
greet('peter', callMe);

// console aftee 2 sec delay
// settimeout{()=> console.log("Hello world"), 2000)
//setInterval(()=> console.log("Hello world"), 2000)
