// If price given in dollar then we have to convert into cents and after perform the any operation on that
// related to calculate the order price in checkout section

function formatCurrency(priceCents) {
  return `${(Math.round((priceCents)) / 100).toFixed(2)}`;
}

console.log('Test suite : formatCurrency')
console.log(`$${formatCurrency(2095)}`);

console.log('converts cents into dollar')
if (formatCurrency(2095) === '20.95') {
  console.log('Passed');
}
else
  console.log('Failed');

console.log('works with 0')
if (formatCurrency(0) === '0.00') {
  console.log('Passed');
}
else
  console.log('Failed');

console.log('rounds up to the nearest cent')
if (formatCurrency(2000.5) === '20.01') {
  console.log('Passed');
}
else
  console.log('Failed');