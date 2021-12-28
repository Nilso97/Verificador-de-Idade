function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var form_ano = document.getElementById('txtano')
    // Utilizando o .querySelector
    var res = document.querySelector('div#res')

    // Condições para preenchimento do "Ano de Nascimento"
    if (form_ano.value.length == 0 || Number(form_ano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(form_ano.value)
        var gênero = ''

        // Adicionando imagens dinamicamente dentro do JavaScript
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        /////////////////////////////////////////////////////////

        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/Bebê (Menino).jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/Jovem (Homem).jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/Adulto (Homem).jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/Idoso (Homem).jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/Bebê (Menina).jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/Jovem (Mulher).jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/Adulto (Mulher).jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/Idoso (Mulher).jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<strong>Detectamos:</strong> ${gênero} com ${idade} anos`

        // Adicionando elementos (Exibir foto na tela)
        res.appendChild(img)
    }

}
