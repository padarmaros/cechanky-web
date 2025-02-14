// loader Start
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loader").classList.remove("hidden");

    setTimeout(function () {
        document.getElementById("loader").classList.add("hidden");
    }, 2000);
});
// loader End