function verificar() {
    var date = new Date()
    var ano = date.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
     window. alert('[ERROR] Verifique os datos e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada ${idade}`
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src','fotocriançamenino.png')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src','jovemmenino.png')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src','fotohomemadulto.png')
            } else {
                //Idoso
                img.setAttribute('src','fotoidosomasculino.png')
            }
        } else if(fsex[1].checked) {
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src','fotocriançamenina.png')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src','jovemmenina.png')
            } else if (idade < 50){
                //Adulta
                img.setAttribute('src','fotomulheradulta.png')
            } else {
                //Idosa
                img.setAttribute('src','fotoidosafeminino.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}