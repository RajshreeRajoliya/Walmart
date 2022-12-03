 import { navbar } from '../nav.js';
 document.querySelector('.nav').innerHTML = navbar();

import { footer } from '../footer.js';
document.querySelector('.footer').innerHTML = footer();

let ProdcutData = JSON.parse(localStorage.getItem("detail_me"))

function displayData(ele){

    const image1=document.getElementById("image1");
    image1.src=ele.Product_imgUrl

    image1.addEventListener("mouseover", function(){
        mainIG.src= ele.Product_imgUrl
        
    })
    image1.addEventListener("mouseout", function(){
        mainIG.src = ele.Product_imgUrl
    })

    const image2=document.getElementById("image2");
    image2.src=ele.Product_img1
    image2.addEventListener("mouseover", function(){
        mainIG.src= ele.Product_img1
        
    })
    image2.addEventListener("mouseout", function(){
        mainIG.src = ele.Product_imgUrl
    })

    const image3=document.getElementById("image3");
    image3.src=ele.Product_img2

    image3.addEventListener("mouseover", function(){
        mainIG.src= ele.Product_img2
        
    })
    image3.addEventListener("mouseout", function(){
        mainIG.src = ele.Product_imgUrl
    })

    const image4=document.getElementById("image4");
    image4.src=ele.Product_img3

    image4.addEventListener("mouseover", function(){
        mainIG.src= ele.Product_img3
        
    })
    image4.addEventListener("mouseout", function(){
        mainIG.src = ele.Product_imgUrl
    })

    var mainIG = document.getElementById("cocImg")
    mainIG.src = ele.Product_imgUrl

    var brand = document.getElementById("coca")
    brand.textContent = ele.Brand


    var ProductName = document.getElementById("brandName")
    ProductName.textContent = ele.Product_Name

    var Rate = document.getElementById("rating")
    Rate.innerText = ele.Rating

    var Price = document.getElementById("Price1")
    Price.innerText = "Now $"+ele.List_Price

    const cartBtn=document.getElementById("bt3");

    cartBtn.addEventListener('click',cartPage);
    var count = 1;
    function cartPage(){
        localStorage.setItem('addCart',JSON.stringify(ele));
    cartBtn.innerHTML = ""

    let cartdiv = document.createElement("div");

    let subbtn = document.createElement("button");
    let pdcount = document.createElement("div")
    let plubtn = document.createElement("button");

    subbtn.innerText = "-"
    plubtn.innerText = "+"
    pdcount.innerText = count;

    
    

    
    plubtn.addEventListener("click" ,function(){
        count++;
        console.log(count);
        pdcount.innerText = count;
    })

   // console.log(count);

    subbtn.addEventListener("click", function(){

        if(count>1){
            count--;
        }
        
        console.log(count);
        pdcount.innerText = count;
    })

    cartBtn.append(subbtn, pdcount, plubtn)




     var totalPrice = 1;
     totalPrice = ele.List_Price*count

     console.log(totalPrice)
        // window.location.href="";

    }


}

displayData(ProdcutData)

 



   var drop1 = document.getElementById("dr1")
   var count = 1; 
   var count2 = 1 
   var drop2 = document.getElementById("dr2").addEventListener("click", function(){
    var cont2 = document.getElementById("cn2")
    if(count2%2==0){
         cont2.style.display = "none"
    }
    else{
        cont2.style.display = "block"
    }
    count2++;
   })
   drop1.addEventListener("click", function(){
    var cont1 = document.getElementById("cn1")
    if(count%2==0){
         cont1.style.display = "none"
    }
    else{
        cont1.style.display = "block"
    }
    count++;
      
      
   })
 

   
   
 





















// var Data =[
//     {
//         image1:"https://i5.walmartimages.com/asr/3e59ef41-fe9e-461a-9c06-176b056db393.6399bcde10eebb9c62c9547e368be4d4.jpeg?odnHeight=160&odnWidth=160&odnBg=FFFFFF",
//         image2:"https://i5.walmartimages.com/asr/6fd9ecfc-1da3-4867-b8c0-844a4356269c.88898e4cdfc4af21ec2f9c3ecd0b6fea.jpeg?odnHeight=160&odnWidth=160&odnBg=FFFFFF",
//         image3:"https://i5.walmartimages.com/asr/50490e54-c6a2-47c5-874e-bf7bc7fb5f5a.e280c70fbe27bdacaecb80122b142367.jpeg?odnHeight=160&odnWidth=160&odnBg=FFFFFF",
//         image4:"https://i5.walmartimages.com/asr/c2b78ebb-5290-4b7a-8307-ae4730325122.449b376d36091124c2642c65895ac4de.jpeg?odnHeight=160&odnWidth=160&odnBg=FFFFFF",
//         image5:"https://i5.walmartimages.com/asr/c05ebd56-e4b1-4f43-b2d7-36f9c61ddf19.e9bc5ec3bc419b8a1f24a533499e3310.jpeg?odnHeight=160&odnWidth=160&odnBg=FFFFFF",
//     }
// ];
// Data.map((elem)=>{

