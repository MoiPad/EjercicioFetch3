fetch("https://api.escuelajs.co/api/v1/categories")
  .then(response => response.json())
  .then(data => {
    let cards = '<div class="row row-cols-1 rows-cols-md3 g-4"'

    for (let user of data) {
      cards += `
           <div class="card">
              <img src="${user.image}" class="card-img-top" alt="USER-API-IMAGE"/>
             <div class="card-body">
                <h5 class="card-title"><strong>${user.name}</strong></h5>
                <a href="#" class="btn btn-primary"> More...</a>
             </div>
           </div>
      `
    }
    cards += '</div>'

    document.getElementById('api-image').innerHTML = cards

  })
