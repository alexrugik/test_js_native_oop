export function costBasesOfRemainingShares(shares, sharesFromStrategy, soldSharesQuantity) {
  let copyShares = JSON.parse(JSON.stringify(shares));
  copyShares = copyShares.map((share) => {
    if (share.date === sharesFromStrategy.date) {
      share.quantity = share.quantity - soldSharesQuantity;
    }
    return share;
  });
  const sumPrice = copyShares.reduce((sumPrice, share) => sumPrice + (share.quantity * share.price),0);
  const sumQuantity = copyShares.reduce((sumQuantity, share) => sumQuantity + share.quantity, 0);
  return sumPrice / sumQuantity;
}
