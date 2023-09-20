function myFunction(){
    // kiểm tra check box:
   let product = document.getElementsByName("checkbox");
   let allProduct = [];
   for (let i = 0; i < product.length; i++) {
        if (product[i].checked === true) {
            allProduct.push(product[i].value)
        }
   } 
//    kiểm tra giá trị radio-button:
   let customerType = document.getElementsByName("radio-button");
   let typeOfCus = "";
   for (let i = 0; i<customerType.length; i++){
        if(customerType[i].checked === true) {
            typeOfCus = customerType[i].value;
        }
   }
   // tính tiền cho giá trị đã chọn:
   let firstPrice = 0;
   for (let i = 0; i < allProduct.length; i++) {
        if (allProduct[i] == "swimming") {
            firstPrice += 500000;
        }
        else if ( allProduct[i] == "football" ){
            firstPrice += 3000000;
        }
        else if ( allProduct[i] == "dancing" ){
            firstPrice += 3000000;
        }
        else if ( allProduct[i] == "singger" ){
            firstPrice += 3000000;
        }
   }
   // cộng giảm giá khuyến mãi:
   let totalprice = 0;
   for (let i = 0; i < customerType.length; i++) {
    if (typeOfCus === "sinhvien") {
        totalprice = firstPrice - (firstPrice * 0.1); 
    } else if (typeOfCus === "hocsinh") {
        totalprice = firstPrice - (firstPrice * 0.3); 
    } else if (typeOfCus === "dilam") {
        totalprice = firstPrice - (firstPrice * 0.03); 
    }
   }

   // in ra kq màn hình
   let countProduct = allProduct.length;
   if (allProduct.length > 0 && typeOfCus !== "") {
        for (let i = 0; i < customerType.length; i++) {
            if (typeOfCus == "sinhvien") {
                document.getElementById("thanhtien").innerHTML = "Bạn đã chọn " + countProduct + "hobby là " + allProduct.join(", ") + " số tiền = " + firstPrice;
                document.getElementById("giamgia").innerHTML = "Bạn là" + typeOfCus + " nên được giảm giá 10%";
                document.getElementById("tiencantra").innerHTML = "Tổng số tiền bạn cần trả là: " + totalprice;
            }
            else if (typeOfCus == "hocsinh") {
                document.getElementById("thanhtien").innerHTML = "Bạn đã chọn " + countProduct + "hobby là " + allProduct.join(", ") + " số tiền = " + firstPrice;
                document.getElementById("giamgia").innerHTML = "Bạn là" + typeOfCus + " nên được giảm giá 30%";
                document.getElementById("tiencantra").innerHTML = "Tổng số tiền bạn cần trả là: " + totalprice;
            }
            else if (typeOfCus == "dilam") {
                document.getElementById("thanhtien").innerHTML = "Bạn đã chọn " + countProduct + "hobby là " + allProduct.join(", ") + " số tiền = " + firstPrice;
                document.getElementById("giamgia").innerHTML = "Bạn là" + typeOfCus + " nên được giảm giá 30%";
                document.getElementById("tiencantra").innerHTML = "Tổng số tiền bạn cần trả là: " + totalprice;
            }
        }
    }
}
function Cancel(){
    document.getElementById("thanhtien").value = ""
    document.getElementById("giamgia").value = ""
    document.getElementById("tiencantra").value = ""
}
