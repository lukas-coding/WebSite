const header = document.getElementById('header');

window.addEventListener('scroll', function () {
    header.classList.toggle('sticky', window.scrollY > 100);

})

function toggle() {
    header.classList.toggle('active');
}