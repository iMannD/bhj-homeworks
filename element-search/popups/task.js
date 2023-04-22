document.getElementById('modal_main').classList.add('modal_active')
let activePop = document.getElementsByClassName('modal_active')
activePop.getElementsByClassName('modal__close')[0].onclick = activePop.classList.remove('modal_active')
// так как больше одного такого в одном диве не будет

let showSuccess = document.querySelector('show-success')
showSuccess.onclick = document.getElementById('modal_success').classList.add('modal_active')

