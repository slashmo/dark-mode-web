const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
const darkModeStatusLabel = document.querySelector('#dark-mode-status')

function showCurrentDarkModeStatus() {
  darkModeStatusLabel.innerText = darkModeMediaQuery.matches ? 'Dark Mode' : 'Light Mode'
}

darkModeMediaQuery.addListener(() => {
  showCurrentDarkModeStatus()
})

showCurrentDarkModeStatus()
