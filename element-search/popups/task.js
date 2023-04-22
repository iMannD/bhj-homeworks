document.getElementById('modal_main').classList.add('modal_active')
let activePop = document.getElementsByClassName('modal_active')[0]
let modCloseElem = activePop.getElementsByClassName('modal__close')[0]
modCloseElem.onclick = () => activePop.classList.remove('modal_active')
let showSuccess = document.querySelector('.show-success')
showSuccess.onclick = () => document.getElementById('modal_success').classList.add('modal_active')

