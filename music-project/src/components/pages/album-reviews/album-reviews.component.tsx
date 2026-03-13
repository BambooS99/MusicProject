import React from "react";
import "./album-reviews.component.scss";
import { AlbumCard } from "../../album-card/album-card.component";

type AlbumReviewsProps = {
  className?: string;
};

export function AlbumReviews({ className }: AlbumReviewsProps) {
  return (
    <div className={`albumReviews ${className ?? ""}`}>
      <section className="card-wrapper">
        <AlbumCard />
      </section>
    </div>
  );
}
