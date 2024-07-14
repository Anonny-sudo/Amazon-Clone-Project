import {addToCart, cart, laodFromStrorage} from '../../../data/cart.js'

describe('Test Suite : addToCart', () => {
  it('adds an existing product to the cart', () => {
    spyOn(localStorage, 'setItem');

    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([{
        productId : '77919bbe-0e56-475b-adde-4f24dfed3a04',
        quantity : 1,
        deliveryoptionId : '1'
      }]);
    });
    laodFromStrorage();

    addToCart('77919bbe-0e56-475b-adde-4f24dfed3a04');
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart[0].productId).toEqual('77919bbe-0e56-475b-adde-4f24dfed3a04');
    expect(cart[0].quantity).toEqual(2);
  });

  it('adds a new product to the cart', () => {
    spyOn(localStorage, 'setItem');

    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([]);
    });
    laodFromStrorage();

    addToCart('77919bbe-0e56-475b-adde-4f24dfed3a04');
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart[0].productId).toEqual('77919bbe-0e56-475b-adde-4f24dfed3a04');
    expect(cart[0].quantity).toEqual(1);
  });
});