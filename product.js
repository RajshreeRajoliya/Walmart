/** @format */

import { product } from './data.js';
console.log(product);
display(product);
function display(data) {
  let main = document.querySelector('#body');
  main.innerHTML = '';
  data.map(function (ele) {
    let ma = document.createElement('div');
    ma.setAttribute('class', 'olp');
    let div1 = document.createElement('div');
    div1.setAttribute('class', 'kol');
    let img = document.createElement('img');
    img.src = ele.Product_imgUrl;
    div1.append(img);
    let add = document.createElement('div');
    let pp = document.createElement('p');
    pp.innerText = '+ADD';
    add.append(pp);
    let price = document.createElement('div');
    price.setAttribute('class', 'price');
    let h3 = document.createElement('h3');
    h3.innerText = '$' + '' + ele.List_Price;
    let h4 = document.createElement('h4');
    h4.innerText = ele.Sale_Price;
    price.append(h3, h4);
    add.setAttribute('class', 'kl');
    let name = document.createElement('div');
    name.setAttribute('class', 'name');
    name.innerText = ele.Product_Name;
    let star = document.createElement('div');
    star.setAttribute('class', 'star');
    let img2 = document.createElement('img');
    img2.setAttribute('class', 'img2');
    img2.src = 'imgs/st.png';
    let p = document.createElement('p');
    p.innerText = ele.Rating;
    star.append(img2, p);
    let last = document.createElement('div');
    let img3 = document.createElement('img');
    img3.src = 'imgs/as.png';
    last.append(img3);
    ma.append(div1, add, price, name, star, last);
    main.append(ma);
  });
}
