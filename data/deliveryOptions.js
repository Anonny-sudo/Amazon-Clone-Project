export const deliveryoptions = [{
  id: '1',
  deliveryDays: 7,
  price: 0
},
{
  id: '2',
  deliveryDays: 3,
  price: 49
},
{
  id: '3',
  deliveryDays: 0,
  price: 99
}];

export function getDeliveryOption(deliveryoptionId) {
  let deliveryOption;

  deliveryoptions.forEach((option) => {
    if (option.id === deliveryoptionId) {
      deliveryOption = option;
    }
  });
  return deliveryOption || deliveryoptions[0];
}