export function costBasesOfSoldShares(sharesFromStrategy, soldSharesQuantity, soldPrice) {
  const fullQuantity = sharesFromStrategy.quantity;
  const remainingQuantity = fullQuantity - soldSharesQuantity;
  return (remainingQuantity * sharesFromStrategy.price + soldSharesQuantity * soldPrice) / fullQuantity;
}
