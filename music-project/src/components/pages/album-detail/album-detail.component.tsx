import { useEffect, useState } from "react";
import "./album-detail.component.scss";
import { TerminalSection } from "../../terminal-section/terminal-section.component";
import { RatingStars } from "../../rating-stars/rating-stars.component";
import { BackButton } from "../../back-button/back-button.component";

interface AlbumDetailProps {
  albumId: number;
  onBack?: () => void;
}

type Album = {
  id: number;
  title: string;
  artist: string;
  year: number;
  genre: string;
  coverImageUrl: string;
  review: string;
  highlights: string;
  rating: number;
};

export function AlbumDetail({ albumId, onBack }: AlbumDetailProps) {
  const [album, setAlbum] = useState<Album | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadAlbum() {
      try {
        const res = await fetch(`http://localhost:5000/api/albums/${albumId}`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setAlbum(data);
      } catch (err: any) {
        console.error(err);
        setError("Failed to load album details");
      } finally {
        setLoading(false);
      }
    }
    loadAlbum();
  }, [albumId]);

  if (loading) return <p>Loading album details…</p>;
  if (error) return <p>{error}</p>;
  if (!album) return <p>Album not found</p>;

  return (
    <div className="album-detail">
      <BackButton onClick={onBack} text="Back to Albums" />

      <div className="album-detail__container">
        {/* Hero Section */}
        <section className="album-detail__hero">
          <div className="album-detail__cover-wrapper">
            <img
              src={album.coverImageUrl}
              alt={album.title}
              className="album-detail__cover"
            />
          </div>

          <div className="album-detail__hero-info">
            <h1 className="album-detail__title">{album.title}</h1>
            <h2 className="album-detail__artist">{album.artist}</h2>

            <div className="album-detail__meta">
              <span className="album-detail__year">{album.year}</span>
              {album.genre && (
                <>
                  <span className="album-detail__separator">•</span>
                  <span className="album-detail__genre">{album.genre}</span>
                </>
              )}
            </div>

            <div className="album-detail__rating">
              <RatingStars initialRating={album.rating} />
              <span className="album-detail__rating-text">
                {album.rating}/5
              </span>
            </div>
          </div>
        </section>

        {/* Review Section */}
        <div className="album-detail__content-grid">
          <TerminalSection title="Review">
            <p className="album-detail__review">{album.review}</p>
          </TerminalSection>

          {/* Highlights Section */}
          {album.highlights && (
            <TerminalSection title="Track Highlights">
              <div className="album-detail__highlights">
                {album.highlights.split(",").map((track, idx) => (
                  <span key={idx} className="album-detail__highlight-tag">
                    {track.trim()}
                  </span>
                ))}
              </div>
            </TerminalSection>
          )}
        </div>
      </div>
    </div>
  );
}
