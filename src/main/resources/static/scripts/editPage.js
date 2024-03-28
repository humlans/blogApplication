// Accesses the DOM element with the ID 'home' and assigns it to the variable `home`.
const home = document.getElementById("home");
// Accesses another DOM element with the ID 'homePage' and assigns it to the variable `homePage`.
const homePage = document.getElementById("homePage");

// Adds an event listener to `homePage` that listens for 'click' events. When clicked, it sets the window's location to "homepage", effectively redirecting the user to the homepage.
homePage.addEventListener("click",
    function() {
        window.location = "homepage";
    }
);
// Similarly, adds an event listener to `home` that listens for 'click' events. When `home` is clicked, it also redirects the user to the homepage by setting the window's location to "homepage".
home.addEventListener("click",
    function() {
        window.location = "homepage";
    }
);

// Defines a function `httpGet` that makes an HTTP GET request to fetch a blog post's details from a server.
function httpGet(){
      // Initializes a new XMLHttpRequest object to interact with servers through HTTP requests.
      const xhr = new XMLHttpRequest();
      // Configures the `xhr` object for a GET request to fetch a blog post with an ID of 1.
      xhr.open("GET", "http://localhost:8080/blog-post?id=1");
      // Sends the configured HTTP request to the server.
      xhr.send();
      // Sets the response type expected from the server to 'json'.
      xhr.responseType = "json";
      // Defines an onload event handler that is called when the XMLHttpRequest transaction completes successfully.
      xhr.onload = () => {
        // Checks if the request was successful (status 200) and readyState is 4 (request finished and response is ready).
        if (xhr.readyState == 4 && xhr.status == 200) {
          // Logs the JSON response from the server to the console.
          console.log(xhr.response);
          // Inserts a formatted HTML snippet into the DOM element with ID 'testP', displaying the blog post's title, content, date, ID, and userID.
          document.getElementById("testP").innerHTML = "<div style='margin-top:10px'><h2>" + xhr.response.title + "</h2>" +
                                                        "<p>" + xhr.response.textContent + "</p>"+
                                                        "<p>Date: " + xhr.response.date + ", id: " +
                                                        xhr.response.id + ", userId: " + xhr.response.userId
                                                        + "</p></div>";
        }
        // Logs an error message to the console if the request failed.
        else {
          console.log(`Error: ${xhr.status}`);
        }
    };
}