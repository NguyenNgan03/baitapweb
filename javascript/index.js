// var a = "hello";
// var b = "word";
// var c = a+ " "+b;
// alert(c);
// var a=10;
// var b = 25;
// var c = a+b;
// document.write(c);

// var x = 100 +200;
// document.write(x)

// var a = prompt("input price: ");
// alert(a);

// var status = confirm("do you want play game?")
// alert(status);

// function chuvi (a,b )
// {
//     return (a+b)*2;
// }
// function dientich (a,b )
// {
//     return a*b;
// }
// var a = parseInt(prompt("nhap so a: "))
// var b = parseInt(prompt("nhap so b: "))
// var chuvi = chuvi(a,b);
// var dientich = chuvi(a,b);
// document.write("dien tich cua a va b la " + dientich);
// document.write("chu vi cua a va b la " + chuvi);

// function myfunction(){
//     var person = prompt("input your name: ")
//     if(person != null){
//         document.getElementById("Demo").innerHTML =
//         "Hello " + person + " How are you toDAY?"
//     }
// }

function hcn()
{
    var a = prompt("input legth: ")
    var b = prompt("input wigth: ")
    // function shcn(a,b){
    //     return a*b;
    // }
    var s = (a*b);
    document.write(s)
}
function hv()
{
    var d = prompt("input legth: ")
    function shv(d){
        return (d+d)*2;
    }
    var f = shv(d)
    document.write(f)
}
function function_hello()
{
    var e = prompt("input name: ")
    document.write("tao ten la " + e)
}