function toggleMenu() {
    const container = document.querySelector('.container');

    container.addEventListener('click', function (e) {
        this.classList.toggle('change')
    })
}

toggleMenu()