const edit = document.getElementById("edit");
const homePage = document.getElementById("homePage");
const create = document.getElementById("create");


homePage.addEventListener("click",
    function() {
        window.location = "homepage";
    }
);
edit.addEventListener("click",
    function() {
        window.location = "editpage";
    }
);
create.addEventListener("click",
    function() {
        console.log("test");
        window.location = "createpage";
    }
);

// Copyright year update in footer.
document.getElementById('currentYear').textContent = new Date().getFullYear();

