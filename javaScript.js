let frase = document.getElementById("texto-ingresado");
const botonE = document.getElementById("btn-encriptar");
const botonD = document.getElementById("btn-desencriptar");
const botonC = document.getElementById("btn-copiar");
const resultado = document.getElementById("resultado");
let para = document.createElement("p");
let res = "";

function cifrar() {
    res = frase.value;
    res = res.replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");
    return res;
}

function descifrar() {
    res = frase.value;
    res = res.replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");
    return res;
}

function mostrarResultado() {
    document.getElementById('mensaje').style = 'display:none';
    document.getElementById('btn-copiar').style = 'display:inline-block';
    document.getElementById('texto-modificado').innerText = res; 
}

function copiarTexto() {
    navigator.clipboard.writeText(res);
}
    
frase.addEventListener("input", function () {
    let inputValue = frase.value;
    inputValue = inputValue.toLowerCase().replace(/[^a-z\s]/g, ""); // Convertir a minúsculas y quitar caracteres no permitidos
    frase.value = inputValue;
    }
);
    
botonE.addEventListener("click", function () {
    cifrar();
    mostrarResultado();
}
)
    
botonD.addEventListener("click", function () {
    descifrar();
    mostrarResultado();
    }
)

botonC.addEventListener("click", function() {
    copiarTexto();
    }
)