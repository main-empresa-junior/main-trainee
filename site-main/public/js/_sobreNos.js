const divMissao = document.getElementById("missao");
const divVisao = document.getElementById("visao");
const divValores = document.getElementById("valores");
const paiCultura = document.getElementById("nossa-cultura");

// cria UMA vez só
const divTopicos = document.createElement('div');
divTopicos.id = 'topicos';

let estaAgrupado = false;

function reorganizarTopicos() {
    if (window.innerWidth <= 1550 && !estaAgrupado) {

        divTopicos.appendChild(divMissao);
        divTopicos.appendChild(divVisao);
        divTopicos.appendChild(divValores);
        paiCultura.appendChild(divTopicos);

        estaAgrupado = true;

    } else if (window.innerWidth > 1550 && estaAgrupado) {

        paiCultura.appendChild(divMissao);
        paiCultura.appendChild(divVisao);
        paiCultura.appendChild(divValores);

        divTopicos.remove(); // remove a div do DOM

        estaAgrupado = false;
    }
}

reorganizarTopicos();
window.addEventListener('resize', reorganizarTopicos);