import "./rating-stars.component.scss";

interface RatingStarsProps {
  initialRating: number;
  readonly?: boolean;
}

export function RatingStars({
  initialRating,
  readonly = true,
}: RatingStarsProps) {
  const starColors = [
    { id: 1, color: "#ef4444" }, // red
    { id: 2, color: "#e06c2b" }, // orange
    { id: 3, color: "#eab308" }, // yellow
    { id: 4, color: "#19c37d" }, // green
    { id: 5, color: "#ab68ff" }, // purple
  ];

  return (
    <div className="rating rating--display">
      {starColors.slice(0, initialRating).map((star) => (
        <div key={star.id} className="rating__star">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill={star.color}>
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
      ))}
    </div>
  );
}
