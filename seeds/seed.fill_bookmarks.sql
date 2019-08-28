TRUNCATE TABLE bookmarks;

INSERT INTO bookmarks (
  title,
  url,
  description,
  rating
) VALUES
(
    'book 1',
    'somethin.com',
    'its a book',
    '5'
  ),
  (
    'book 2',
    'somethingelse.org',
    'this describes it',
    '3'
  ),
  (
    'book 3',
    'website.com',
    'this is about a book',
    '4'
  );