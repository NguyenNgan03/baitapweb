var man = [
    {
      id: 1,
      name: "The Cosmo (Đen) Quần short khaki",
      code: "TC1025011BA",
      price: "250.000",
      image: "https://znews-photo.zadn.vn/w660/Uploaded/ycgmvjvj/2018 04 16/9 2.jpg"
    },
    {
      id: 2,
      name: "Quần baggy đen sang trọng QQ",
      code: "TC1025011BA",
      price: "398.000",
      image: "https://www.celeb.vn/wp-content/uploads/2017/10/ao-phong-thoi-trang-nam-4-554x800.jpg"
    },
    {
      id: 3,
      name: "The Cosmo (Ben) Quan short khaki",
      code: "TC1025011BA",
      price: "300.000",
      image: "https://toplist.vn/images/800px/4men-shop-175469.jpg"
    },
    {
      id: 4,
      name: "The Cosmo (Den) Quan short khaki",
      code: "TC1025011BA",
      price: "300.000",
      image: "https://cdn.nhanh.vn/cdn/store/3138/albumCT/7046/dsc_3135.jpg"
    }
  ];
var woment = [
    {
      id: 1,
      name: "Vay Fashion",
      code: "TC1025011BA",
      price: "250.000",
      image: "https://luzy.vn/wp-content/uploads/2019/02/1zd9078-3.jpg"
    },
    {
      id: 2,
      name: "Áo thun phối váy ngắn",
      code: "TC10250118A",
      price: "398.000",
      image: "https://gumac.vn/image/thang919/at75-do050920191344211605.jpg?width=220"
    },
    {
      id: 3,
      name: "Áo khoác",
      code: "TC1025011BA",
      price: "300.000",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd6Xtt2NITTynV8NhtufxJmusBY2ehUhQkNLzQ0TSSJACc9RB"
    },
    {
      id: 4,
      name: "Áo thun",
      code: "TC1025011BA",
      price: "300.000",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6uZzcUSHH9GEOSzvgMWIbdugSLHInfaзqJdGhGpbhc00FWSK9"
    }
];

function listProducts() {
    var menHTML = ""; // Chuỗi HTML cho sản phẩm nam
    var womenHTML = ""; // Chuỗi HTML cho sản phẩm nữ
  
    // Duyệt qua mảng sản phẩm nam
    for (let i = 0; i < man.length; i++) {
      menHTML += '<div class="col-3">';
      menHTML += '<div class="card" style="width: 18rem;">';
      menHTML += '<img src="' + man[i].image + '" class="card-img-top" style="height:400px;">';
      menHTML += '<div class="card-body">';
      menHTML += '<h5 class="card-title">' + man[i].name + '</h5>';
      menHTML += '<p class="card-text">' + man[i].price + '</p>';
      menHTML += '<a href="#" class="btn btn-primary" onclick="order()">Đặt mua</a>';
      menHTML += '</div>';
      menHTML += '</div>';
      menHTML += '</div>';
    }
  
    // Duyệt qua mảng sản phẩm nữ
    for (let i = 0; i < woment.length; i++) {
      womenHTML += '<div class="col-3">';
      womenHTML += '<div class="card" style="width: 18rem;">';
      womenHTML += '<img src="' + woment[i].image + '" class="card-img-top" style="height:400px;">';
      womenHTML += '<div class="card-body">';
      womenHTML += '<h5 class="card-title">' + woment[i].name + '</h5>';
      womenHTML += '<p class="card-text">' + woment[i].price + '</p>';
      womenHTML += '<a href="#" class="btn btn-primary" onclick="order()">Đặt mua</a>';
      womenHTML += '</div>';
      womenHTML += '</>'
    }
}