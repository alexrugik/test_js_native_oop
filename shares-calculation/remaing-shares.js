export function remainsShares(shares, sellingShares) {
  const quantity = shares.reduce((quantity, share) => share.quantity + quantity, 0);
  return quantity - sellingShares;
}
