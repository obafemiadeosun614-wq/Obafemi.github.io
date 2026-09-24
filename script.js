document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("#contactForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.querySelector("#name").value;

        alert("Thanks " + name + "! Your message has been received.");

        form.reset();
    });

});