import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { AlbumCard } from "./album-card.component";

const mockAlbums = [
  {
    id: 1,
    title: "Low",
    artist: "David Bowie",
    year: 1977,
    genre: "art-rock",
    coverImageUrl: "https://example.com/low.jpg",
    review: "Great album",
    highlights: "Sound and Vision",
    rating: 5,
  },
];

describe("AlbumCard", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("shows loading state initially", () => {
    vi.spyOn(global, "fetch").mockResolvedValue(new Response("[]"));
    render(<AlbumCard />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it("renders albums after successful fetch", async () => {
    vi.spyOn(global, "fetch").mockResolvedValue(
      new Response(JSON.stringify(mockAlbums), { status: 200 }),
    );
    render(<AlbumCard />);
    await waitFor(() => expect(screen.getByText("Low")).toBeInTheDocument());
    expect(screen.getByText("David Bowie")).toBeInTheDocument();
    expect(screen.getByText("1977")).toBeInTheDocument();
  });

  it("shows error state when fetch fails", async () => {
    vi.spyOn(global, "fetch").mockRejectedValue(new Error("Network error"));
    render(<AlbumCard />);
    await waitFor(() =>
      expect(screen.getByText(/failed to load albums/i)).toBeInTheDocument(),
    );
  });
});
