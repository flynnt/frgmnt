import EleventyVitePlugin from '@11ty/eleventy-plugin-vite';
import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight';
import { dateFormat } from './src/filters/date-format-filter.js';
import { w3DateFilter } from './src/filters/w3-date-filter.js';

export default async function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyVitePlugin);
  eleventyConfig.addFilter('dateFormat', dateFormat);
  eleventyConfig.addFilter('w3DateFilter', w3DateFilter);
  eleventyConfig.addPlugin(syntaxHighlight);
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
