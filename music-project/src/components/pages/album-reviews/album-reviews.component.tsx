import React from "react";
import "./album-reviews.component.scss";

type AlbumReviewsProps = {
  className?: string;
};

export function AlbumReviews({ className }: AlbumReviewsProps) {
  return (
    <div className={`albuymReviews ${className ?? ""}`}>
      <h2>Reviews</h2>
      <p>Sample text here</p>
    </div>
  );
}
