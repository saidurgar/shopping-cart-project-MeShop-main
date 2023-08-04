const showname = JSON.parse(sessionStorage.getItem('loginUser'))
const localItem = JSON.parse(localStorage.getItem('items'));
// console.log(localItem)
let totalPrice = 0;
let data='';
let tabDetail = "";
localItem.map((value)=>{
  let showPrice = value.price*value.noOfItem
  totalPrice = totalPrice+(value.price*value.noOfItem);
    data += `
    <div class="item product">
      <img src="${value.image}" alt="Item" />
      <div class="info">

          <div class="price"><span>${value.price}</span></div>
       <div>Quantity:${value.noOfItem}</div>
        <div>
          <h3>${value.name}</h3>
        </div>
      </div>
      <button id="${value.id}"  class="delet">Remove</button>
    </div>
  `;

//   const tr = document.createElement('tr');
//   const td = document.createElement('td')
 tabDetail += `
   <tr>
      <td> ${value.name} </td>
      <td> ${showPrice}$ </td>
    </tr>
 `
// function remove(){
//     alert("remove item")
// }


})
if(localItem != null){
  document.getElementById('tBody').innerHTML =tabDetail;
  document.getElementById("selectedItem").innerHTML = data;
  
}else{
  alert("No Product is added")
  window.location.href = "../shop"
}
function payment(){
  if(totalPrice != 0){
    alert("totalp Payment is:- $"+totalPrice)
  let items =[];
  let paymentDetails ={
    amount:totalPrice,
    name:showname.firstName+" "+showname.lastName,
  }
  window.location.href = '../razorpay'
  sessionStorage.setItem('amountPaid',JSON.stringify(paymentDetails))
  localStorage.setItem('items',JSON.stringify(items));
  
  }else{
    alert("Please Add Item to Cart!!")
    window.location.href = "../shop"
  }
}

// Adding event listeners after data is fetched and elements are available
var addToCart = document.getElementsByClassName('delet');
 console.log(addToCart);


for (let i = 0; i < addToCart.length; i++) {
 // console.log("reacheds");
  addToCart[i].addEventListener("click", deletCart);
}

function deletCart(e){
  let items = [];
  console.log("reacheds");
  console.log(e.target.id);

  localItem.map((data)=>{
    if(data.id !== e.target.id){
      items.push(data)

    }
  })
  localStorage.setItem('items', JSON.stringify(items))
  window.location.reload();
}



    if(showname != null){
      let fullname = showname.firstName+" "+showname.lastName;
      // console.log(fullname);
     // console.log( document.getElementById('showName'))
      document.getElementById('showName').innerHTML = `Welcome TO MeShop ${fullname}`;

    }else{
      document.getElementById('showName').innerText = `Please Login`
    }