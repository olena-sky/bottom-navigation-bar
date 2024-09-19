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
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  const scrollDown = window.scrollY

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id'),
      sectionsClass = document.querySelector('.nav__list a[href*=' + sectionId + ']')

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link')
    } else {
      sectionsClass.classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)