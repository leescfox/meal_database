function sendLetter(event) {
    event.preventDefault()
    fetchFunction('f', event.target.textContent)
}

function fetchFunction(letter, value) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?${letter}=${value}`)
        .then(response => response.json())
        .then(data => {
            localStorage.setItem('items', JSON.stringify(data.meals))
            if (window.location.pathname !== '/list_of_meals.html') {
                window.location.href = '/list_of_meals.html'
            } else if (data.meals === null) {
                noSuitable()
            } else {
                renderMeals(data.meals)
            }
        })
}

function renderMeals(meals) {
    document.querySelector('.no_suitable').textContent = ''
    const meal_items = document.querySelector('.meal_items')
    meal_items.innerHTML = ''
    meals.forEach(item => {
        const itemBlock = document.createElement('div')
        itemBlock.classList.add('food_item')
        const link = document.createElement('a')
        link.classList.add('meal_link')
        link.addEventListener('click', (event) => {
            event.preventDefault()
            localStorage.setItem('meal', JSON.stringify(item))
            window.location.href = '/meal.html'
        })
        link.innerHTML = `
        <img src="${item.strMealThumb}" class="meal_img">
        <div class="meal_name">${item.strMeal}</div>`
        itemBlock.append(link)
        meal_items.append(itemBlock)
    })
}

function noSuitable() {
    document.querySelector('.meal_items').innerHTML = ''
    document.querySelector('.no_suitable').textContent = 'There are no suitable dishes :('
}

function loadAndStart() {
    if (window.location.pathname === '/list_of_meals.html') {
        const items = JSON.parse(localStorage.getItem('items'))
        if (items !== null) {
            renderMeals(items)
        } else {
            noSuitable()
        }
    }

    if (window.location.pathname === '/index.html') {
        document.querySelector('.random').addEventListener('click', fetchRandomMeal)
    }

    const letters = document.querySelectorAll('.letter')
    letters.forEach(item => {
        item.addEventListener('click', sendLetter)
    })

    const searchForm = document.querySelectorAll('.search_div')
    searchForm.forEach(form => {
        form.addEventListener('submit', event => {
            event.preventDefault()
            fetchFunction('s', form.querySelector('.search_input').value)
        })
    })
}

function fetchRandomMeal() {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(response => response.json())
        .then(data => {
            localStorage.setItem('meal', JSON.stringify(data.meals[0]))
            window.location.href = '/meal.html'
        })
}

document.addEventListener('DOMContentLoaded', loadAndStart)