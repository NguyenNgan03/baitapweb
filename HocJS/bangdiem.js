function xeploai(){
    var a = document.getElementById("semmester1").value;
    a = parseInt(a);
    var b = document.getElementById("semmester2").value;
    b = parseInt(b);
    var c = document.getElementById("select");
    var value = c.options[c.selectedIndex].value;
    value = parseInt(value);
    var k;
    switch (value) {
        case 1:{
            k = (a+(b*2))/3;
            k = parseFloat(k);
            document.getElementById("sum").value = k;
        }
        case 2:{
            k = (a+(b*3))/4;
            k = parseFloat(k);
            document.getElementById("sum").value = k;
        }
        case 3:{
            k = (a+(b*4))/5;
            k = parseFloat(k);
            document.getElementById("sum").value = k;
        }
    }
    if(k>=9){
        document.getElementById("xlhocsinh").innerHTML="Học sinh xuất sắc"
        document.getElementById("xlhocsinh").style.color= "red";
    }
    if(k>=7 && k<9 ){
        document.getElementById("xlhocsinh").innerHTML="Học sinh giỏi"
        document.getElementById("xlhocsinh").style.color= "blue";
    }   
    if(k>=5 && k<7){
        document.getElementById("xlhocsinh").innerHTML="Học sinh khá"
        document.getElementById("xlhocsinh").style.color= "green";
    }
}
function stop(){
    document.getElementById("semmester1").value = " ";
    document.getElementById("semmester2").value = " ";
    document.getElementById("sum").value = " ";
    document.getElementById("xlhocsinh").innerHTML = " ";


}