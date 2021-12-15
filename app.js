document.querySelectorAll('.list-products div').forEach(item => {
    item.addEventListener('click', function (e) {
        if (!this.classList.contains('active')) {
            let image_main = document.getElementById("image_main")
            let div = document.querySelector('.list-products div.active')
            div.classList.remove('active')
            this.classList.add('active')
            let newImg = this.children[0].getAttribute('src').replace('-thumbnail', '')
            image_main.setAttribute('src', newImg)
        }
    })
})

document.getElementById('image_main').addEventListener('click', function () {
    let div = document.querySelector('.col.product-display').innerHTML,
        modal_image = document.getElementById('modal_image')
    modal_image.innerHTML = '<div class="product-display">' + div + '</div>'
    modal_image.classList.add('show')
    document.querySelector('body').classList.add('modal-showed')
})