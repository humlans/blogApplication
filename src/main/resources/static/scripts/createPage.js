


function createBlogPost(){
    // Retrieves the DOM element for the title input field using its ID 'title' and assigns it to `titleForm`.
    // Retrieves the DOM element for the blog post content input field using its ID 'textContent' and assigns it to `textContentForm`.
    // Retrieves the DOM element for the date input field using its ID 'date' and assigns it to `dateForm`.
    // Retrieves the DOM element for the user ID input field using its ID 'userId' and assigns it to `userIdForm`.
    // Retrieves the DOM element that will display the response message using its ID 'messageResponse' and assigns it to `messageResponse`.
    const titleForm = document.getElementById("title");
    const textContentForm = document.getElementById("textContent");
    const dateForm = document.getElementById("date");
    const userIdForm = document.getElementById("userId");
    const messageResponse = document.getElementById("messageResponse");
    // Initializes a new XMLHttpRequest object to interact with servers through HTTP requests, assigned to `xhr`.
    const xhr = new XMLHttpRequest();
    // Configures the `xhr` object for a POST request to create a new blog post. The URL includes query parameters constructed from the values of the input fields for title, text content, date, and user ID.
    xhr.open("POST", "http://localhost:8080/blog-post/create-post?title=" + titleForm.value + "&textContent=" + textContentForm.value + "&date=" + dateForm.value + "&userId=" + userIdForm.value);
    // Sends the configured HTTP request to the server.
    xhr.send();
    // Sets the response type expected from the server to 'json', indicating that the response should be parsed as JSON.
    xhr.responseType = "json";

//Do not work correctly
    xhr.onload = () => alert(xhr.response);
    /*xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
          console.log(xhr.response);
          messageResponse.innerHTML = "Created blog post";
        }
        else {
          console.log(`Error: ${xhr.status}`);
          messageResponse.innerHTML = "Error something went wrong!";
        }
    };*/

}