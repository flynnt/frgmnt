import EleventyVitePlugin from '@11ty/eleventy-plugin-vite';

export default async function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyVitePlugin);
  eleventyConfig.addPassthroughCopy('public');
  eleventyConfig.addPassthroughCopy('src/assets/styles');
  eleventyConfig.addPassthroughCopy('src/assets/scripts');
}

export const config = {
  dir: {
    input: 'src',
    output: 'dist',
  },
};
