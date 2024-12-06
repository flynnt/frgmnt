import fetch from 'node-fetch';

import dotenv from 'dotenv';

dotenv.config();

const API_BASE = 'https://ws.audioscrobbler.com/2.0';
const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const KEY = process.env.LASTFM_API_KEY;

async function fetchTracks(limit = 1) {
  const url = `${API_BASE}/?api_key=${KEY}&method=user.getrecenttracks&user=lostlemming&format=json&limit=${limit}`;
  const response = await fetch(url);
  if (!response.ok) {
    console.log('Error fetching last.fm tracks.');
    return;
  }

  const feed = await response.json();
  console.log(
    `>>> ${feed.recenttracks.track.length} new track fetched from ${API_BASE}`
  );
  return feed;
}

export default async function () {
  if (!IS_PRODUCTION) {
    return;
  }

  const feed = await fetchTracks();
  return feed;
}
