document.getElementById('modal_main').classList.add('modal_active')
let activePop = document.getElementsByClassName('modal_active')
activePop.getElementsByClassName('modal__close').onclick = activePop.classList.remove('modal_active')