import fetch from 'node-fetch';
import settings from './site.js';

import dotenv from 'dotenv';

dotenv.config();

const API_BASE = 'https://webmention.io/api';
const IS_PRODUCTION = process.env.NODE_ENV === 'production';
// eslint-disable-next-line no-undef
console.log(process.env.CF_PAGES);
const TOKEN = process.env.CF_PAGES
  ? process.env.WEBMENTION_IO_TOKEN
  : process.env.WEBMENTION_IO_TOKEN;
const { domain } = settings;

async function fetchWebMentions(perPage = 100000) {
  const url = `${API_BASE}/mentions.jf2?token=${TOKEN}&domain=${domain}&per-page=${perPage}`;
  const response = await fetch(url);
  if (!response.ok) {
    console.log('Error fetching webmentions.');
    return;
  }

  const feed = await response.json();
  console.log(
    `>>> ${feed.children.length} new webmentions fetched from ${API_BASE}`
  );
  return feed;
}

export default async function () {
  if (!IS_PRODUCTION) {
    return;
  }

  const feed = await fetchWebMentions();
  return feed;
}
