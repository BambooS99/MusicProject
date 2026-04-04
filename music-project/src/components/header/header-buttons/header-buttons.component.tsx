import { useNavigate } from "react-router-dom";
import "./header-buttons.component.scss";

interface HeaderButtonProps {
  className?: string;
}

export function HeaderButtons({ className }: HeaderButtonProps) {
  const navigate = useNavigate();
  return (
    <div className={`headerButtons ${className ?? ""}`}>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/reviews")}>Album Reviews</button>
      <button onClick={() => navigate("/new-releases")}>New Releases</button>
      <button onClick={() => navigate("/about")}>About</button>
      <button onClick={() => navigate("/contribute")}>Contribute</button>
    </div>
  );
}
