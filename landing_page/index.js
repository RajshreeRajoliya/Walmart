setInterval(function () {
  if (
    document.getElementsByClassName("slider")[0].classList.contains("active")
  ) {
    // check for active class for the 1st div
    document.getElementsByClassName("slider")[1].classList.add("active"); //active 2nd div
    document.getElementsByClassName("slider")[0].classList.remove("active"); // remove Ist div from active class
  } else if (
    document.getElementsByClassName("slider")[1].classList.contains("active")
  ) {
    document.getElementsByClassName("slider")[2].classList.add("active");
    document.getElementsByClassName("slider")[1].classList.remove("active");
  } else if (
    document.getElementsByClassName("slider")[2].classList.contains("active")
  ) {
    document.getElementsByClassName("slider")[0].classList.add("active");
    document.getElementsByClassName("slider")[2].classList.remove("active");
  }
}, 3000);

function next() {
  if (
    document.getElementsByClassName("slider")[0].classList.contains("active")
  ) {
    // check for active class for the 1st div
    document.getElementsByClassName("slider")[1].classList.add("active"); //active 2nd div
    document.getElementsByClassName("slider")[0].classList.remove("active"); // remove Ist div from active class
  } else if (
    document.getElementsByClassName("slider")[1].classList.contains("active")
  ) {
    document.getElementsByClassName("slider")[2].classList.add("active");
    document.getElementsByClassName("slider")[1].classList.remove("active");
  } else if (
    document.getElementsByClassName("slider")[2].classList.contains("active")
  ) {
    document.getElementsByClassName("slider")[0].classList.add("active");
    document.getElementsByClassName("slider")[2].classList.remove("active");
  }
}

function prev() {
  if (
    document.getElementsByClassName("slider")[0].classList.contains("active")
  ) {
    // check for active class for the 1st div
    document.getElementsByClassName("slider")[2].classList.add("active"); //active last div
    document.getElementsByClassName("slider")[0].classList.remove("active"); // remove Ist div from active class
  } else if (
    document.getElementsByClassName("slider")[2].classList.contains("active")
  ) {
    document.getElementsByClassName("slider")[1].classList.add("active");
    document.getElementsByClassName("slider")[2].classList.remove("active");
  } else if (
    document.getElementsByClassName("slider")[1].classList.contains("active")
  ) {
    document.getElementsByClassName("slider")[0].classList.add("active");
    document.getElementsByClassName("slider")[1].classList.remove("active");
  }
}

var rollbackItems = [
  {
    img_url:
      "https://i5.walmartimages.com/asr/c00047a0-20e0-4bfc-bea6-e7f0abdd3e73.283cab9661ccd6ecd23065fec9e9d98b.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    price: "$9.96",
    type: "Bootcut Jeans, Womens",
    rating: "4.2",
  },
  {
    img_url:
      "https://i5.walmartimages.com/asr/5206550a-5197-4f61-bf9c-42732d6c90a3.e9442a3ac54452c2b7e43d40bc4f2871.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
    price: "$ 199",
    type: 'HP Stream 14" Laptop, Intel',
    rating: "3.9",
  },
  {
    img_url:
      "https://i5.walmartimages.com/asr/afb203a0-c091-4dac-92a2-42b399c879a6.d38bbb94c2bc8e0dad76edfbfd491d55.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    price: "$ 15.98",
    type: "Regular Fit Jeans",
    rating: "4.6",
  },
  {
    img_url:
      "https://i5.walmartimages.com/asr/7a019d3c-cf5f-44a6-b6a2-2d8409ca3527_1.dc9a10e5cb280701034f21ad30ca74cb.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
    price: "$ 13.48",
    type: `George Men's Wrinkle Resistant Pants`,
    rating: "4.3",
  },
  {
    img_url:
      "https://i5.walmartimages.com/asr/3e505f4f-d5fb-4c0f-a127-01c98f359149.fe69252546bfccdf9dec49b10307de3f.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    price: "$ 169.00",
    type: 'Core Innovations 14.1" Ultra Slim Notebook ',
    rating: "3.5",
  },
];

let rollback_cards = document.getElementById("rollback-cards");
rollback();
function rollback() {
  rollbackItems.map(function (item) {
    console.log(item);
    var imgDiv = document.createElement("div");
    imgDiv.setAttribute("id", "card");

    var text = document.createElement("div");
    text.setAttribute("id", "text");

    var img = document.createElement("img");
    img.setAttribute("src", item.img_url);

    var price = document.createElement("h2");
    price.setAttribute("id", "price");
    price.textContent = item.price;

    var type = document.createElement("p");
    type.setAttribute("id", "type");
    type.textContent = item.type;

    var btn = document.createElement("button");
    btn.setAttribute("id", "shippingBtn");
    btn.textContent = "3+ day shipping";

    var h3 = document.createElement("div");
    h3.setAttribute("id", "ratings");
    h3.innerHTML = `<p>&#9734; ${item.rating}</p>`;

    var pDiv = document.createElement("div");
    pDiv.setAttribute("class", "pDiv");
    pDiv.append(type);

    var button = document.createElement("button");
    button.setAttribute("id", "btn");
    button.textContent = "Options";

    button.addEventListener("click", function () {
      addtoCart(item);
    });

    text.append(pDiv, price);
    imgDiv.append(img, button, text);
    rollback_cards.append(imgDiv);
  });
}

