import "./App.css";
import { HeaderComponent } from "./components/header/header.component";
import { HomePage } from "./components/pages/home-page-component/home-page.component";

function App() {
  return (
    <>
      <HeaderComponent className="headerComponent" />
      <HomePage />
    </>
  );
}

export default App;
