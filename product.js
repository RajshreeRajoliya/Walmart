/** @format */
import { navbar, hjjk } from './nav.js';
// import { product } from './data.js';
import { fetchdata } from './compoents/fetch.js';
// import { get, gte } from 'lodash';
import { footer } from './footer.js';

document.querySelector('#footer-container').innerHTML = footer();
document.querySelector('.nav').innerHTML = navbar();
hjjk();
// let username = JSON.stringify(localStorage.getItem('user'));
// let username = 'wacxwac';
// let sda = document.querySelector('#us');
// sda.innerHTML = '';
// sda.append('Hi,', username);

// display(product);
// document.querySelector('.se').addEventListener('click', kill);

let urll = `http://localhost:3000/porducts`;
let searched_data = [];
let getdatadefault = (urll) => {
  fetchdata(urll)
    .then(function (data) {
      console.log(data);
      //   return data;
      searched_data = JSON.parse(localStorage.getItem('search'));
      if (searched_data != null) {
        display(searched_data);
        localStorage.removeItem('search');
      } else {
        // searched_data = '';
        searched_data = data;
        display(searched_data);
      }
    })
    .catch(function () {});
};
getdatadefault(urll);
let getdata = (url) => {
  fetchdata(url)
    .then(function (data) {
      // console.log(data.meals);
      //   return data;
      display(data);
    })
    .catch(function () {});
};

let ARR = [];
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
    console.log(ele.Product_imgUrl);
    img.addEventListener('click', detail_page);
    function detail_page() {
      localStorage.setItem('detail_me', JSON.stringify(ele));
      window.location.href = 'productDetail.html';
    }
    div1.append(img);
    let pp = document.createElement('p');
    pp.innerText = '+ADD';
    pp.setAttribute('class', 'pp');
    let add = document.createElement('div');
    let sub = document.createElement('button');
    let plus = document.createElement('button');
    sub.innerText = '-';
    plus.innerText = '+';
    sub.addEventListener('click', su);
    plus.addEventListener('click', plu);
    function su() {
      if (ele.count > 0) {
        let local = JSON.parse(localStorage.getItem('product_added')) || [];

        let flag = false;
        local.map(function (el) {
          if (el.idd == ele.idd) {
            flag = true;
            ele.count--;
            el.count--;
            console.log(el.idd, ele.idd);
          }
        });

        if (flag == false) {
          local.push(ele);
        }
        localStorage.setItem('product_added', JSON.stringify(local));

        addfun();
      }
      // console.log('adx');
      if (ele.count == 0) {
        let local = JSON.parse(localStorage.getItem('product_added')) || [];
        let r = local.filter(function (o) {
          return o.count > 0;
        });
        localStorage.setItem('product_added', JSON.stringify(r));
        add.innerHTML = '';

        add.append(pp);
        ele.count++;
      }
    }
    function plu() {
      // ele.count++;
      // console.log('saxa');
      add.innerHTML = '';
      // let local = product.filter(function (ele) {
      //   return ele.count > 1;
      // });
      let local = JSON.parse(localStorage.getItem('product_added')) || [];

      let flag = false;
      local.map(function (el) {
        if (el.idd == ele.idd) {
          flag = true;
          ele.count++;
          el.count++;
          console.log(el.idd, ele.idd);
        }
      });

      if (flag == false) {
        local.push(ele);
      }
      // local.push(ele);

      localStorage.setItem('product_added', JSON.stringify(local));
      add.append(sub, ele.count, plus);
    }

    // count.setAttribute('style', 'color:white;');
    pp.addEventListener('click', addfun);

    function addfun() {
      // console.log('s');

      add.innerHTML = '';
      add.append(sub, ele.count, plus);

      // count = 1;
    }

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
let t = [];
let brand = document.querySelector('#brand');
brand.addEventListener('click', hjk);
function hjk() {
  // console.log('s');
  let br = document.querySelector('.ol');
  br.innerHTML = '';
  let p1 = document.createElement('p');
  p1.setAttribute('class', 'p1');
  let p2 = document.createElement('p');
  let p3 = document.createElement('p');
  let p4 = document.createElement('p');
  let p5 = document.createElement('p');
  let p6 = document.createElement('p');
  let p7 = document.createElement('p');
  p2.setAttribute('class', 'p1');
  p3.setAttribute('class', 'p1');
  p4.setAttribute('class', 'p1');
  p5.setAttribute('class', 'p1');
  p6.setAttribute('class', 'p1');
  p7.setAttribute('class', 'p1');
  p1.innerText = 'Mountain Dew';
  p2.innerText = 'Pepsi';
  p3.innerText = 'Monster Energy';
  p4.innerText = 'Sprite';
  p5.innerText = 'Red Bull';
  p6.innerText = 'Coca-Cola';
  p7.innerText = '7UP';

  br.append(p1, p2, p3, p4, p5, p6, p7);
  br.setAttribute('style', '  display: block;');
  p1.addEventListener('click', function () {
    f1('Mountain Dew');
  });
  p2.addEventListener('click', function () {
    f1('Pepsi');
  });
  p3.addEventListener('click', function () {
    f1('Monster Energy');
  });
  p4.addEventListener('click', function () {
    f1('Sprite');
  });
  p5.addEventListener('click', function () {
    f1('Red Bull');
  });
  p6.addEventListener('click', function () {
    f1('Coca-Cola');
  });
  p7.addEventListener('click', function () {
    f1('7UP');
  });
  function f1(p) {
    console.log('k');
    t = searched_data.filter(function (ele) {
      console.log(ele.Brand + '==' + p);
      return ele.Brand == p;
    });
    // console.log(t);
    display(t);
    br.setAttribute('style', '  display: none;');
    brand.setAttribute('style', '  background-color: black; color:white;');
  }
}

