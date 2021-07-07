const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-modal-close]')
const overlay = document.querySelector('.overlay')
const body = document.querySelector('body')
const bookmark = document.querySelector('.bookmark')
const radioInputs = document.querySelectorAll('[name="reward"]')

// Buttons functionality
openModalButtons.forEach(button => button.addEventListener('click', _ => {
  const modal = document.querySelector(button.dataset.modalTarget)
  openModal(modal)
  if (button.dataset.modalTarget === "#navbar-menu") { openNavbarMenu(modal) }
  if (button.dataset.index) { selectRadio(button.dataset.index) }
}))

const openModal = modal => {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
  body.classList.add('modal-open')
  body.addEventListener('keypress', event => {
    console.log(event)
  })
}
const openNavbarMenu = modal => {
  modal.closest('nav').classList.add('active')
}


closeModalButtons.forEach(button => button.addEventListener('click', event => {
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
  event.preventDefault()
  }
}))

const closeModal = (modal, check = false) => {
  if (modal == null) return
  modal.classList.remove('active')
  if (check) {
    return
  } else {
    overlay.classList.remove('active')
    body.classList.remove('modal-open')
    body.removeEventListener('keypress', escExitModal(event))
  }
}
const closeNavbarMenu = (modal, navbar) => {
  closeModal(modal)
  navbar.classList.remove('active')
}


bookmark.addEventListener('click', event => {
  const button = event.currentTarget 
  button.classList.toggle('bookmarked')
})

const selectRadio = index => {
  radioInputs[index].click()
}

// Radio functionality
radioInputs.forEach(button => button.addEventListener('click', _ => {
  radioInputs.forEach(radio => {
    const pledgeDiv = radio.parentElement.nextElementSibling
    pledgeDiv.classList.remove('active')
    if (radio.checked) { pledgeDiv.classList.add('active') }
  })
}))

// keyboard 
const escExitModal = (event) => {
  console.log(event)
}
