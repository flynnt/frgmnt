import sanitizeHTML from 'sanitize-html';

export const webMentionsByUrl = (webmentions, url) => {
  const allowedTypes = ['mention-of', 'in-reply-to'];
  const allowedHTML = {
    allowedTags: ['b', 'i', 'em', 'strong', 'a'],
    allowedAttributes: {
      a: ['href'],
    },
  };

  const orderByDate = (a, b) => new Date(a.published) - new Date(b.published);

  const checkRequiredFields = entry => {
    const { author, published, content } = entry;
    return !!author && !!author.name && !!published && !!content;
  };

  const clean = entry => {
    const { html, text } = entry.content;

    if (html) {
      entry.content.value =
        html.length > 2000
          ? `mentioned this in <a href="${entry['wm-source']}">${entry['wm-source']}</a>`
          : sanitizeHTML(html, allowedHTML);
    } else {
      entry.content.value = sanitizeHTML(text, allowedHTML);
    }

    return entry;
  };

  return webmentions
    .filter(entry => entry['wm-target'] === url)
    .filter(entry => allowedTypes.includes(entry['wm-property']))
    .filter(checkRequiredFields)
    .sort(orderByDate)
    .map(clean);
};
