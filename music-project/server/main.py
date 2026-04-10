from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import Optional, List
import psycopg2
import os
from dotenv import load_dotenv

load_dotenv()

def get_db():
    return psycopg2.connect(
        host=os.getenv("DB_HOST", "localhost"),
        port=os.getenv("DB_PORT", "5432"),
        dbname=os.getenv("DB_NAME", "musicdb"),
        user=os.getenv("DB_USER", "postgres"),
        password=os.getenv("DB_PASSWORD", "")
    )

class Album(BaseModel):
    model_config = {"populate_by_name": True}

    id: int
    title: str
    artist: str
    year: int
    genre: Optional[str] = None
    coverImageUrl: str = Field(alias="cover_image_url")
    review: str
    highlights: str
    rating: int

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/albums", response_model=List[Album], response_model_by_alias=False)
def get_albums():
    conn = get_db()
    cur = conn.cursor()
    cur.execute("SELECT id, title, artist, year, genre, cover_image_url, review, highlights, rating FROM albums")
    rows = cur.fetchall()
    cur.close()
    conn.close()
    return [Album(id=r[0], title=r[1], artist=r[2], year=r[3], genre=r[4], cover_image_url=r[5], review=r[6], highlights=r[7], rating=r[8]) for r in rows]

@app.get("/api/albums/{album_id}", response_model=Album, response_model_by_alias=False)
def get_album(album_id: int):
    conn = get_db()
    cur = conn.cursor()
    cur.execute("SELECT id, title, artist, year, genre, cover_image_url, review, highlights, rating FROM albums WHERE id = %s", (album_id,))
    row = cur.fetchone()
    cur.close()
    conn.close()
    if row is None:
        raise HTTPException(status_code=404, detail="Album not found")
    return Album(id=row[0], title=row[1], artist=row[2], year=row[3], genre=row[4], cover_image_url=row[5], review=row[6], highlights=row[7], rating=row[8])