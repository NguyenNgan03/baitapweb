var id = 0;
function cell()   
{
    var total = 0;
    id++;
    var pname = frm.pname.value;
    var qty = frm.qt.value;
    var price = frm.up.value;
    var dc = frm.dc.value;
    var sub = qty*price*(1-dc/100);
    total += sub;
    var row = "<tr>";
    row += "<td>" + id + "</td>";
    row += "<td>" + pname + "</td>";
    row += "<td>" + qty + "</td>";
    row += "<td>" + price + "</td>";
    row += "<td>" + dc + "</td>";
    row += "<td>" + sub + "</td>";
    row += "</tr>";
    document.getElementById("tbl").innerHTML += row;
    document.getElementById("total").innerHTML= total;

}      
function cancel() {
    // Đặt giá trị của các trường về rỗng
    document.getElementById("pname").value = "";
    document.getElementById("qt").value = "";
    document.getElementById("up").value = "";
    document.getElementById("dc").value = "";
}     
                                                                                                                                                                                          