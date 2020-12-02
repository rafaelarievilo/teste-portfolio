const hamburguer = document.querySelector('.hamburguer')
hamburguer.addEventListener('click', function () {
    document.querySelector('.container').classList.toggle('show-menu')
})

/* também pode ser

document.querySelector('.hamburguer').addEventListener('click', () => 
    document.querySelector('.container').classList.toggle('show-menu')
) */