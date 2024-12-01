import EleventyVitePlugin from '@11ty/eleventy-plugin-vite';
import { feedPlugin } from '@11ty/eleventy-plugin-rss';
import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight';
import { dateFormat } from './src/filters/date-format-filter.js';
import { w3DateFilter } from './src/filters/w3-date-filter.js';
import { webMentionsByUrl } from './src/filters/web-mentions-by-url.js';
import { likesByUrl } from './src/filters/likes-by-url.js';
import { sharesByUrl } from './src/filters/shares-by-url.js';

export default async function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyVitePlugin);
  eleventyConfig.addFilter('dateFormat', dateFormat);
  eleventyConfig.addFilter('w3DateFilter', w3DateFilter);
  eleventyConfig.addFilter('getWebmentionsForUrl', webMentionsByUrl);
  eleventyConfig.addFilter('getLikesForUrl', likesByUrl);
  eleventyConfig.addFilter('getSharesForUrl', sharesByUrl);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(feedPlugin, {
    type: 'atom',
    outputPath: '/public/feed.xml',
    collection: {
      name: 'posts',
      limit: 10,
    },
    metadata: {
      language: 'en',
      title: 'frgmnt.art',
      subtitle: 'An Audio Sketchbook',
      base: 'https://frgmnt.art/',
      author: {
        name: 'Ted Flynn',
        email: 'frgmnt@spectral.mozmail.com',
      },
    },
  });
  eleventyConfig.addPassthroughCopy('public');
  eleventyConfig.addPassthroughCopy('src/assets/styles');
  eleventyConfig.addPassthroughCopy('src/assets/scripts');

  const now = new Date();
  const livePosts = post => post.date <= now && !post.data.draft;

  eleventyConfig.addCollection('posts', collection => {
    return [
      ...collection.getFilteredByGlob('./src/posts/*.md').filter(livePosts),
    ];
  });

  eleventyConfig.addCollection('postFeed', collection => {
    return [
      ...collection.getFilteredByGlob('./src/posts/*.md').filter(livePosts),
    ].slice(0, 10);
  });

  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: '<!-- split -->',
  });

  eleventyConfig.addShortcode(
    'audio',
    src => `<audio src="${src}" controls></audio>`
  );
}

export const config = {
  dir: {
    input: 'src',
    output: 'dist',
  },
};
