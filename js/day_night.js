const btn = document.querySelector('.theme')

function theme_change() {
    document.querySelector('.home_link').classList.toggle('night_theme_a')
    document.querySelectorAll('.letter').forEach(item => {
        item.classList.toggle('night_theme_a')
    })
    document.querySelector('body').classList.toggle('night_theme_body')
    document.querySelector('.header').classList.toggle('night_theme_header_footer')
    document.querySelector('.footer').classList.toggle('night_theme_header_footer')
    btn.classList.toggle('dark')
    if (btn.classList.contains('dark')) {
        btn.innerHTML = `<i class="fa-solid fa-sun"></i> Light theme`
    } else {
        btn.innerHTML = `<i class="fa-solid fa-moon"></i>Dark theme`
    }
    localStorage.setItem('theme', btn.classList.contains('dark') ? 'dark' : 'light')
}

btn.addEventListener('click', theme_change)

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') {
        theme_change()
    }
})