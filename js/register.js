document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const pass1 = document.getElementById("password").value;
        const pass2 = document.getElementById("password2").value;

        if (email === "" || pass1 === "" || pass2 === "") {
            alert("Omple tots els camps");
            return;
        }

        if (pass1 !== pass2) {
            alert("Les contrasenyes no coincideixen");
            return;
        }

        const usuari = {
            email: email,
            password: pass1
        };

        localStorage.setItem("usuari", JSON.stringify(usuari));

        alert("Registre completat correctament");
        window.location.href = "compte.html";
    });
});