//     const div=document.createElement("div");
//     const image=document.createElement("img");
//     image.setAttribute("src",elem.image1);
//     div.append(image);
//     document.getElementById("detailPage").append(div);

// })

// function displayData(){
//     var img1 = document.getElementById("image1")

//     const Div3=document.getElementById("div3");
//     const divs=document.createElement("div");
//     divs.setAttribute("id","divs");
    
//     const btn1=document.createElement("button");
//     btn1.setAttribute("id","btn1");
//     btn1.textContent="Rollback";

//     const btn2=document.createElement("button");
//     btn2.setAttribute("id","btn2");
//     btn2.textContent="Best seller";

//     const hrtImg=document.createElement("img");
//     hrtImg.setAttribute("id","hrtImg");
//     hrtImg.src="https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png";
//     divs.append(btn1,btn2,hrtImg);

//     const h4=document.createElement("p");
//     h4.textContent="Coco-Cola"

//     const h3=document.createElement("h3");
//     h3.setAttribute("id","h3tag");
//     h3.textContent="Coca-Cola Soda Soft Drink, 16.9 fl oz, 6 Pack"


//     const h2=document.createElement("h1");
//     h2.textContent="Now $3.25" ;

//     const h5=document.createElement("p");
//     h5.textContent="Price when purchased online";
//     h5.setAttribute("id","h5tag");

//     const bt3=document.createElement("button");
//     bt3.textContent="Add to cart";
//     bt3.setAttribute("id","bt3")


//     const hr=document.createElement("hr");

//     const div4=document.createElement("div");
    
//     const carDiv=document.createElement("div");
//     carDiv.setAttribute("id","carDiv");

//     const carImg=document.createElement("img");
//     carImg.setAttribute("id","carImg");
//     carImg.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-U0CMdMOjxJLklQEWNIShAZe3Karfz1Y-_kCq8J1J-2l_Bxxs5ol4TZMsp5BdOG9q-Ag&usqp=CAU";

//     const addTag=document.createElement("p");
//     addTag.textContent="Pickup, tomorrow at Sacramento Supercenter";
//     carDiv.append(carImg,addTag);

//     const locDiv=document.createElement("div");
//     locDiv.setAttribute("id","locDiv");
    

//     const locImg=document.createElement("img");
//     locImg.setAttribute("id","locImg");
//     locImg.src="https://media.istockphoto.com/id/1193451471/vector/map-pin-vector-glyph-icon.jpg?s=612x612&w=0&k=20&c=wuWVeHuthNAXzjOO5_VY9SUOd-6cxwpVH8VVfh6Y7Lc=";

//     const locTag=document.createElement("p");
//     locTag.textContent="Aisle A22";

//     locDiv.append(locImg,locTag);

//     const storeDiv=document.createElement("div");
//     storeDiv.setAttribute("id","storeDiv")

//     const deliImg=document.createElement("img");
//     deliImg.setAttribute("id","deliImg")
//     deliImg.src="data:image/png;base64,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";

//     const deliTag=document.createElement("p");
//     deliTag.textContent="Add to list";
//     const hr1=document.createElement("hr");
//     storeDiv.append(deliImg,deliTag);

//     const giftDiv=document.createElement("div");
//     giftDiv.setAttribute("id","giftDiv");

//     const giftImg=document.createElement("img");
//     giftImg.setAttribute("id","giftImg");
//     giftImg.src="https://static.vecteezy.com/system/resources/previews/002/205/948/original/gift-box-icon-free-vector.jpg";

//     const giftTag=document.createElement("p");
//     giftTag.textContent="Add to registery";

//     const hr2=document.createElement("hr");
//     giftDiv.append(giftImg,giftTag,hr);

//     const ebitDiv=document.createElement("div");
//     ebitDiv.setAttribute("id","ebitDiv");

//     const ebit=document.createElement("button");
//     ebit.innerText="Ebit";

//     const ebitTag=document.createElement("h4");
//     ebitTag.textContent="Eliglible Ebit"
//     document.getElementById("2ndDiv").apeend("carDiv")
//     ebitDiv.append(ebit,ebitTag);

//     div4.append(2ndDiv,locDiv,storeDiv,hr1,giftDiv,hr2,ebitDiv)

//     // document.getElementById("div3").append(div4);




//     Div3.append(divs,h4,h3,h2,h5,bt3,hr,div4);

// // }
