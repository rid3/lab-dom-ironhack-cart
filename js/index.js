// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span');
  let quantity = product.querySelector(".quantity input");

  let priceNumber = price.innerHTML;
  let quantityNumber = quantity.value;

  let subtotalCount = priceNumber * quantityNumber;

  let subtotalNumber = product.querySelector(".subtotal span");
  subtotalNumber.innerText = subtotalCount;

  return subtotalCount;

  console.log('Calculating subtotal, yey!');
}

function calculateAll() {

  let allProducts = document.querySelectorAll(".product");
  let sumSubtotal = 0; 

  allProducts.forEach( (eachProduct) => {
    let subTotal = updateSubtotal (eachProduct);
    sumSubtotal += subTotal;
  })

let totalAmount = document.querySelector("#total-value span")
 totalAmount.innerText = sumSubtotal
}

// ITERATION 4

function removeProduct(event) {
   const target = event.currentTarget;
   console.log('The target in remove is:', target);
   target.parentNode.parentNode.remove()
   calculateAll()
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  console.log("lohice")

  let aVerSiPuedo = document.querySelector(".create-product");

  let newProductDOM = document.createElement("tr")
  newProductDOM = document.querySelectorAll(".create-product.innerText");
  
aVerSiPuedo.appendChild(newProductDOM)
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

let removeBotton = document.querySelectorAll('.btn-remove')

removeBotton.forEach ((eachButton) => {
  eachButton.addEventListener('click', removeProduct);
})

let newProductBotton = document.querySelector("#create")
newProductBotton.addEventListener("click", createProduct)

});

