function reorganizarLayout() {
    const divIdea = document.querySelector("#ideia-codigo");
    const divTextoIdea = document.querySelector("#texto-codigo");
    const boxCode = document.querySelector(".code-box");
    const ideaH1 = divTextoIdea.querySelector("h1") || divIdea.querySelector("h1");

    const iconsAura = document.querySelectorAll(".icon-aura");
    const descs = document.querySelectorAll(".descricao");
    const spaceResponsives = document.querySelectorAll(".space-responsive");

    const imagensMobile = [
        "/imagens/mini-main-branco.svg",
        "/imagens/terminal-branco.svg",
        "/imagens/star-branco.svg"
    ];

    const imagensDesktop = [
        "/imagens/mini-main-aura.svg",
        "/imagens/terminal-aura.svg",
        "/imagens/star-aura.svg"
    ];

    if (window.innerWidth <= 768) {
        divIdea.appendChild(boxCode);
        divTextoIdea.prepend(ideaH1);

        iconsAura.forEach((icon, index) => {
            descs[index].appendChild(icon);
            icon.querySelector("img").src = imagensMobile[index];
        });
    } else {
        divIdea.appendChild(boxCode);
        divTextoIdea.prepend(ideaH1);

        iconsAura.forEach((icon, index) => {
            spaceResponsives[index].appendChild(icon);
            icon.querySelector("img").src = imagensDesktop[index];
        });
    }
}

reorganizarLayout();
window.addEventListener("resize", reorganizarLayout);