let Price = document.querySelector('#Price');
Price.addEventListener('click', hjkk);
function hjkk() {
  console.log('s');
  let br = document.querySelector('#oll');
  br.innerHTML = '';
  let p1 = document.createElement('p');
  p1.setAttribute('class', 'p1');
  let p2 = document.createElement('p');
  let p3 = document.createElement('p');
  let p4 = document.createElement('p');
  let p5 = document.createElement('p');
  let p6 = document.createElement('p');
  let p7 = document.createElement('p');
  p2.setAttribute('class', 'p1');
  p3.setAttribute('class', 'p1');
  p4.setAttribute('class', 'p1');
  p5.setAttribute('class', 'p1');
  p6.setAttribute('class', 'p1');
  p7.setAttribute('class', 'p1');
  p1.innerText = 'UP TO $5';
  p2.innerText = 'UP TO $10';
  p3.innerText = 'UP TO $15';
  p4.innerText = 'UP TO $20';
  p5.innerText = 'UP TO $25';
  p6.innerText = 'UP TO $30';
  p7.innerText = 'UP TO $35';
  p1.addEventListener('click', function () {
    f1(5);
  });
  p2.addEventListener('click', function () {
    f1(10);
  });
  p3.addEventListener('click', function () {
    f1(15);
  });
  p4.addEventListener('click', function () {
    f1(20);
  });
  function f1(p) {
    let ioo = searched_data.filter(function (ele) {
      // console.log(ele.Rating + '==' + p);
      return ele.List_Price < p;
    });
    display(ioo);
    br.setAttribute('style', '  display: none;');
    Price.setAttribute('style', '  background-color: black; color:white;');
  }
  br.append(p1, p2, p3, p4, p5, p6, p7);
  br.setAttribute('style', '  display: block;');
}

