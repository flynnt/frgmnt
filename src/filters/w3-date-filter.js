export const w3DateFilter = value => {
  const dateObject = new Date(value);

  return dateObject.toISOString();
};
