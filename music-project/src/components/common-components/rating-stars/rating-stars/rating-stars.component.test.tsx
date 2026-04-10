import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { RatingStars } from "./rating-stars.component";

describe("RatingStars", () => {
  it("renders the correct number of stars", () => {
    const { container } = render(<RatingStars initialRating={3} />);
    const stars = container.querySelectorAll(".rating__star");
    expect(stars).toHaveLength(3);
  });

  it("renders no stars for a rating of 0", () => {
    const { container } = render(<RatingStars initialRating={0} />);
    const stars = container.querySelectorAll(".rating__star");
    expect(stars).toHaveLength(0);
  });

  it("renders all 5 stars for a max rating", () => {
    const { container } = render(<RatingStars initialRating={5} />);
    const stars = container.querySelectorAll(".rating__star");
    expect(stars).toHaveLength(5);
  });
});
