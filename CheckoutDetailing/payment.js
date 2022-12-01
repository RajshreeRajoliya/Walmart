
var cartValue = JSON.parse(localStorage.getItem("product_added")) || [];
var display = () => {
    cartValue.map((ele,i)=>{
        console.log(ele);
   var div = document.createElement("div");
   div.setAttribute("id","btnAttr");

   var image = document.createElement("img");
   image.src = ele.Product_imgUrl;
//    image.width="150px";
var button=document.createElement("button");
   var qty=document.createElement("sub");
   qty.innerText=ele.count;
   button.width="20px";
   button.setAttribute("id","roundQtyBtn");

    button.append(qty);
// ========================================
   div.append(image,button);
   console.log("h1");
   document.querySelector("#cartDetails").append(div);
    });
}


//calculate total
var total=cartValue.reduce((acc,elem)=>{
    // console.log(elem);
  return acc + (+elem.List_Price * +elem.count);
},0) 
document.getElementById("totalIteminCart1").innerText="$ "+ total.toFixed(2);



var totalListPrice=cartValue.reduce((acc,elem)=>{
    // console.log(elem);
  return acc + (+elem.Sale_Price * +elem.count);
},0) 

document.getElementById("saving23").innerText="$ "+ (+totalListPrice - +total).toFixed(2);

document.getElementById("estimatedTotal").innerText="$ "+  total.toFixed(2);

document.getElementById("totalItems").innerText=cartValue.length;
display();
document.getElementById("buttonContinue").addEventListener("click", ()=>{
  window.location.href = "orderConfirm.html";
});

