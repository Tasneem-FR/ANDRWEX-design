var anchorLink = document.querySelector("a[href='#the-team']"),
target = document.getElementById("the-team");
anchorLink.addEventListener("click", function(e) {
    if (window.scrollTo) {
        e.preventDefault();
        window.scrollTo({"behavior": "smooth", "top": target.offsetTop});
    }
})

