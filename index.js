function leiaMais() { 
    var tresPontos= document.getElementById("tresPontos");
    var maisTexto= document.getElementById("moreText");
    var btnVerMais= document.getElementById("verMais");
    
    if(tresPontos.style.display === "none") {
        tresPontos.style.display = "inline";
        maisTexto.style.display = "none";
        btnVerMais.innerHTML = "Veja Mais"
    } else {
        tresPontos.style.display = "none";
        maisTexto.style.display = "inline";
        btnVerMais.innerHTML = "Veja Menos"
    }
}

function criarTopico() {
    var topic= document.getElementById("new-topic");
    var form= document.getElementById("form");

    if(topic.style.display === "none"){
        topic.style.display = "inline";
        form.style.display = "none";
    } else {
        topic.style.display = "none";
        form.style.display = "inline";
    }
}

function enviarForm() {
    var enviar= document.getElementById("form");
    var sentform= document.getElementById("sent")

    if(enviar.style.display === "none"){
        enviar.style.display = "inline";
        sentform.style.display = "none";
    } else {
        enviar.style.display ="none";
        sentform.style.display = "inline";
    }
}

function respostas() {
    var comentarios= document.getElementById("interacao");

    comentarios.style.display = "inline"
} 

function newTopic() {
    var sent = document.getElementById("sent");
    var form = document.getElementById("form");

    if(sent.style.display === "none") { 
        sent.style.display = "inline";
        form.style.display ="none";
    } else {
        sent.style.display = "none";
        form.style.display = "inline";
    }
}