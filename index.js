document.addEventListener('DOMContentLoaded', () => {
    let title = document.createElement('h1')
    title.innerText = 'Welcome to The Margarita Bar'
    title.id = 'title'
    document.body.appendChild(title)

    let menu = document.createElement('h2')
    menu.id = 'margMenu'
    menu.innerText = 'Margarita Menu'
    menu.style.textDecoration = 'underline'
    document.body.appendChild(menu)
    
    menu.addEventListener('click', () => {
        let h3 = document.createElement('h3')
        let ol = document.createElement('ol')
        

        fetch ('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
        .then ((resp) => resp.json())
        .then ((data) => {
            let dataArray = Object.values(data)
            dataArray.forEach((element) => {
                element.forEach((innerElement) => {
                    
                    let liName = document.createElement('li')
                    let name = innerElement.strDrink
                    liName.innerText = name
                    ol.appendChild(liName)

                    let ul = document.createElement('ul')
                    let liDrinkGlass = document.createElement('li')
                    let drinkGlass = innerElement.strGlass
                    liDrinkGlass.innerText = `Drink Glass: ${drinkGlass}`
                    ul.appendChild(liDrinkGlass)

                    let liInstructions = document.createElement('li')
                    let instructions = innerElement.strInstructions
                    liInstructions.innerText = `Instructions: ${instructions}`
                    ul.appendChild(liInstructions)

                    ol.appendChild(ul)

                })
            });
        })
        document.body.appendChild(h3)
        h3.appendChild(ol)
    })

    let h4 = document.createElement('h4')
    let form = document.createElement('form')

    let input = document.createElement('input')
    input.id = 'formInput'
    input.placeholder = 'Add a Margarita'

    let btn = document.createElement('button')
    btn.id = 'formButton'
    btn.type = 'submit'
    btn.innerText = 'Submit'
    
    document.body.appendChild(h4)
    h4.appendChild(form)
    form.appendChild(input)
    form.appendChild(btn)
    
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        let inputText = document.getElementById('formInput')
        let nextMarg = inputText.value.trim()
        let div = document.createElement('div')
        let ul = document.createElement('ul')

        if (nextMarg) {
            let li = document.createElement('li')
            li.innerText = nextMarg
            ul.appendChild(li)
            div.appendChild(ul)
            inputText.value = ' '
        }
        document.body.appendChild(div)

    })
})