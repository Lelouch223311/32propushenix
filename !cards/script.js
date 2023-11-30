

async function Cards(){
    let products = []
    const list = document.querySelector('.output')
    fetch('https://dummyjson.com/product')
        .then(res => res.json())
        .then(json => {
            products  = json.products
            products.forEach(item => {
                let elem = document.createElement('')
                elem.textContent = item.title
                list.appendChild(elem)
            });
        })
        .catch(error => console.log(error))
}