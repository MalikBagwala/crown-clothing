export function addToCartItem(items, itemToAdd) {
  const existingItem = items.find(item => item.id === itemToAdd.id);
  if (existingItem) {
    return items.map(item =>
      item.id === itemToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : { ...item }
    );
  } else {
    return [...items, { ...itemToAdd, quantity: 1 }];
  }
}
export function clearItemFromCart(items, itemID) {
  return items.filter(item => item.id !== itemID);
}

export function removeItemFromCart(items, itemToRemove) {
  if (itemToRemove.quantity === 1) {
    return clearItemFromCart(items, itemToRemove.id);
  } else {
    return items.map(item =>
      item.id === itemToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : { ...item }
    );
  }
}
