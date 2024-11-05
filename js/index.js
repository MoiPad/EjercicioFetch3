fetch('https://api.escuelajs.co/api/v1/categories')
.then((response) => response.json())
.then((data) => {
    let cards = `<div class="row row-cols-1 rows-cols-md3 g-4">`

    for (let user of data){
        cards += `
        <div class="card">
            <img class="card-img-top" src="${user.image}" alt="image-test"> 
           <div class="card-body">
                <h5 class="card-title">${user.name}</h5>
            </div>
        </div>    
    `
    }

    document.getElementById('card-list').innerHTML = cards
    cards += `</div>`
})