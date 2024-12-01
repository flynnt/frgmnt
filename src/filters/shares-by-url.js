export const sharesByUrl = (webmentions, url) => {
  const allowedTypes = ['repost-of'];

  const orderByDate = (a, b) => new Date(a.published) - new Date(b.published);

  const checkRequiredFields = entry => {
    const { author } = entry;
    return !!author && !!author.name;
  };

  return webmentions
    .filter(entry => entry['wm-target'] === url)
    .filter(entry => allowedTypes.includes(entry['wm-property']))
    .filter(checkRequiredFields)
    .sort(orderByDate);
};
