import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { AlbumDetail } from "./album-detail.component";

const mockAlbum = {
  id: 1,
  title: "Low",
  artist: "David Bowie",
  year: 1977,
  genre: "art-rock",
  coverImageUrl: "https://example.com/low.jpg",
  review: "Very obvious influence from Kraftwerk.",
  highlights: "Sound and Vision",
  rating: 5,
};

describe("AlbumDetail", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("shows loading state initially", () => {
    vi.spyOn(global, "fetch").mockResolvedValue(
      new Response(JSON.stringify(mockAlbum), { status: 200 }),
    );
    render(<AlbumDetail albumId={1} />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it("renders album details after successful fetch", async () => {
    vi.spyOn(global, "fetch").mockResolvedValue(
      new Response(JSON.stringify(mockAlbum), { status: 200 }),
    );
    render(<AlbumDetail albumId={1} />);
    await waitFor(() => expect(screen.getByText("Low")).toBeInTheDocument());
    expect(screen.getByText("David Bowie")).toBeInTheDocument();
    expect(screen.getByText("1977")).toBeInTheDocument();
  });

  it("shows error state when fetch fails", async () => {
    vi.spyOn(global, "fetch").mockRejectedValue(new Error("Network error"));
    render(<AlbumDetail albumId={1} />);
    await waitFor(() =>
      expect(
        screen.getByText(/failed to load album details/i),
      ).toBeInTheDocument(),
    );
  });

  it("shows not found when fetch returns 404", async () => {
    vi.spyOn(global, "fetch").mockResolvedValue(
      new Response("Not found", { status: 404 }),
    );
    render(<AlbumDetail albumId={999} />);
    await waitFor(() =>
      expect(
        screen.getByText(/failed to load album details/i),
      ).toBeInTheDocument(),
    );
  });
});
