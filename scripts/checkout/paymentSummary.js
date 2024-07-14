import { cart } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";
import { addOrder } from "../../data/order.js";

export function renderPaymentSummary(){
  let productPrice = 0;
  let shippingPrice = 0;

  cart.forEach(cartItem => {
    const product = getProduct(cartItem.productId);
    productPrice += product.price * cartItem.quantity;

    const deliveryOption =  getDeliveryOption(cartItem.deliveryoptionId);
    shippingPrice += deliveryOption.price;
  });

  const totalBeforeTax = productPrice + shippingPrice;
  const taxRateString = '10.00';
  const tax = (totalBeforeTax / 10).toFixed(2);
  const totalAmount = total(totalBeforeTax, taxRateString);

  function total(totalBeforeTax, tax){
    const taxRate = parseFloat(tax) / 100;
    const taxAmount = totalBeforeTax * taxRate;
    const formattedTaxAmount = taxAmount.toFixed(2);
    const totalWithTax = totalBeforeTax + parseFloat(formattedTaxAmount);
    return totalWithTax.toFixed(2);
  }

  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  const paymentSummary = `
    <div class="payment-summary-title">
      Order Summary
    </div>

    <div class="payment-summary-row">
      <div>Items (${cartQuantity}):</div>
      <div class="payment-summary-money">
        ₹${productPrice}
      </div>
    </div>

    <div class="payment-summary-row">
      <div>Shipping &amp; handling:</div>
      <div class="payment-summary-money">
        ₹${shippingPrice}
      </div>
    </div>

    <div class="payment-summary-row subtotal-row">
      <div>Total before tax:</div>
      <div class="payment-summary-money">
        ₹${totalBeforeTax}
      </div>
    </div>

    <div class="payment-summary-row">
      <div>Estimated tax (10%):</div>
      <div class="payment-summary-money">
        ₹${tax}
      </div>
    </div>

    <div class="payment-summary-row total-row">
      <div>Order total:</div>
      <div class="payment-summary-money">
        ₹${totalAmount}
      </div>
    </div>

    <button class="place-order-button button-primary js-place-order">
      Place your order
    </button>
  `

  document.querySelector('.js-payment-summary').innerHTML = paymentSummary;

  document.querySelector('.js-place-order')
    .addEventListener('click', async () => {
      const response = await fetch('https://supersimplebackend.dev/orders', {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
          cart : cart
        })
      });
      const order = await response.json();
      addOrder();
      window.location.href = 'orders.html';
    });
}