/** @format */

import { navbar } from '../nav.js';
document.getElementById('navbar').innerHTML = navbar();

//ADD TO CART

var cartValue = JSON.parse(localStorage.getItem('product_added')) || [];

document.getElementById('totalIteminCart').innerText = cartValue.length;
document.getElementById('totalIteminCart1').innerText = cartValue.length;
// console.log(cartValue.length)
var display = () => {
  cartValue.map((ele, i) => {
    console.log(ele);
    var div = document.createElement('div');
    div.style.lineHeight = '11px';
    div.setAttribute('id', 'cartDisplayDiv');
    var image = document.createElement('img');
    image.src = ele.Product_imgUrl;

    var divname = document.createElement('div');
    divname.setAttribute('id', 'name');
    var name = document.createElement('h3');
    name.setAttribute('class', 'product_name');
    name.innerText = ele.Product_Name;

    var listdiv = document.createElement('span');
    var listPrice = document.createElement('h3');
    //  var p= document.createElement("p");
    listPrice.innerText = '$' + ele.Sale_Price;
    listPrice.style.color = 'darkgray';
    listPrice.style.textDecoration = 'line-through';
    //  p.style.color = "green";
    //  p.style.fontWeight = "bold";
    listdiv.append(listPrice);

    var salediv = document.createElement('span');
    var salePrice = document.createElement('h3');
    salePrice.innerText = '$ ' + (ele.List_Price * +ele.count).toFixed(2);
    salePrice.style.color = '#2a8703';
    salePrice.style.fontSize = '22px';

    salediv.append(salePrice);

    var savediv = document.createElement('span');
    var savePrice = document.createElement('h3');
    savePrice.innerText =
      'You save $' +
      (+ele.Sale_Price * +ele.count - +ele.List_Price * +ele.count).toFixed(2);
    savePrice.style.color = '#2a8703';
    savePrice.style.backgroundColor = ' #eaf3e6';
    savePrice.style.padding = '5px';

    savediv.append(savePrice);

    var pricing = document.createElement('div');
    pricing.setAttribute('class', 'pricing');
    pricing.append(salePrice, listPrice, savediv);

    var add = document.createElement('div');
    add.setAttribute('class', 'qtybtn');
    let sub = document.createElement('button');
    let plus = document.createElement('button');
    sub.setAttribute('class', 'subbtn');
    plus.setAttribute('class', 'plusbtn');
    let remove = document.createElement('button');
    remove.textContent = 'Remove';
    remove.style.backgroundColor = 'white';
    remove.style.border = 'none';
    remove.style.textDecoration = 'underline';

    remove.addEventListener('click', function () {
      deleteobj(i);
    });

    var remadd = document.createElement('div');
    remadd.setAttribute('class', 'remadd');
    remadd.append(remove, add);

    sub.innerText = '-';
    plus.innerText = '+';

    sub.addEventListener('click', su);
    plus.addEventListener('click', plu);

    function su() {
      if (ele.count > 0) {
        +ele.count--;
        salePrice.innerText = '$' + (ele.List_Price * +ele.count).toFixed(2);

        add.innerText = '';
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
      var total = cartValue.reduce((acc, elem) => {
        // console.log(elem);
        return acc + +elem.List_Price * +elem.count;
      }, 0);
      document.getElementById('totalIteminCart1').innerText =
        '$ ' + total.toFixed(2);
      document.getElementById('EstimatedTotal12').innerText =
        '$ ' + total.toFixed(2);

      var totalListPrice = cartValue.reduce((acc, elem) => {
        // console.log(elem);
        return acc + +elem.Sale_Price * +elem.count;
      }, 0);

      document.getElementById('saving23').innerText =
        '$ ' + (+totalListPrice - +total).toFixed(2);
      savePrice.innerText =
        'You save $ ' + (+totalListPrice - +total).toFixed(2);
    }
    function plu() {
      +ele.count++;
      add.innerText = '';
      salePrice.innerText = '$' + (ele.List_Price * +ele.count).toFixed(2);

      add.append(sub, ele.count, plus);
      console.log(ele.count);
      let local = cartValue.filter(function (ele) {
        return ele.count > 1;
      });

      // console.log(local);
      localStorage.setItem('product_added', JSON.stringify(local));
      // ========================
      var total = cartValue.reduce((acc, elem) => {
        // console.log(elem);
        return acc + +elem.List_Price * +elem.count;
      }, 0);
      document.getElementById('totalIteminCart1').innerText =
        '$ ' + total.toFixed(2);
      document.getElementById('EstimatedTotal12').innerText =
        '$ ' + total.toFixed(2);

      var totalListPrice = cartValue.reduce((acc, elem) => {
        // console.log(elem);
        return acc + +elem.Sale_Price * +elem.count;
      }, 0);
      console.log('plu ' + (+totalListPrice - +total).toFixed(2));

      document.getElementById('saving23').innerText =
        '$ ' + (+totalListPrice - +total).toFixed(2);
      savePrice.innerText =
        'You save $ ' + (+totalListPrice - +total).toFixed(2);
    }

    divname.append(name);
    add.append(sub, ele.count, plus);

    //  add.style.border="2px solid blue";
    // ========================================
    div.append(image, divname, pricing, remadd);
    document.querySelector('#cartDetails').append(div);
  });
};

//calculate total
var total = cartValue.reduce((acc, elem) => {
  // console.log(elem);
  return acc + +elem.List_Price * +elem.count;
}, 0);
document.getElementById('totalIteminCart1').innerText = '$ ' + total.toFixed(2);
document.getElementById('EstimatedTotal12').innerText = '$ ' + total.toFixed(2);

var totalListPrice = cartValue.reduce((acc, elem) => {
  // console.log(elem);
  return acc + +elem.Sale_Price * +elem.count;
}, 0);

document.getElementById('saving23').innerText =
  '-$ ' + (+totalListPrice - +total).toFixed(2);
display();
document.getElementById('buttonContinue').addEventListener('click', () => {
  window.location.href = 'payment.html';
});

function deleteobj(index) {
  cartValue.splice(index, 1);
  localStorage.setItem('product_added', JSON.stringify(cartValue));
  display(cartValue);
  location.reload();
}
