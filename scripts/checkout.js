// import { loadProducts } from "../data/products.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";

// import '.././data/cart-oop.js'  // OOP's me use kiya hai


/* async function loadPage(){
  console.log('Load Page');
  return 'value2';
}
loadPage().then((value) => {
  console.log('next step');
  console.log(value);
}); */

/* new Promise ((resolve) => {
  console.log('PROMISES');
}) */

  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();