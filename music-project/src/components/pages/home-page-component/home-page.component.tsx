import React from "react";
import "./home-page.component.scss";

type HomePageProps = {
  className?: string;
};

export function HomePage({ className }: HomePageProps) {
  return (
    <div className={`homePage ${className ?? ""}`}>
      <h2>Welcome to private music</h2>
      <p>
        private music is a website I made to share my thoughts about all kinds
        of music. All opinions are my own.
      </p>
    </div>
  );
}
