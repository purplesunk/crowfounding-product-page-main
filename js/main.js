const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-modal-close]')
const overlay = document.querySelector('.overlay')

openModalButtons.forEach(button => button.addEventListener('click', _ => {
  const modal = document.querySelector(button.dataset.modalTarget)

  if (button.dataset.modalTarget === "#navbar-menu") {
    openNavbarMenu(modal)
  } else {
    openModal(modal)
  }
}))

closeModalButtons.forEach(button => button.addEventListener('click', _ => {
  if (button.dataset.modalClose === "#navbar-menu") {
    const navbar = button.closest('nav')
    const modal = navbar.querySelector('#navbar-menu')
    closeNavbarMenu(modal, navbar)
  } else {
    const modal = button.closest('.modal')
  
    if (button.dataset.modalTarget) {
      closeModal(modal, true)
    } else {
      closeModal(modal)
    }
  }
}))

const openModal = modal => {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

const openNavbarMenu = modal => {
  openModal(modal)
  modal.closest('nav').classList.add('active')
}

const closeModal = (modal, check = false) => {
  if (modal == null) return
  modal.classList.remove('active')
  if (check) {
    return
  } else {
    overlay.classList.remove('active')
  }
}

const closeNavbarMenu = (modal, navbar) => {
  closeModal(modal)
  navbar.classList.remove('active')
}
