
function myFunction(){
    //kiem tra checkbox
    let check = document.getElementsByName('checkbox');
    let length=check.length;
    let kt = [];   
    for (let i =0;i<length;i++){
        if (check[i].checked===true){
            kt.push(check[i].value);
        }
    }
    // kiem tra gia tri radio
    let elements = document.getElementsByName('radio');
    let len = elements.length;
    let checkValue = '';

    for (let i = 0; i < len; i++){
        if (elements.item(i).checked){
            checkValue = (elements.item(i).value);
        }
    }
    //gán tiền cho từng giá trị check box
    let money =0;
    for (let i=0;i<kt.length;i++){
        if (kt[i]=="Swim"){
            money+=500; //500
        }
        else if(kt[i]=="Football"){
            money+=600; //500+600=1100
        }
        else if(kt[i]=="Dance"){
            money+= 200; //1100+200=1300
        }
        else if(kt[i]=="Singer"){
            money+=1000; //1300+1000=2300
        }
    }
    // kết hợp với gán giá tiền theo mã giảm giá
    let total;
    
    if (checkValue==document.getElementById("radio1").value){
        total= money*(1-10/100);
    }
    else if (checkValue==document.getElementById("radio2").value){
        total = money*(1-30/100);
    }
    else if (checkValue==document.getElementById("radio3").value){
        total = money*(1-3/100);
    }
    if (kt.length>0 && checkValue!=''){
        document.getElementById("show").innerHTML= "Bạn đã chọn: "+kt+","+" và bạn là: "+checkValue+", số tiền bạn phải trả là: "+total;
        document.getElementById("show").style.color="black";
    }
    else{
        document.getElementById("show").innerHTML="Bạn chưa chọn sở thích hoặc vai trò!";
        document.getElementById("show").style.color="red";
    }



}