let cartItems = [
  {
    id: 1,
    img_url:
      "https://i5.walmartimages.com/asr/83f533c3-3234-4bea-80bf-a0f9a43cd279_2.9b223f40bab27c513ba64f9f0e3fc2d9.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    price: "$3.57",
    type: "Great Value Whole Vitamin D Milk, Gallon",
    rating: "3.0",
  },
  {
    id: 2,
    img_url:
      "https://i5.walmartimages.com/asr/59f447c9-ee28-428e-b5b1-698f6fd8dd47.27ef69f3d5b0fa50ce7b17020dc718e6.jpeg",
    price: "$ 9.9",
    type: "Angel Soft Toilet Paper, 12 Mega Rolls",
    rating: "4.0",
  },
  {
    id: 3,
    img_url:
      "https://i5.walmartimages.com/asr/6b07428c-5a43-4379-b83a-74d7650e993f.8d4fd31b242356d40c7d71151cd71b38.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    price: "$199",
    type: "Nintendo Switch™ Lite - Blue",
    rating: "4.0",
  },
  {
    id: 4,
    img_url:
      "https://i5.walmartimages.com/asr/2b163e77-9297-4726-9276-b7319f97ab2e.d1c36937642ec0c5b4912a0c319f31d2.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    price: "$ 999.97",
    type: "JBL Live 650BT On-Ear Wireless Headphones with Noise-Cancelling and Voice Assistant (Blue)",
    rating: "3.4",
  },
  {
    id: 5,
    img_url:
      "https://i5.walmartimages.com/asr/b96fa548-8658-4a43-8d6b-8c91ee336c05.64c2f8906fdbdd5c3fb8f6a933f7dcb9.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    price: "$ 449.00",
    type: 'Core Innovations CLT136401SL 14" Notebook - Intel Atom Z3850 - 4GB RAM - 64GB SSD - 1920 x 1080',
    rating: "4.6",
  },
  {
    id: 6,
    img_url:
      "https://i5.walmartimages.com/asr/a1398e37-09d8-47da-aed3-f7cdf6338666.672654bd6d10919c3eee82c62b37014d.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    price: "$5.48",
    type: "Mayonnaise Real Mayo Gluten-Free Sandwich Spread, Rich in Omega-3 ",
    rating: "4.2",
  },
];
displayItems();
let cart_card = document.getElementById("cart-card");
function displayItems() {
  cartItems.map(function (items) {
    console.log(items);

    let box = document.createElement("div");
    box.setAttribute("id", "box");

    let img = document.createElement("img");
    img.src = items.img_url;
    img.addEventListener("click", detail_page);
    function detail_page() {
      localStorage.setItem("detail_me", JSON.stringify(item));
    }

    let btn = document.createElement("button");
    btn.setAttribute("id", "addToCart");
    btn.textContent = "+ Add";
    let add = document.createElement("div");
    let minus = document.createElement("button");
    let plus = document.createElement("button");
    minus.innerText = "-";
    plus.innerText = "+";
    minus.addEventListener("click", subItems);
    plus.addEventListener("click", addItems);
    function subItems() {
      if (items.count > 0) {
        let local = JSON.parse(localStorage.getItem("product_added")) || [];
        let flag = false;
        local.map(function (ele) {
          if (ele.id == items.id) {
            flag = true;
            items.count--;
            ele.count--;
            console.log(items.id, ele.id);
          }
        });
        if (flag == false) {
          local.push(items);
        }
        local.setItem("product_added", JSON.stringify(local));
        addFun();
      }
      if (items.count == 0) {
        let local = JSON.parse(localStorage.getItem("product_added")) || [];
        let r = local.filter(function (o) {
          return o.count > 0;
        });
        localStorage.setItem("product_added", JSON.stringify(r));
        add.innerHTML = "";
        add.append(addToCart);
        items.count++;
      }
    }
    function addItems() {
      add.innerHTML = "";
      let local = JSON.parse(localStorage.getItem("product_added")) || [];
      let flag = false;
      local.map(function (ele) {
        if (ele.id == item.id) {
          flag = true;
          ele.count++;
          items.count++;
        }
      });
      if (flag == false) {
        local.push(ele);
      }
      localStorage.setItem("product_added", JSON.stringify(local));
      add(minus,items.count,plus);
    }
    btn.addEventListener("click", function () {
      addToCart(items);
    });

    let price = document.createElement("h2");
    price.textContent = items.price;

    let title = document.createElement("h4");
    title.textContent = items.type;

    let delivery = document.createElement("div");
    delivery.setAttribute("id", "deliveryInfo");

    let pickupBtn = document.createElement("p");
    pickupBtn.setAttribute("id", "pickupBtns");
    pickupBtn.textContent = "Pickup";

    let deliveryBtn = document.createElement("p");
    deliveryBtn.setAttribute("id", "deliveryBtns");
    deliveryBtn.textContent = "Delivery";

    delivery.append(pickupBtn, deliveryBtn);
    box.append(img, btn, price, title, delivery);
    document.querySelector("#cart-card").append(box);
  });
}
