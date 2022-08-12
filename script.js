function verificar() {
    let verfidade = document.getElementById('idade') 
    if (verfidade.value >= 18) {
        alert('Você pode participar do curso!')
    } else {
        alert('Infelizmente você não pode participar do curso.')
    }

}
