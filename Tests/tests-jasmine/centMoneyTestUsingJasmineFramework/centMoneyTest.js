// If price given in dollar then we have to convert into cents and after perform the any operation on that
// related to calculate the order price in checkout section

function formatCurrency(priceCents) {
  return `${(Math.round((priceCents)) / 100).toFixed(2)}`;
}

describe('Test suite : formatCurrency', () => {
  it('converts cents into dollar', () => {
    expect(formatCurrency(2095)).toEqual('20.95');
  });

  it('works with 0', () => {
    expect(formatCurrency(0)).toEqual('0.00');
  });

  it('rounds up to the nearest cent', () => {
    expect(formatCurrency(2000.5)).toEqual('20.01');
  });
});