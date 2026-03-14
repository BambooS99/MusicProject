import "./back-button.component.scss";

interface BackButtonProps {
  onClick?: () => void;
  text?: string;
}

export function BackButton({ onClick, text = "Go Back" }: BackButtonProps) {
  return (
    <button className="back-button" type="button" onClick={onClick}>
      <div className="back-button__icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 1024"
          height="25px"
          width="25px">
          <path
            d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
            fill="#000000"></path>
          <path
            d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
            fill="#000000"></path>
        </svg>
      </div>
      <p className="back-button__text">{text}</p>
    </button>
  );
}
