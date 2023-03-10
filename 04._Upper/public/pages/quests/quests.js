//boredapi.com
// festch from boredapi and console log it

/*// make a GET request to the API endpoint using fetch
fetch('http://www.boredapi.com/api/activity/')
  .then(response => response.json()) // parse the response body as JSON
  .then(data => console.log(data)) // log the JSON data to the console
  .catch(error => console.error(error)); // log any errors to the console */

  // select the HTML element to write the response into
const questElement = document.getElementById("quest");

// make a GET request to the API endpoint using fetch
fetch("http://www.boredapi.com/api/activity/")
  .then((response) => response.json()) // parse the response body as JSON
  .then((data) => {
    // write the activity from the response into the quest element
    questElement.innerText = data.activity;
  })
  .catch((error) => console.error(error)); // log any errors to the console
