function encriptar () {
    let texto = document.getElementById("texto").value;
    let titul = document.getElementById ("titulo");
    let parrafo = document.getElementById ("parrafo");
    let uno = document.getElementById ("uno");

    let textoNuevo = texto
    .replace(/a/gi, "dair")
    .replace(/e/gi, "ipes")
    .replace(/i/gi, "sei")
    .replace(/o/gi, "juber")
    .replace(/u/gi, "iep");
    
    if(texto = document.getElementById("texto").value.length != 0) {
        texto = document.getElementById("texto").value = textoNuevo;
        document.getElementById ("titulo").textContent = "Encriptado";
        ocument.getElementById ("parrafo").textContent ="";
        document.getElementById ("uno").src ="./IMÁGENES/encriptado.png";
    } else {
        uno.src = "./IMÁGENES/alerta.jpg";
        alert ("Ingresa cualquier texto");
    }


    }
