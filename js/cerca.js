document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("cerca");
    const productes = document.querySelectorAll(".productes-grid article");

    input.addEventListener("input", () => {
        const valor = input.value.toLowerCase();

        productes.forEach(article => {
            const text = article.textContent.toLowerCase();
            article.style.display = text.includes(valor) ? "" : "none";
        });
    });
});
