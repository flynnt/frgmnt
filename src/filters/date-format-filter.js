export const dateFormat = value => {
  const dateObject = new Date(value);
  const displayOptions = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  };

  return dateObject.toLocaleDateString('en-US', displayOptions);
};
