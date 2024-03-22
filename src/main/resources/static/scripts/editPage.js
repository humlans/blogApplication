const home = document.getElementById("home");

home.addEventListener("click",
        function(event) {
            event.preventDefault();
            window.location = "homepage";
        }
    );