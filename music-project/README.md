# private music

A personal album review site. Browse reviews, read write-ups, and look at cover art.

## Stack

- React 19 + TypeScript (Vite)
- React Router v7
- Express backend serving a flat JSON file
- SCSS for styles

## Running locally

Frontend:
```
npm run dev
```

Backend (from `server/`):
```
npm run dev
```

Frontend runs on `http://localhost:5173`. Backend runs on `http://localhost:5000`.

## Build

```
npm run build
```

Output goes to `dist/`.

## Project structure

```
src/
  components/
    header/              nav bar and buttons
    pages/               album reviews, album detail, home
    common-components/   rating stars, retro button
server/
  index.js               Express API
  albums.json            data source
```

## API

`GET /api/albums` returns all albums.  
`GET /api/albums/:id` returns a single album by ID.

## Adding albums

Edit `server/albums.json`. Required fields: `id`, `title`, `artist`, `year`, `coverImageUrl`, `review`, `highlights`, `rating` (1-5).
