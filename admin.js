function themsp()
{
    document.getElementById("thongtinsp").style.display='none';
    document.getElementById("suasp").style.display='none';
    document.getElementById("themsp").style.display='block';
    document.getElementById("f7").style.display="block";
    document.getElementById("nutthemsp").style.display='none';

}
function suasp(ten,gia,hinh)
{
    document.getElementById("thongtinsp").style.display='none';
    document.getElementById("nutthemsp").style.display='none';
    document.getElementById("suasp").style.display='block';
    document.getElementById("themsp").style.display='none';
    document.getElementById("f77").style.display="block";
    document.getElementById("ten").innerHTML=ten;
    document.getElementById("gia").innerHTML=gia;
    document.getElementById("hinh").innerHTML=hinh;
}
function xoasp()
{
     confirm("You really want to delete !!!!");
    
}
function capnhat()
{
    alert("Cập nhật thông tin thành công !");
    document.getElementById("thongtinsp").style.display='block';
    document.getElementById("nutthemsp").style.display='block';
    document.getElementById("suasp").style.display='none';
    document.getElementById("themsp").style.display='none';

}
function them()
{
    alert("Thêm sản phẩm thành công !");
    document.getElementById("thongtinsp").style.display='block';
    document.getElementById("nutthemsp").style.display='block';
    document.getElementById("suasp").style.display='none';
    document.getElementById("themsp").style.display='none';
}

function block(ten,sl,un)
{
   
        var x=confirm("You really want to close this account !!!");
        if(x==true)
    {document.getElementById(ten).style.textDecoration="line-through";
    document.getElementById(sl).style.display="none";
    document.getElementById(un).style.display="block";}
}
function unblock(ten,sl,un)
{
    
    var z=confirm("You want to unlock this account !!!");
        if(z==true)
    {document.getElementById(ten).style.textDecoration="none";
    document.getElementById(sl).style.display="block";
    document.getElementById(un).style.display="none";}
    
}