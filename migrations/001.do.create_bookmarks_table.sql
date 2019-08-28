CREATE TABLE bookmarks (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  url TEXT NOT NULL,
  description TEXT,
  rating NUMERIC NOT NULL
);