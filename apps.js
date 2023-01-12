function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minutos} horas`
    if (hora >= 0 && hora < 12){
        img.src = 'assets/images/circulomanha.png'
        document.body.style.background = "#5BC0F8"
    } else if (hora >= 12 && hora < 18) {
        img.src = 'assets/images/circulotarde.png'
        document.body.style.background = "#FEC868"
    } else {
        img.src = 'assets/images/circulonoite.png'
        document.body.style.background = "grey"
    }
}

