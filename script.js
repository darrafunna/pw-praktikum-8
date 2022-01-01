function output() {
  var filter = document.getElementById("filter");
  if (filter.value == "All") {
    filterSelection(null);
  } else if (filter.value == "Makanan") {
    filterSelection("Makanan");
  } else if (filter.value == "Minuman") {
    filterSelection("Minuman");
  } else if (filter.value == "Dessert") {
    filterSelection("Dessert");
  } else {
    ("");
  }
}

function filterSelection(key) {
  $.getJSON("./data.json", function (data) {
    let menu = data.menu;

    if (key) {
      menu = menu.filter(function (value) {
        return value.jenis === key; //post.username === 'James"
      });
    }

    $("#tampilan-menu")
      .empty()
      .append(
        menu.map(function (item) {
          return `
          <div class="col-md-4">
            <div class="card mb-3" style="width: 18rem;">
              <img src=${item.gambar} class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${item.nama}</h5>
                <p class="card-text">${item.deskripsi}</p>
                  <div class="harga">
                    <p class="card-text"> <strong>Harga   :</strong> ${item.harga}</p>
                    <p class="card-text"><strong>Estimasi :</strong> ${item.estimasi}</p>
                  <div>
                <a href="#" class="btn btn-primary">Pesan Sekarang</a>
              </div>
            </div>
          </div>`;
        })
      );
  });
}
