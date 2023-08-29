const buttonsinopse = document.getElementById('ibuttonsinopse')
const sinopse = document.getElementById('isinopse')
const buttons = document.getElementById('ibuttons')

const nav = document.getElementById('inav')
const iconbutton = document.getElementById('iicon')



buttonsinopse.addEventListener('click', clicar)
iconbutton.addEventListener('click',clicaricon)

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

function clicaricon(){
    if(nav.style.display === 'none'){
        nav.style.display = ('flex')
        buttons.style.marginTop = ('149px')
    }
    else{
        nav.style.display = ('none')
        buttons.style.marginTop = ('249px')
    }
    
    }

