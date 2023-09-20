function myFunction(){
    let a = document.getElementById("x").value;
    a = parseInt(a);
    let k = a%2;
    switch (k) {
        case 0:{
            document.getElementById("kq").innerHTML= "đây là số chẵn";
        }
        case 1:{
            document.getElementById("kq").innerHTML= "đây là số lẽ";
        }    
    }
}