import "./App.css";
import { HeaderComponent } from "./components/header/header.component";
import { HomePage } from "./components/pages/home-page-component/home-page.component";
import { useState } from "react";
import { AlbumReviews } from "./components/pages/album-reviews/album-reviews.component";
import { AlbumDetail } from "./components/pages/album-detail/album-detail.component";
import { useNavigate, useParams, Routes, Route } from "react-router-dom";

function AlbumReviewsRoute() {
  const navigate = useNavigate();
  return (
    <AlbumReviews
      onAlbumClick={(albumID) => {
        navigate(`/album/${albumID}
      `);
      }}
    />
  );
}

function AlbumDetailRoute() {
  const { id } = useParams();
  const navigate = useNavigate();
  return <AlbumDetail albumId={Number(id)} onBack={() => navigate(-1)} />;
}

export default function App() {
  return (
    <>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reviews" element={<AlbumReviewsRoute />} />
        <Route path="/album/:id" element={<AlbumDetailRoute />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}
