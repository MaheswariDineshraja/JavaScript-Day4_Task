/*
GET --> Read application
*/

// XMLHttpRequest
console.log("JS file Executed");

// Create object (request) which is capable of making an API call
// request a data from restcountries.com
// request is not changable. make it as constant
const request = new XMLHttpRequest();

// open connection to destination or config details to HTTP request obj
request.open('GET', 'https://restcountries.com/v3.1/all'); //Read operation

// send the request to rest countries server
// we cant skip the send request
request.send(null);

//getting the response and unpacking
request.onload = function () {
    const response = JSON.parse(request.responseText);
    console.log(response);


for(var country of response){
    const {flag, } = country;
    console.log(flag);
}

for(var country of response){
    const {name, region, subregion, population} = country;
    console.log(name, name.common, region, subregion, population);
} 
}