


//ADD TO CART

var cartValue = JSON.parse(localStorage.getItem("product_added")) || [];

document.getElementById("totalIteminCart").innerText=cartValue.length;
document.getElementById("totalIteminCart1").innerText=cartValue.length;
// console.log(cartValue.length)
var display = () => {
    cartValue.map((ele,i)=>{
        console.log(ele);
   var div = document.createElement("div");

   var image = document.createElement("img");
   image.src = ele.Product_imgUrl;

   var name = document.createElement("h2");
   name.innerText = ele.Product_Name;

   var listPrice = document.createElement("h2");
   listPrice.innerText = "List price "+ele.List_Price;
  var salePrice = document.createElement("h2");
   salePrice.innerText =  "saleprice $"+(ele.Sale_Price * +ele.count).toFixed(2);

   var brand = document.createElement("h2");
   brand.innerText = "Brand~ "+ele.Brand;


   var add = document.createElement("div");
   let sub = document.createElement('button');
   let plus = document.createElement('button');

   sub.innerText = '-';
   plus.innerText = '+';
   
   sub.addEventListener('click', su);
   plus.addEventListener('click', plu);
  sub.style.width="20px";
  sub.style.margin="10px";
  plus.style.margin="10px";
   function su() {
    if (ele.count > 0) {
      +ele.count--;
      salePrice.innerText =  "saleprice $"+(ele.Sale_Price * +ele.count).toFixed(2);

      add.innerText="";
      add.append(sub, ele.count, plus);
      let local = cartValue.filter(function (ele) {
        return +ele.count > 1;
      });
      localStorage.setItem('product_added', JSON.stringify(local));
      console.log(local);
    }
    if (ele.count == 0) {
 
        location.reload(); 
      }
      var total=cartValue.reduce((acc,elem)=>{
        // console.log(elem);
      return acc + (+elem.List_Price * +elem.count);
    },0) 
    document.getElementById("totalIteminCart1").innerText="$ "+ total.toFixed(2); 
    document.getElementById("EstimatedTotal12").innerText="$ "+ total.toFixed(2);

    var totalListPrice=cartValue.reduce((acc,elem)=>{
        // console.log(elem);
      return acc + (+elem.Sale_Price * +elem.count);
    },0) 
    
    document.getElementById("saving23").innerText="$ "+ (totalListPrice.toFixed(2) - total.toFixed(2));

  
  }
  function plu() {

    +ele.count++;
    add.innerText="";
    salePrice.innerText =  "saleprice $"+(ele.Sale_Price * +ele.count).toFixed(2);

    add.append(sub, ele.count, plus);
    console.log(ele.count);
    let local = cartValue.filter(function (ele) {
      return ele.count > 1;
    });

    // console.log(local);
    localStorage.setItem('product_added', JSON.stringify(local));
    // ========================
    var total=cartValue.reduce((acc,elem)=>{
        // console.log(elem);
      return acc + (+elem.List_Price * +elem.count);
    },0) 
    document.getElementById("totalIteminCart1").innerText="$ "+ total.toFixed(2);
    document.getElementById("EstimatedTotal12").innerText="$ "+ total.toFixed(2);
  
    var totalListPrice=cartValue.reduce((acc,elem)=>{
        // console.log(elem);
      return acc + (+elem.Sale_Price * +elem.count);
    },0) ;
     console.log("plu "+ (+totalListPrice - +total).toFixed(2));
    
     document.getElementById("saving23").innerText="$ "+ (+totalListPrice - +total).toFixed(2);
  }

 
    add.append(sub, ele.count, plus);

     add.style.border="2px soild blue";     
// ========================================
   div.append(image,name,listPrice,salePrice,brand,add);
   document.querySelector("#cartDetails").append(div);
    });
}


//calculate total
var total=cartValue.reduce((acc,elem)=>{
    // console.log(elem);
  return acc + (+elem.List_Price * +elem.count);
},0) 
document.getElementById("totalIteminCart1").innerText="$ "+ total.toFixed(2);
document.getElementById("EstimatedTotal12").innerText="$ "+ total.toFixed(2);



var totalListPrice=cartValue.reduce((acc,elem)=>{
    // console.log(elem);
  return acc + (+elem.Sale_Price * +elem.count);
},0) 

document.getElementById("saving23").innerText="$ "+ (+totalListPrice - +total).toFixed(2);
display();
document.getElementById("buttonContinue").addEventListener("click", ()=>{
  window.location.href = "payment.html";
});

