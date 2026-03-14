import "./App.css";
import { HeaderComponent } from "./components/header/header.component";
import { HomePage } from "./components/pages/home-page-component/home-page.component";
import { useState } from "react";
import { AlbumReviews } from "./components/pages/album-reviews/album-reviews.component";
import { AlbumDetail } from "./components/pages/album-detail/album-detail.component";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  const [selectedAlbumId, setSelectedAlbumId] = useState<number | null>(null);

  const handleAlbumClick = (albumId: number) => {
    setSelectedAlbumId(albumId);
    setCurrentPage("Album Detail");
  };

  const handleBackToAlbums = () => {
    setSelectedAlbumId(null);
    setCurrentPage("Album Reviews");
  };

  return (
    <>
      <HeaderComponent
        className="headerComponent"
        onChangePage={setCurrentPage}
      />
      {currentPage === "Home" && <HomePage />}
      {currentPage === "Album Reviews" && (
        <AlbumReviews onAlbumClick={handleAlbumClick} />
      )}
      {currentPage === "Album Detail" && selectedAlbumId && (
        <AlbumDetail albumId={selectedAlbumId} onBack={handleBackToAlbums} />
      )}
      {/* add more later */}
    </>
  );
}

export default App;
