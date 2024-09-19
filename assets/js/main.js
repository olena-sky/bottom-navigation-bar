/*=============== EXPANDED LIST ===============*/
const navExpand = document.getElementById('nav-expand'),
  navExpendList = document.getElementById('nav-expand-list'),
  navExpendIcon = document.getElementById('nav-expand-icon')

navExpand.addEventListener('click', () => {
  // Expand list 
  navExpendList.classList.toggle('show-list')

  // Rotate icon 
  navExpendIcon.classList.toggle('rotate-icon')
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/