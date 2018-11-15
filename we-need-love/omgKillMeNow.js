function isFirstCartFull(crt) {
  let full = false
  const maxSize = 100

  if (crt.size > maxSize) {
    return full = true;
  } else {
    return full = false
  }
}
let cartName = 'Shopping Cart';
let cartSize = 101
let carts = [{
  name: cartName,
  size: cartSize
}];

let firstCart = carts[0];
let isCartFull = isFirstCartFull(firstCart);

// console.log(isCartFull);
console.log(firstCart.name + " has " + firstCart.size + " items");