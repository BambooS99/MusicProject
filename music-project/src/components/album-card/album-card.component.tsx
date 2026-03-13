import { useEffect, useState } from "react";
import "./album-card.component.scss";

type Album = {
  id: number;
  title: string;
  artist: string;
  year: number;
  genre: string;
  coverImageUrl: string;
  review: string;
  hightlights: string; // match your JSON spelling
  rating: number;
};

export function AlbumCard() {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadAlbums() {
      try {
        const res = await fetch("http://localhost:5000/api/albums");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setAlbums(data);
      } catch (err: any) {
        console.error(err);
        setError("Failed to load albums");
      } finally {
        setLoading(false);
      }
    }
    loadAlbums();
  }, []);

  if (loading) return <p>Loading albums…</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="album-list">
      {albums.map((album) => (
        <div key={album.id} className="album-card">
          {/* macOS-style traffic lights */}
          <div className="tools">
            <div className="circle">
              <span className="box red"></span>
            </div>
            <div className="circle">
              <span className="box yellow"></span>
            </div>
            <div className="circle">
              <span className="box green"></span>
            </div>
          </div>

          {/* Card content */}
          <div className="album-card__content">
            <div className="album-card__image-wrapper">
              <img
                className="album-card__image"
                src={album.coverImageUrl}
                alt={album.title}
              />
            </div>

            <h3 className="album-card__title">{album.title}</h3>
            <p className="album-card__artist">{album.artist}</p>
            <p className="album-card__year">{album.year}</p>

            <p className="album-card__review">{album.review}</p>

            <div className="album-card__footer">
              {album.genre && (
                <span className="album-card__genre">{album.genre}</span>
              )}
              <div className="album-card__rating">
                <span>⭐</span>
                <span>{album.rating}/5</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
