import { mkdir, writeFile } from 'node:fs/promises';
const base = new URL('./data/', import.meta.url);
await mkdir(base, { recursive: true });
for (const name of ['users.json', 'watchlists.json']) {
 const response = await fetch('https://raw.githubusercontent.com/freeCodeCamp/back-end-development-and-apis/main/build-a-family-movie-watchlist-api/data/' + name);
 if (!response.ok) throw new Error('Unable to download official fixture: ' + name);
 const data = await response.json();
 await writeFile(new URL(name, base), JSON.stringify(data, null, 2));
}
console.log('Official freeCodeCamp fictional fixtures downloaded.');
