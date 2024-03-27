const home = document.getElementById("home");
const homePage = document.getElementById("homePage");

homePage.addEventListener("click",
    function() {
        window.location = "homepage";
    }
);
home.addEventListener("click",
    function() {
        window.location = "homepage";
    }
);

function httpGet(){
    /*var xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                callback(xmlHttp.responseText);
                var y = JSON.parse(xmlHttp.responseText);
                console.log(xmlHttp);
                console.log(y);
                document.getElementById("testP").innerHTML = y[1].id;;
        }
        xmlHttp.open("GET", "http://localhost:8080/blog-post?id=1", true); // true for asynchronous
        xmlHttp.send(null);

    xmlHttp.open("GET", "http://localhost:8080/blog-post?id=1", false); // false for synchronous request
    console.log(xmlHttp.open("GET", "http://localhost:8080/blog-post?id=1", false));
    xmlHttp.send( null );
    return xmlHttp.responseText;*/

    const url = "http://localhost:8080/blog-post?id=1";
    fetch(url)
        .then(
            response => response.json() // .text(), etc.
            // same as function(response) {return response.json();}
        ).then(
            jsonString => {
                const json = JSON.parse(jsonString);
                document.getElementById("testP").innerHTML = json[1].id;
            }
        );
}