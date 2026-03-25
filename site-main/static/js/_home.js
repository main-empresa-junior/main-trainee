function reorganizarLayout() {
    const divIdea = document.querySelector("#ideia-codigo");
    const divTextoIdea = document.querySelector("#texto-codigo");
    const boxCode = document.querySelector(".code-box");
    const ideaH1 = divTextoIdea.querySelector("h1") || divIdea.querySelector("h1");

    if (window.innerWidth <= 768) {
        divIdea.prepend(ideaH1);
        divTextoIdea.appendChild(boxCode);
    } else {
        divTextoIdea.prepend(ideaH1);
        divIdea.appendChild(boxCode);
    }
}

reorganizarLayout();

window.addEventListener("resize", reorganizarLayout);
