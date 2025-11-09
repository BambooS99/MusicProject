import "./App.css";
import { HeaderComponent } from "./components/header/header.component";
import { HomePage } from "./components/pages/home-page-component/home-page.component";
import { useState } from "react";
import { AlbumReviews } from "./components/pages/album-reviews/album-reviews.component";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  return (
    <>
      <HeaderComponent
        className="headerComponent"
        onChangePage={setCurrentPage}
      />
      {currentPage === "Home" && <HomePage />}
      {currentPage === "Album Reviews" && <AlbumReviews />}
      {/* add more later */}
    </>
  );
}

export default App;
