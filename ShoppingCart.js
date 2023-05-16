if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
 // Get the increment and decrement buttons
 const incrementButtons = document.querySelectorAll('.cart-qty-plus');
 const decrementButtons = document.querySelectorAll('.cart-qty-minus');

// Loop through the increment buttons and add event listeners to each one
incrementButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Get the parent row of the button that was clicked
    const parentRow = button.closest('tr');

    // Get the quantity input field within the parent row
    const quantityInput = parentRow.querySelector('.qty');

    // Get the price of the product within the parent row
    const price = parseFloat(parentRow.querySelector('.price').value);

    // Get the amount <span> element within the parent row
    const amountSpan = parentRow.querySelector('.amount');

    // Get the current value of the quantity input field
    let currentQuantity = parseInt(quantityInput.value);
    if (isNaN(currentQuantity) || currentQuantity < 1) {
      currentQuantity = 0;
    }

    // Increment the quantity and update the input field
    currentQuantity++;
    quantityInput.value = currentQuantity;

    // Calculate the new amount based on the price and current quantity
    const newAmount = price * currentQuantity;

    // Update the content of the amount <span> element with the new amount
    amountSpan.textContent = newAmount.toFixed(2);
  });
});
// Loop through the decrement buttons and add event listeners to each one
decrementButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      // Get the parent row of the button that was clicked
      const parentRow = button.closest('tr');
  
      // Get the quantity input field within the parent row
      const quantityInput = parentRow.querySelector('.qty');
  
      // Get the price of the product within the parent row
      const price = parseFloat(parentRow.querySelector('.price').value);
  
      // Get the amount <span> element within the parent row
      const amountSpan = parentRow.querySelector('.amount');
  
      // Get the current value of the quantity input field
      const currentQuantity = parseInt(quantityInput.value);
  
      // Decrease the quantity by 1, but not below 0
      const newQuantity = Math.max(currentQuantity - 1, 0);
  
      // Calculate the new amount based on the price and new quantity
      const newAmount = price * newQuantity;
  
      // Update the content of the quantity input field and amount <span> element
      quantityInput.value = newQuantity;
      amountSpan.textContent = newAmount.toFixed(2);
    });
  });




var TotalCalcButtons = document.getElementsByClassName("total-calc");
console.log(TotalCalcButtons);

for (var i = 0; i < TotalCalcButtons.length; i++) {
  var button = TotalCalcButtons[i]
  button.addEventListener('click', TotalBtnClicked)
}



function TotalBtnClicked(event) {
// Get all the amount elements
const amounts = document.getElementsByClassName("amount");

// Initialize the total amount to 0
let totalAmount = 0;

// Loop through all the amount elements and add up their values
for (let i = 0; i < amounts.length; i++) {
  // Parse the amount value and add it to the total amount
  const amountValue = parseFloat(amounts[i].textContent);
  if (!isNaN(amountValue)) {
    totalAmount += amountValue;
  } else {
    console.log(`Invalid amount value: ${amounts[i].textContent}`);
  }
}


 // Apply special pricing rules based on the quantity of each product
 const smallQuantity = parseInt(document.getElementById('qty-small').value);
 const largeQuantity = parseInt(document.getElementById('qty-large').value);
 const mediumQuantity = parseInt(document.getElementById('qty-medium').value);
 var promoCodeInput = document.getElementById('promoCode');

 var promoCode = promoCodeInput.value;
 console.log(promoCode);



 if (smallQuantity % 3 === 0) {
    // Apply discount for ult_small if quantity is divisible by 3
    var smallQty = smallQuantity / 3;
    var pricedisc = 0;

    // Apply discount for ult_small if quantity is 3
    totalAmount += (((parseFloat(document.getElementById('price-small').value) ) * 2)*smallQty)-(((parseFloat(document.getElementById('price-small').value) ) * 3)*smallQty);
      pricedisc = totalAmount / smallQty;
    
  }

  if (largeQuantity >= 3) {
    // Apply discount for ult_large if quantity is 3 or more
    totalAmount += ((parseFloat(document.getElementById('price-large').value) - 44.90) - 5 * largeQuantity );
  }



 if (mediumQuantity === 1) {
   // Apply discount for ult_med if quantity is 1
   totalAmount += parseFloat(document.getElementById('price-medium').value) - 29.90;
  }


// Apply promo code discount if applicable
if (promoCode == 'I<3AMAYSIM') {
    totalAmount *= 0.9; // apply 10% discount
  }


  // Set the text content of the "TOTAL" span element
  const totalSpan = document.getElementById("total");
  totalSpan.textContent = totalAmount.toFixed(2);

// Display the total amount
console.log("Total amount: $", totalAmount);

// Get quantity values
const outputDiv = document.getElementById('cart-items');

// get the quantity and product name for each row
const smallQty1 = parseFloat(document.getElementById('qty-small').value);
const smallName = document.getElementById('code_small').textContent;
const mediumQty1 = parseFloat(document.getElementById('qty-medium').value);
const mediumName = document.getElementById('code_medium').textContent;
const largeQty1 = parseFloat(document.getElementById('qty-large').value);
const largeName = document.getElementById('code_large').textContent;
const oneGBQty1 = parseFloat(document.getElementById('qty-1gb').value);
const oneGBName = document.getElementById('code_1gb').textContent;

// create cartrow elements for each product with quantity > 0
if (smallQty1 > 0) {
  const smallRow = document.createElement('div');
  smallRow.textContent = smallQty1 + ' x ' + smallName;
  outputDiv.appendChild(smallRow);
}

if (mediumQty1 > 0) {
  const mediumRow = document.createElement('div');
  mediumRow.textContent = mediumQty1 + ' x ' + mediumName;
  outputDiv.appendChild(mediumRow);
  const newRow = document.createElement('div');
  newRow.textContent = mediumQty1 + ' x ' + oneGBName + " (bundle w/ ult_med)";
  outputDiv.appendChild(newRow);
}

if (largeQty1 > 0) {
  const largeRow = document.createElement('div');
  largeRow.textContent = largeQty1 + ' x ' + largeName;
  outputDiv.appendChild(largeRow);
}

if (oneGBQty1 > 0) {
  const oneGBRow = document.createElement('div');
  oneGBRow.textContent = oneGBQty1 + ' x ' + oneGBName;
  outputDiv.appendChild(oneGBRow);
}

}

document.getElementsByClassName('purchase-btn')[0].addEventListener('click', purchaseClicked)

function purchaseClicked(event) {
  alert('Thank you for your purchase')

  //Remove cart items, amount and total
  var cartItems = document.getElementById('cart-items')
  while (cartItems.firstChild) {
    cartItems.removeChild(cartItems.firstChild);
  }
  document.getElementById('qty-small').value = 0;
  document.getElementById('qty-medium').value = 0;
  document.getElementById('qty-large').value = 0;
  document.getElementById('qty-1gb').value = 0;

  var totalElement = document.getElementById("total");
  var amountElements = document.getElementsByClassName("amount");
  
  totalElement.textContent = "0";
  for (var i = 0; i < amountElements.length; i++) {
    amountElements[i].textContent = "0";
  }
}

}


