import React from "react";
import "./album-reviews.component.scss";
import { AlbumCard } from "../../album-card/album-card.component";

interface AlbumReviewsProps {
  className?: string;
  onAlbumClick?: (albumId: number) => void;
}

export function AlbumReviews({ className, onAlbumClick }: AlbumReviewsProps) {
  return (
    <div className={`albumReviews ${className ?? ""}`}>
      <section className="card-wrapper">
        <AlbumCard onAlbumClick={onAlbumClick} />
      </section>
    </div>
  );
}
