document.addEventListener('DOMContentLoaded', () => {
    let title = document.createElement('h1')
    title.innerText = 'Welcome to Danny\'s Margarita Bar'
    title.id = 'title'
    document.body.appendChild(title)

    let menu = document.createElement('h2')
    menu.id = 'margMenu'
    menu.innerText = 'Margarita Menu'
    document.body.appendChild(menu)
    
})