document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        const usuariGuardat = JSON.parse(localStorage.getItem("usuari"));

        if (!usuariGuardat) {
            alert("No hi ha cap usuari registrat");
            return;
        }

        if (
            email === usuariGuardat.email &&
            password === usuariGuardat.password
        ) {
            localStorage.setItem("sessio", "iniciada");
            alert("Sessió iniciada correctament");
            window.location.href = "index.html";
        } else {
            alert("Email o contrasenya incorrectes");
        }
    });
});
