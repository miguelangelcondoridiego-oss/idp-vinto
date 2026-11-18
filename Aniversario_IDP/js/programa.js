

/* =================================
   PROGRAMA DE ACTIVIDADES
================================= */

function mostrarPrograma(id) {

    document.getElementById("lista-programas").hidden = true;

    document.querySelectorAll(".detalle-programa").forEach(function(programa) {
        programa.hidden = true;
    });

    document.getElementById(id).hidden = false;

    document.getElementById("programa").scrollIntoView({
        behavior: "smooth"
    });
}

function mostrarLista() {

    document.querySelectorAll(".detalle-programa").forEach(function(programa) {
        programa.hidden = true;
    });

    document.getElementById("lista-programas").hidden = false;

    document.getElementById("programa").scrollIntoView({
        behavior: "smooth"
    });
}


/* =================================
   NUESTRA HISTORIA
================================= */

function mostrarHistoria(id) {

    document.getElementById("tarjetasHistoria").hidden = true;

    document.querySelectorAll(".detalle-historia").forEach(function(detalle) {
        detalle.hidden = true;
    });

    document.getElementById("historia-" + id).hidden = false;

    document.getElementById("historia").scrollIntoView({
        behavior: "smooth"
    });
}

function mostrarListaHistoria() {

    document.querySelectorAll(".detalle-historia").forEach(function(detalle) {
        detalle.hidden = true;
    });

    document.getElementById("tarjetasHistoria").hidden = false;

    document.getElementById("historia").scrollIntoView({
        behavior: "smooth"
    });
}
