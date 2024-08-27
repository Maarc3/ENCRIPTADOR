function encriptar() {
    let texto = document.getElementById("texto").value;
    let titulo = document.getElementById("titulo");
    let parrafo = document.getElementById("parrafo");
    let uno = document.getElementById("uno");

    if (texto.length !== 0) {
        let textoNuevo = texto
            .replace(/a/g, "dr")
            .replace(/e/g, "ps")
            .replace(/i/g, "sy")
            .replace(/o/g, "jbr")
            .replace(/u/g, "gp");

        document.getElementById("texto").value = textoNuevo;
        titulo.textContent = "Texto encriptado";
        parrafo.textContent = "";
        uno.src = "./IMÁGENES/encriptado.png";
    } else {
        uno.src = "./IMÁGENES/alerta.jpg";
        alert("Ingresa cualquier texto");
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let titulo = document.getElementById("titulo");
    let parrafo = document.getElementById("parrafo");
    let uno = document.getElementById("uno");

    if (texto.length !== 0) {
        let textoNuevo = texto
            .replace(/dr/g, "a")
            .replace(/ps/g, "e")
            .replace(/sy/g, "i")
            .replace(/jbr/g, "o")
            .replace(/gp/g, "u");

        document.getElementById("texto").value = textoNuevo;
        titulo.textContent = "Texto desencriptado";
        parrafo.textContent = "";
        uno.src = "./IMÁGENES/desencriptado.png";
    } else {
        uno.src = "./IMÁGENES/alerta.jpg";
        alert("Ingresa cualquier texto");
    }
}
