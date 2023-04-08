const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function formatCurrency(value: number) {
  return formatter.format(value);
}

export default formatCurrency;
