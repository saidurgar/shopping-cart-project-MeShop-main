

 
    const url = "https://fakestoreapi.com/products";
    
    // first time running code

    fetch(url)
      .then((data) => data.json())
      .then((completData) => {
        //  console.log("completData");
 
        let manData = "";
        let womenData = "";
 
        completData.map((value) => {
         
            manData += `
              <div class="item product">
                <img src="${value.image}" alt="Item" />
                <div class="info">
                  <div class="row">
                    <div class="price">$<span>${value.price}</span></div>
                    <div class="sized">S,M,L</div>
                  </div>
                  <div class="colors">
                    Colors:
                    <div class="row">
                      <div class="circle" style="background-color: #000"></div>
                      <div class="circle" style="background-color: #4938af"></div>
                      <div class="circle" style="background-color: #203d3e"></div>
                    </div>
                  </div>
                  <div class="row">Rating: -${value.rating.rate}</div>
                  <div>
                    <h3>${value.title}</h3>
                  </div>
                </div>
                <button id="${value.id}" class="add-to-cart-btn">Add to Cart</button>
              </div>
            `;
          

          
        });
 
        document.getElementById("itemMen").innerHTML = manData;
        
 
        // Adding event listeners after data is fetched and elements are available
        var addToCart = document.getElementsByClassName('add-to-cart-btn');
        // console.log(addToCart);
 
        
        for (let i = 0; i < addToCart.length; i++) {
        //   console.log("reacheds");
          addToCart[i].addEventListener("click", handleCart);
        }
      });
     
      let items = [];

        // check if 'item' exists in localitem
// if exists , then check the index at which it exists
//let's suppose the index is x
// then increment localitem[x].noofitem ++;
// if it doesn't exists then push localitem.push(item)
// update localstorage.setitem('items',localitem)

function handleCart(e){
  // console.log("handlecart")
  // console.log(e.target.parentElement.children[0].getAttribute("src"))

  if(JSON.parse(sessionStorage.getItem('loginUser')) != null){
    if(typeof(Storage) !==  'undefined'){
      let item ={
          id:e.target.id,
          name:e.target.parentElement.children[1].children[3].children[0].textContent,
          price:e.target.parentElement.children[1].children[0].children[0].textContent.substr(1),
          image:e.target.parentElement.children[0].getAttribute("src"),
          noOfItem:1
      }
      //console.log(item);
      if(JSON.parse(localStorage.getItem('items')) === null){
          items.push(item);
          localStorage.setItem('items',JSON.stringify(items))
          window.location.reload()
      }else{
          const localItem = JSON.parse(localStorage.getItem('items'));
          // console.log(localItem);
          localItem.map((data)=>{
              if(item.id == data.id){
                 item.noOfItem = data.noOfItem + 1;
              // console.log(noOfItem)
              // console.log(true)
              }else{
                  items.push(data);
              }
          });
           items.push(item);
          localStorage.setItem('items',JSON.stringify(items))
          // console.log(items);
           window.location.reload()
      }

  }else{
      alert("localStorage is not working on your browser")
  }
      // display the no of items inb the cart

  const localItemsToDisplay = JSON.parse(localStorage.getItem('items'))
  let no=0;
  localItemsToDisplay.map((data)=>{
      no = no+data.no;

  })
  document.getElementById('noOfItem').innerText = no
  }else{
    alert("please login before adding items to cart")
    const createLoginButton = document.getElementById('nav-items')
    createLoginButton.innerHTML = `<a href="/login">Login</a>`
    window.location.href = "../login"
  }
}    
  

 

// showing the name of the customer on the display
    const showname = JSON.parse(sessionStorage.getItem('loginUser'))

    if(showname != null){
      let fullname = showname.firstName+" "+showname.lastName;
      // console.log(fullname);
     // console.log( document.getElementById('showName'))
      document.getElementById('showName').innerHTML = `Welcome TO MeShop ${fullname}`;

    }else{
      document.getElementById('showName').innerText = `Please Login`
    }
   
// handel filtre to product
function showDataActivated(search){
  fetch(url)
      .then((data) => data.json())
      .then((completData) => {
        //  console.log(completData);
 
        let data1 = "";
        
 
        completData.map((value) => {
          if (value.category === search) {
            data1 += `
              <div class="item product">
                <img src="${value.image}" alt="Item" />
                <div class="info">
                  <div class="row">
                    <div class="price">$<span>${value.price}</span></div>
                    <div class="sized">S,M,L</div>
                  </div>
                  <div class="colors">
                    Colors:
                    <div class="row">
                      <div class="circle" style="background-color: #000"></div>
                      <div class="circle" style="background-color: #4938af"></div>
                      <div class="circle" style="background-color: #203d3e"></div>
                    </div>
                  </div>
                  <div class="row">Rating: -${value.rating.rate}</div>
                  <div>
                    <h3>${value.title}</h3>
                  </div>
                </div>
                <button id="${value.id}" class="add-to-cart-btn">Add to Cart</button>
              </div>
            `;
          } 
          if(search == "AllProduct"){
            data1 += `
            <div class="item product">
              <img src="${value.image}" alt="Item" />
              <div class="info">
                <div class="row">
                  <div class="price">$<span>${value.price}</span></div>
                  <div class="sized">S,M,L</div>
                </div>
                <div class="colors">
                  Colors:
                  <div class="row">
                    <div class="circle" style="background-color: #000"></div>
                    <div class="circle" style="background-color: #4938af"></div>
                    <div class="circle" style="background-color: #203d3e"></div>
                  </div>
                </div>
                <div class="row">Rating: -${value.rating.rate}</div>
                <div>
                  <h3>${value.title}</h3>
                </div>
              </div>
              <button id="${value.id}" class="add-to-cart-btn">Add to Cart</button>
            </div>
          `;
          }
        });
 
        document.getElementById("itemMen").innerHTML = data1;
       
 
        // Adding event listeners after data is fetched and elements are available
        var addToCart = document.getElementsByClassName('add-to-cart-btn');
        // console.log(addToCart);
 
        
        for (let i = 0; i < addToCart.length; i++) {
        //   console.log("reacheds");
          addToCart[i].addEventListener("click", handleCart);
        }
      });
}


var filtreButton = document.getElementsByClassName('filter');
        // console.log(filtreButton);
 
        for (let i = 0; i < filtreButton.length; i++) {
          // console.log("reacheds");
         filtreButton[i].addEventListener("click", filter);
       }
function filter(e){
 
// console.log(e.target.innerText)
// alert("filter activated")
// if we click on filter buttonb first we clear all the data and add n new data according to filter
document.getElementById("itemMen").innerHTML = null;


if(e.target.innerText === "Mens"){
  var search = "men's clothing";
  document.getElementById('productDiscription').innerText =search
showDataActivated(search);

}else if(e.target.innerText === "Womens"){
  var search = "women's clothing";
  document.getElementById('productDiscription').innerText =search
  showDataActivated(search);
}else if(e.target.innerText === "Jewellery"){
  var search = "jewelery";
  document.getElementById('productDiscription').innerText =search
   showDataActivated(search); 
document.getElementById('productDiscription').innerText =search
}else if(e.target.innerText === "Electronics"){
  var search = "electronics";
  document.getElementById('productDiscription').innerText =search
  showDataActivated(search);
}else if(e.target.innerText === "ALL"){
  var search = "AllProduct";
  document.getElementById('productDiscription').innerText =search
  showDataActivated(search);
}

}
             
       


