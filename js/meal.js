function checkMeal() {
    const meal = JSON.parse(localStorage.getItem('meal'))
    if (meal !== null) {
        printMeal(meal)
    }
}

function add_ingredient(list, ingr, measure) {
    const item = document.createElement('li')
    item.classList.add('ingr_li')
    item.textContent = `${ingr} - ${measure}`
    list.append(item)
}

function printMeal(dish) {
    document.querySelector('.meal_img_div').innerHTML = `
    <div class="dish_name">${dish.strMeal}</div>
    <img src="${dish.strMealThumb}" class="dish_img">`

    const recipe = document.querySelector('.recipe')
    recipe.textContent = dish.strInstructions

    const ingr_list = document.querySelector('.ingredients_list')
    if (dish.strIngredient1 !== "" && dish.strIngredient1 !== null) {
        add_ingredient(ingr_list, dish.strIngredient1, dish.strMeasure1)
    }
    if (dish.strIngredient2 !== "" && dish.strIngredient2 !== null) {
        add_ingredient(ingr_list, dish.strIngredient2, dish.strMeasure2)
    }
    if (dish.strIngredient3 !== "" && dish.strIngredient3 !== null) {
        add_ingredient(ingr_list, dish.strIngredient3, dish.strMeasure3)
    }
    if (dish.strIngredient4 !== "" && dish.strIngredient4 !== null) {
        add_ingredient(ingr_list, dish.strIngredient4, dish.strMeasure4)
    }
    if (dish.strIngredient5 !== "" && dish.strIngredient5 !== null) {
        add_ingredient(ingr_list, dish.strIngredient5, dish.strMeasure5)
    }
    if (dish.strIngredient6 !== "" && dish.strIngredient6 !== null) {
        add_ingredient(ingr_list, dish.strIngredient6, dish.strMeasure6)
    }
    if (dish.strIngredient7 !== "" && dish.strIngredient7 !== null) {
        add_ingredient(ingr_list, dish.strIngredient7, dish.strMeasure7)
    }
    if (dish.strIngredient8 !== "" && dish.strIngredient8 !== null) {
        add_ingredient(ingr_list, dish.strIngredient8, dish.strMeasure8)
    }
    if (dish.strIngredient9 !== "" && dish.strIngredient9 !== null) {
        add_ingredient(ingr_list, dish.strIngredient9, dish.strMeasure9)
    }
    if (dish.strIngredient10 !== "" && dish.strIngredient10 !== null) {
        add_ingredient(ingr_list, dish.strIngredient10, dish.strMeasure10)
    }
    if (dish.strIngredient11 !== "" && dish.strIngredient11 !== null) {
        add_ingredient(ingr_list, dish.strIngredient11, dish.strMeasure11)
    }
    if (dish.strIngredient12 !== "" && dish.strIngredient12 !== null) {
        add_ingredient(ingr_list, dish.strIngredient12, dish.strMeasure12)
    }
    if (dish.strIngredient13 !== "" && dish.strIngredient13 !== null) {
        add_ingredient(ingr_list, dish.strIngredient13, dish.strMeasure13)
    }
    if (dish.strIngredient14 !== "" && dish.strIngredient14 !== null) {
        add_ingredient(ingr_list, dish.strIngredient14, dish.strMeasure14)
    }
    if (dish.strIngredient15 !== "" && dish.strIngredient15 !== null) {
        add_ingredient(ingr_list, dish.strIngredient15, dish.strMeasure15)
    }
    if (dish.strIngredient16 !== "" && dish.strIngredient16 !== null) {
        add_ingredient(ingr_list, dish.strIngredient16, dish.strMeasure16)
    }
    if (dish.strIngredient17 !== "" && dish.strIngredient17 !== null) {
        add_ingredient(ingr_list, dish.strIngredient17, dish.strMeasure17)
    }
    if (dish.strIngredient18 !== "" && dish.strIngredient18 !== null) {
        add_ingredient(ingr_list, dish.strIngredient18, dish.strMeasure18)
    }
    if (dish.strIngredient19 !== "" && dish.strIngredient19 !== null) {
        add_ingredient(ingr_list, dish.strIngredient19, dish.strMeasure19)
    }
    if (dish.strIngredient20 !== "" && dish.strIngredient20 !== null) {
        add_ingredient(ingr_list, dish.strIngredient20, dish.strMeasure20)
    }
}

document.addEventListener('DOMContentLoaded', checkMeal)