/** @format */

function navbar() {
  return `<div id="full">
  <div class="B">
    <div class="E">
      <div id="iop" class="C" style="display: flex">
        <div>
        <a href="index.html">
        <img class="logo" src="logo-removebg-preview.png" alt="logo"/>
    </a>
        </div>
      </div>
      <!-- <div><span class="material-symbols-outlined"> window </span></div> -->
      <div id="iop" class="C" style="width: 150px">
        <p id="bold">
          <span class="material-symbols-outlined"> window </span>Departments
        </p>
      </div>
      <div id="iop" class="C">
        <p id="bold">
          <span class="material-symbols-outlined"> scatter_plot </span
          >Services
        </p>
      </div>
    </div>
    <div id="e">
      <input
      id="asddd"
        type="text"
        placeholder="Search everything in Walmart online and in store" />
      <div class="se">
        <span class="material-symbols-outlined" id="Ll"> search </span>
      </div>
    </div>
    <div class="E" style="width: 24%">
      <div id="iop" class="C" class="opilp">
        Reorder
        <p class="yui" id="bold">My Items</p>
      </div>
      <div id="iop" class="C" class="opilp">
        <a href="signup.html">
          <div id="us">Sign In</div>
          <p class="yui" id="bold">Account</p></a
        >
      </div>
      <div id="iop" class="C" style="width: 40px" class="opilp">
        <a href="CheckoutDetailing/cart.html"
          ><span class="material-symbols-outlined"> shopping_cart </span></a
        >
      </div>
    </div>
  </div>
</div>
<div id="llss">
  <div class="G">
    <div>how do you want items?</div>
    <div style="display: flex" class="op">
      <div>
        <span class="material-symbols-outlined"> location_on </span>
      </div>
      <div>Sacramento,96829 &nbsp&nbsp</div>
      <div>
        <span class="material-symbols-outlined"> house_siding </span>
      </div>
      <div>Sacramento Supercenter</div>
    </div>
  </div>
  <div class="G">
    <div class="y">Grocery & essentials</div>
    <div class="y">Up to $300 off loptops</div>
    <div class="y">Apparel</div>
    <div class="y">Home</div>
    <div class="y">Top Toys,Low Price</div>
    <div class="y">Character Shop</div>
  </div>
</div>`;
}
let user = JSON.parse(localStorage.getItem('user_data')) || [];
function hjjk() {
  console.log('dssd');
  if (user.length != 0) {
    let username = ' ' + user[0].signup_form_fname;
    let sda = document.querySelector('#us');
    sda.innerHTML = '';
    sda.append('Hi,', username);
  }
}

export { navbar, hjjk };
