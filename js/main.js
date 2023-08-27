const buttonsinopse = document.getElementById('ibuttonsinopse')
const sinopse = document.getElementById('isinopse')
const buttons = document.getElementById('ibuttons')


buttonsinopse.addEventListener('click', clicar)

function clicar(){
    if(sinopse.style.display === 'none'){
    buttons.style.display = ('none')
    sinopse.style.display = ('block')
    sinopse.style.transition = ('1s')
    }
    else{
        sinopse.style.display = ('block')
        buttons.style.display = ('none')
    
    }

}