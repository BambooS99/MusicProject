import React, { useEffect, useState } from "react";

type Album = {
  id: number;
  title: string;
  artist: string;
  year: number;
  genre: string;
  coverImageUrl: string;
  review: string;
  highlights: string;
  rating: string;
};

export function AlbumCard() {
  const [albums, setAlbums] = useState<Album[]>([]);
  useEffect(() => {
    async function loadAlbums() {
      const res = await fetch("http://localhost:5000/api/albums");
      const data = await res.json();
      setAlbums(data);
    }
    loadAlbums();
  }, []);

  return <div></div>;
}