let Speed = document.querySelector('#Speed');
Speed.addEventListener('click', hjkkk);
function hjkkk() {
  console.log('s');
  let br = document.querySelector('#ohl');
  br.innerHTML = '';
  let p1 = document.createElement('p');
  p1.setAttribute('class', 'p1');
  let p2 = document.createElement('p');
  let p3 = document.createElement('p');
  let p4 = document.createElement('p');
  p2.setAttribute('class', 'p1');
  p3.setAttribute('class', 'p1');
  p4.setAttribute('class', 'p1');
  p1.innerText = 'TODAY';
  p2.innerText = 'TOMORROW';
  p3.innerText = '2 DAYS';
  p4.innerText = 'ANYTIME';
  p1.addEventListener('click', function () {
    f1('Today');
  });
  p2.addEventListener('click', function () {
    f1('Tomorrow');
  });
  p3.addEventListener('click', function () {
    f1('2 days');
  });
  p4.addEventListener('click', function () {
    f1('Anytime');
  });
  function f1(p) {
    // console.log(product);
    t = searched_data.filter(function (ele) {
      console.log(ele.speed + '==' + p);
      return ele.speed == p;
    });
    display(t);
    br.setAttribute('style', '  display: none;');
    Speed.setAttribute('style', '  background-color: black; color:white;');
  }
  br.append(p1, p2, p3, p4);
  br.setAttribute('style', '  display: block;');
}

let ls = document.querySelector('#ls');
ls.addEventListener('click', hjkkkk);
function hjkkkk() {
  console.log('s');
  let br = document.querySelector('#opl');
  br.innerHTML = '';
  let p1 = document.createElement('p');
  p1.setAttribute('class', 'p1');
  let p2 = document.createElement('p');
  let p3 = document.createElement('p');
  let p4 = document.createElement('p');
  p2.setAttribute('class', 'p1');
  p3.setAttribute('class', 'p1');
  p4.setAttribute('class', 'p1');
  p1.innerText = 'Best Seller';
  p2.innerText = 'Best Match';
  p3.innerText = 'Price Low';
  p4.innerText = 'Price High';
  p1.addEventListener('click', function () {
    f3('Best Seller');
  });
  p2.addEventListener('click', function () {
    f4('Best Match');
  });
  p3.addEventListener('click', function () {
    f1('Price Low');
  });
  p4.addEventListener('click', function () {
    f2('Price High');
  });
  let ch = document.querySelector('#change');
  function f1(p) {
    // console.log(product);
    let v = searched_data.sort(function (a, b) {
      return (
        parseFloat(Number(a.List_Price)) - parseFloat(Number(b.List_Price))
      );
    });
    let ch = document.querySelector('#change');
    ch.innerText = '';
    ch.innerText = p;
    display(v);
    br.setAttribute('style', '  display: none;');
  }
  function f2(p) {
    // console.log(product);
    searched_data.sort(function (a, b) {
      return (
        parseFloat(Number(b.List_Price)) - parseFloat(Number(a.List_Price))
      );
    });

    display(searched_data);
    br.setAttribute('style', '  display: none;');
  }
  function f3(p) {
    // console.log(product);
    let ioo = searched_data.filter(function (ele) {
      console.log(ele.Rating + '==' + p);
      return ele.Rating > 3.5;
    });
    display(ioo);
    let ch = document.querySelector('#change');
    ch.innerText = '';
    ch.innerText = p;
    br.setAttribute('style', '  display: none;');
  }
  function f4(p) {
    // console.log(product);
    let ioo = searched_data.filter(function (ele) {
      console.log(ele.Rating + '==' + p);
      return ele.Rating == 3.5;
    });
    display(ioo);

    ch.innerText = '';
    ch.innerText = p;
    br.setAttribute('style', '  display: none;');
  }
  br.append(p1, p2, p3, p4);
  br.setAttribute('style', '  display: block;');
}
let em = document.querySelector('#empty');
em.addEventListener('click', mu);
function mu() {
  display(searched_data);
  Price.setAttribute('style', ' background-color: rgb(227, 228, 229);');
  Speed.setAttribute('style', ' background-color: rgb(227, 228, 229);');
  brand.setAttribute('style', ' background-color: rgb(227, 228, 229);');
  document.querySelector('#change').innerText = 'Best Match';
  // display(product);
}
