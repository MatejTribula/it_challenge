const hamburgerIcon = document.getElementById('hamburgerIcon');
const hamburgerMenu = document.getElementById("hamburgerMenu");
const hamburgerCross = document.getElementById('hamburgerCross');

console.log(hamburgerMenu)

hamburgerIcon.addEventListener('click', () => {
    hamburgerMenu.classList.remove('hidden')
    console.log('ajoj')
})

hamburgerCross.addEventListener('click', () => {
    hamburgerMenu.classList.add('hidden')
    console.log('ajoj')
})



